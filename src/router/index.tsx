import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";
import { Transactions } from "../pages/transactions";
import { useAuth } from "../hook/auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuth();
  
  return user ? <>{children}</> : <Navigate to="/" />;
}

export function Router() {
  return (
    
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        
        {/* Rotas protegidas */}
        <Route 
          path="/transactions" 
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          } 
        />
      </Routes>
   
  );
}