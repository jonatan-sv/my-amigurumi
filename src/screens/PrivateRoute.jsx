import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  // Se o usuário for autenticado, renderiza a rota protegida.
  // Se não, muda para a rota de login
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}
