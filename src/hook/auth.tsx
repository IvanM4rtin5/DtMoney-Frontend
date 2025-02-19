import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from 'react';

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
  
  const [user, setUser] = useState<User | null>(() => {
    // Recupera o usuário do localStorage no carregamento inicial
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem("@dtmoney:token");

    if (userData && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return JSON.parse(userData);
    }
    return null;
  });

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
    localStorage.removeItem('@dtmoney:user'); // Remove o usuário do localStorage
    localStorage.removeItem('@dtmoney:token');

    delete api.defaults.headers.common["Authorization"];
    
    setUser(null);
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: user || null // Corrigido aqui para refletir o estado correto
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
