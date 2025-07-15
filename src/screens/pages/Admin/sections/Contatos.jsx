import SectionTitle from "@components/SectionTitle";

export default function Contatos({ setContatos, contatos }) {
  return (
    <section id="contato" style={{ marginTop: "60px", padding: "20px" }}>
      <SectionTitle>Contato</SectionTitle>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={contatos.bluesky}
          onChange={(e) =>
            setContatos({ ...contatos, bluesky: e.target.value })
          }
          placeholder="Link do Bluesky"
          style={{ margin: "5px", width: "300px" }}
        />
        <br />
        <input
          type="text"
          value={contatos.instagram}
          onChange={(e) =>
            setContatos({ ...contatos, instagram: e.target.value })
          }
          placeholder="Link do Instagram"
          style={{ margin: "5px", width: "300px" }}
        />
        <br />
        <input
          type="text"
          value={contatos.tiktok}
          onChange={(e) => setContatos({ ...contatos, tiktok: e.target.value })}
          placeholder="Link do TikTok"
          style={{ margin: "5px", width: "300px" }}
        />
      </div>
    </section>
  );
}
