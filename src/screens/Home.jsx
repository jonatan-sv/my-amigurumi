import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Área Pública!</h1>
      <p>Este conteúdo é visível para todos.</p>
      <Link to="/login">
        <button>Ir para o Login</button>
      </Link>
    </div>
  );
}
