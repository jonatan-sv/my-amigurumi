import SectionTitle from "@components/SectionTitle";

export default function Contatos({ setContatos, contatos, salvarContato }) {
  return (
    <section
      id="contato"
      style={{ marginTop: "60px", padding: "20px", marginBottom: "100px" }}
    >
      <SectionTitle>Contato</SectionTitle>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {/* Bluesky */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            value={contatos.bluesky}
            onChange={(e) =>
              setContatos({ ...contatos, bluesky: e.target.value })
            }
            placeholder="Link do Bluesky"
            style={{
              width: "300px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => salvarContato("bluesky")}
            style={{
              padding: "6px 12px",
              backgroundColor: "#a56be6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Salvar
          </button>
        </div>

        {/* Instagram */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            value={contatos.instagram}
            onChange={(e) =>
              setContatos({ ...contatos, instagram: e.target.value })
            }
            placeholder="Link do Instagram"
            style={{
              width: "300px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => salvarContato("instagram")}
            style={{
              padding: "6px 12px",
              backgroundColor: "#a56be6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Salvar
          </button>
        </div>

        {/* TikTok */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            value={contatos.tiktok}
            onChange={(e) =>
              setContatos({ ...contatos, tiktok: e.target.value })
            }
            placeholder="Link do TikTok"
            style={{
              width: "300px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => salvarContato("tiktok")}
            style={{
              padding: "6px 12px",
              backgroundColor: "#a56be6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </section>
  );
}
