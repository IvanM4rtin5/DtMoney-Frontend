import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect} from 'react';

interface AuthContextData {
  user: User | null;
  signIn: ({ email, password }: { email: string; password: string }) => Promise<void>;
  signOut: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const userData = localStorage.getItem('@dtmoney:user');
      const token = localStorage.getItem('@dtmoney:token');
  
      if (userData && token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    },[]);

  async function signIn({ email, password }: { email: string; password: string }) {
    try {
      const response = await api.post('/auth/login', { email, password });

      const { user, token } = response.data;

      // Salva o token e o usuário no localStorage
      localStorage.setItem('@dtmoney:token', token);
      localStorage.setItem('@dtmoney:user', JSON.stringify(user));

      // Configura o token como padrão nas requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);

      navigate('/transactions');
    } catch (error: any | Error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert('Erro ao fazer login');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@dtmoney:user'); 
    localStorage.removeItem('@dtmoney:token');

    delete api.defaults.headers.common["Authorization"];

    setUser(null);
    navigate('/');
  }

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: user || null 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}
