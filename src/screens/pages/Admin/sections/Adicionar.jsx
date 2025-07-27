import { useState } from "react";
import SectionTitle from "@components/SectionTitle";
import { supabase } from "@/services/supabaseClient";

export default function AdicionarSection({
  setNovoProduto,
  novoProduto,
  adicionarProduto,
}) {
  const [uploading, setUploading] = useState(false);

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("imagens")
      .upload(fileName, file);

    if (uploadError) {
      alert("Erro no upload da imagem: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("imagens")
      .getPublicUrl(fileName);

    setNovoProduto({ ...novoProduto, imagem_url: publicUrlData.publicUrl });
    setUploading(false);
  }

  function handleAdicionarClick(e) {
    const preco = Number(novoProduto.preco);
    const quantidade = Number(novoProduto.quantidade);
    const nome = novoProduto.nome.trim();

    if (nome === "") {
      alert("Nome do produto não pode ser vazio."); 
      e.preventDefault();
      return;
    }

    if (preco === 0) {
      alert("Preço não pode ser 0.");
      e.preventDefault();
      return;

    } else if (quantidade === 0) {
      alert("Quantidade não pode ser 0.");
      e.preventDefault();
      return;
    }
    adicionarProduto();
  }

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
          min="1"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: e.target.value })
          }
          style={{ margin: "5px" }}
        />

        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min="1"
          placeholder="Quantidade em estoque"
          value={novoProduto.quantidade}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, quantidade: e.target.value })
          }
          style={{ margin: "5px" }}
        />

         <div style={{ margin: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            style={{
              display: "none",
            }}
          />
          <label
            htmlFor="file-upload"
            style={{
              background: "#e8d6fa",
              color: "#3d0066",
              padding: "10px 20px",
              borderRadius: "1rem",
              border: "1px solid #3d0066",
              borderColor: "grey",
              marginBottom: "5px",
              // width: "214px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {uploading
              ? "Enviando imagem..."
              : novoProduto.imagem_url
                ? "Imagem selecionada"
                : "Selecionar imagem..."}
          </label>
        </div>

        <button
          onClick={handleAdicionarClick}
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
