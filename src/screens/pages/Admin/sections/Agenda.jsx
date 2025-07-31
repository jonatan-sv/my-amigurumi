import AmountButton from "@components/AmountButton";
import SectionTitle from "@components/SectionTitle";
import Calendar from "@components/Calendar";
import { updateLojaInfo } from "@services/supabaseDB";

export default function Agenda({ setEncomendas, encomendas, agenda, setAgenda }) {
  const salvarAgenda = async () => {
    const result = await updateLojaInfo({ agenda });
    if (result.success) {
      alert("Agenda salva com sucesso!");
    } else {
      alert("Erro ao salvar a agenda.");
    }
  };

  return (
    <section
      id="agenda"
      style={{ marginTop: "60px", scrollMarginTop: "100px" }}
    >
      <SectionTitle>Agenda</SectionTitle>

      <div
        style={{
          backgroundColor: "#f3e8ff",
          padding: "20px",
          margin: "20px auto",
          borderRadius: "12px",
          maxWidth: "400px",
          boxShadow: "4px 4px 0 #a56be6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <AmountButton
            click={() => setEncomendas(Math.max(0, encomendas - 1))}
          >
            -
          </AmountButton>

          <input
            type="number"
            min={0}
            value={isNaN(encomendas) ? "" : encomendas}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setEncomendas(0);
              } else if (!isNaN(value)) {
                setEncomendas(Number(value));
              }
            }}
            style={{
              width: "60px",
              textAlign: "center",
              fontSize: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "5px",
            }}
          />

          <AmountButton click={() => setEncomendas(encomendas + 1)}>
            +
          </AmountButton>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#3d0066",
          }}
        >
          {encomendas === 0 ? "Encomendas fechadas" : "Encomendas abertas"}
        </p>

        {/* Campo de agenda */}
        <input
          type="text"
          placeholder="Link do calendário (agenda)"
          value={agenda}
          onChange={(e) => setAgenda(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        />

        <button
          onClick={salvarAgenda}
          style={{
            marginTop: "10px",
            backgroundColor: "#a56be6",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Salvar Agenda
        </button>
      </div>

      <Calendar url={agenda} />
    </section>
  );
}
