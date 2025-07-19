import CardProduto from "./CardProduto";
import SectionTitle from "./SectionTitle";

export default function Galery({
  produtos,
  removerProduto,
  handleChangeProduto,
  updateProduto
}) {
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
          <CardProduto
            key={index}
            index={index}
            produto={produto}
            removerProduto={removerProduto}
            handleChangeProduto={handleChangeProduto}
            updateProduto={updateProduto}
          />
        ))}
      </div>
    </section>
  );
}