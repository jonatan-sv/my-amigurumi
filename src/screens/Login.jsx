import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../services/firebase";
import styles from "./styles/Login.module.css";
import logoFinal from "../assets/logo.svg";
import "./styles/Global.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redireciona para o painel de administração após o login bem-sucedido
      navigate("/admin");
    } catch (err) {
      setError("Falha no login. Verifique suas credenciais.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <img
          src={logoFinal}
          alt="Logo do site"
          className="logo-final"
          width={"300px"}
        />
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <label htmlFor="email">Usuário</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //placeholder="E-mail"
              required
            />
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //placeholder="Senha"
              required
            />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
