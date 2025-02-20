import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "../hook/auth"
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";

export function AuthRoutes() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/transactions" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}
