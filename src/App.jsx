import "./screens/styles/Global.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { supabase } from "./services/supabaseClient";
import Login from "./screens/pages/Login/Login";
import Admin from "./screens/pages/Admin/Admin";
import Home from "./screens/pages/Home/Home";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Pega a sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Ouve mudanças no estado de autenticação (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    // Limpa a inscrição quando o componente é desmontado
    return () => subscription.unsubscribe();
  }, []);

  const checkSession = session ? <Admin session={session} /> : <Login />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={checkSession} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
