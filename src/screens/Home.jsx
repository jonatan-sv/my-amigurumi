import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}
    >
      <h1>Tela home temporária</h1>
      <button
        onClick={() => navigate("/login")}
        style={{
          all: "unset",
          backgroundColor: "#3d0066",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        Ir para a tela de login
      </button>
    </div>
  );
}
