/**
 * TODO:
 * - Retirar repetições de componentes e seções
 * - Separar componentes novos
 * - Arrumar estilo do cartão de produto
 * - Implementar descontos
 */

import { useState, useEffect } from "react";
import NavBar from "@components/NavBar2";
import Galery from "@components/Galery2";
import Hearts from "@components/Hearts";
import Hero from "@sections/Hero";
import Footer from "@sections/Footer";
import { fetchProdutos, fetchLojaInfo } from "@services/supabaseDB";
import Calendar from "@components/Calendar2";
import SectionTitle from "@components/SectionTitle";
import VagasBox from "@components/VagasBox";
import EncomendarButton from "@components/EncomendarButton";

export default function Admin() {
  const [encomendas, setEncomendas] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const [lojaInfo, setLojaInfo] = useState({});
  const [contatosSalvos, setContatosSalvos] = useState(() => {
    const saved = localStorage.getItem("contatos");
    return saved ? JSON.parse(saved) : {};
  });

  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("encomendas");
    const numero = Number(saved);
    if (!isNaN(numero)) {
      setEncomendas(numero);
    }
  }, []);

  const fetch = async () => {
    const result = await fetchProdutos();
    result.data
      ? setProdutos(result.data)
      : console.error("Erro ao salvar produtos");
  };

  const fetchLoja = async () => {
    const result = await fetchLojaInfo();
    result.data
      ? setLojaInfo(result.data)
      : console.error("Erro ao pegar informações da loja");
  };

  useEffect(() => {
    fetch();
    fetchLoja();
  }, []);

  const produtosFiltrados = produtos.filter((produto) => {
    const preco = Number(produto.preco);
    const dentroMin = !precoMin || preco >= Number(precoMin);
    const dentroMax = !precoMax || preco <= Number(precoMax);
    return dentroMin && dentroMax;
  });

  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <Hero />
        <Hearts />

        <VagasBox vagas={encomendas} />

        <div
          style={{
            margin: "30px 0 10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <EncomendarButton onClick />

          <SectionTitle>Galeria</SectionTitle>

          <button
            onClick={() => setMostrarFiltros((m) => !m)}
            style={{
              padding: "8px 16px",
              borderRadius: "1rem",
              border: "1px solid #A56BE6 ",
              background: "#e8d6fa",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {mostrarFiltros ? "Esconder filtros" : "Filtros de preço"}
          </button>
        </div>

        {mostrarFiltros && (
          <div
            style={{
              margin: "30px 0",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              alignItems: "center",
              fontSize: "15px",
            }}
          >
            <label>
              Preço mínimo:
              <input
                type="number"
                value={precoMin}
                onChange={(e) => setPrecoMin(e.target.value)}
                style={{
                  width: "50px",
                  height: "15px",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
                min={0}
              />
            </label>
            <label>
              Preço máximo:
              <input
                type="number"
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
                style={{
                  width: "50px",
                  height: "15px",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
                min={0}
              />
            </label>
          </div>
        )}

        <Galery produtos={produtosFiltrados} />

        <div
          id="agenda"
          style={{ marginBottom: "10vh", scrollMarginTop: "15vh" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <SectionTitle>Agenda de Eventos</SectionTitle>
          </div>
          <Calendar url={lojaInfo.agenda} />
        </div>

        <Footer contatos={contatosSalvos} />
      </div>
    </>
  );
}
