import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hook/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

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
      <Route path="*" element={
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<AuthRoutes />} />
          
          {/* Rotas protegidas */}
          <Route 
            path="/transactions" 
            element={
              <PrivateRoute>
                <AppRoutes />
              </PrivateRoute>
            } 
          />
        </Routes>
      } />
    </Routes>
  );
}