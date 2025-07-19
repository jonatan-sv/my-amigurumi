import SectionTitle from "@components/SectionTitle";

export default function AdicionarSection({
  setNovoProduto,
  novoProduto,
  adicionarProduto,
}) {
  return (
    <section
      id="adicionar"
      style={{ marginTop: "60px", scrollMarginTop: "100px" }}
    >
      <SectionTitle>Adicionar Produtos</SectionTitle>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
          style={{ margin: "5px" }}
        />
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min="0"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: e.target.value })
          }
          style={{ margin: "5px" }}
        />
        <input

          type="text"
          placeholder="URL da imagem"
          value={novoProduto.imagem_url}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, imagem_url: e.target.value })
          }
          style={{ margin: "5px" }}
        />
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min="0"
          placeholder="Quantidade em estoque"
          value={novoProduto.quantidade}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, quantidade: e.target.value })

          }
          style={{ margin: "5px" }}
        />
        <button
          onClick={adicionarProduto}
          style={{
            all: "unset",
            background: "var(--dark-purple)",
            color: "white",
            padding: "20px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>
    </section>
  );
}