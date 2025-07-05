import "./screens/styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./screens/PrivateRoute";
import Home from "./screens/Home";
import Login from "./screens/Login";
import AdminPanel from "./screens/AdminPanel";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rota pública */}
          <Route path="/" element={<Home />} />

          {/* Rota de login */}
          <Route path="/login" element={<Login />} />

          {/* Rota protegida para o painel de administração */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>

          {/* Rota para lidar com caminhos não encontrados */}
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
