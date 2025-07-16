import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "@services/supabaseClient";
import styles from "./Login.module.css";
import logo from "@assets/logo.svg";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      navigate("/admin");
    } catch (error) {
      if (error.code === "invalid_credentials") {
        alert("E-mail ou senha inválidos!");
      } else {
        alert("Erro ao tentar entrar!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Logo do site"
            className="logo-final"
            width={"300px"}
          />
        </div>
        <form onSubmit={handleLogin}>
          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
