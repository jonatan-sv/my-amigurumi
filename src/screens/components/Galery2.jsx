import SectionTitle from "./SectionTitle";
import { TbTrashXFilled } from "react-icons/tb";

export default function Galery({ produtos }) {
  return (
    <section
      id="galeria"
      style={{
        padding: "20px",
        scrollMarginTop: "100px",
      }}
    >
      <SectionTitle>Galeria</SectionTitle>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollSnapType: "x mandatory",
        }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              background: "#fff",
              scrollSnapAlign: "start",
              position: "relative",
            }}
          >
            <img src={produto.imagem_url} alt={produto.nome} width="150" />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginTop: "10px",
                  textAlign: "center",
                  border: "none",
                  width: "80%",
                }}
              >
                {produto.nome}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  textAlign: "center",
                  border: "none",
                  width: "50%",
                }}
              >
                {`R$ ${produto.preco}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
