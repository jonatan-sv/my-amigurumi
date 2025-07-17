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

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [lojaInfo, setLojaInfo] = useState({});

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

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <Hero />

        <Hearts></Hearts>

        <div
          className="pedido-box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
            marginBottom: "5rem",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          <label
            htmlFor="vagas"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#3b0056",
            }}
          >
            Vagas de encomendas
          </label>
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
              width: "80px",
              height: "80px",
              fontSize: "2rem",
              borderRadius: "20px",
              border: "3px solid #3b0056",
              backgroundColor: "#e8d6fa",
              color: "#3b0056",
              boxShadow: "5px 5px 0 #3b0056",
              outline: "none",
            }}
          >
            {lojaInfo.vagas}
          </div>
        </div>

        <Galery produtos={produtos}></Galery>

        <div id="agenda" style={{ marginBottom: "10vh" }}>
          <div style={{ marginBottom: "20px" }}>
            <SectionTitle>Agenda de Eventos</SectionTitle>
          </div>
          <Calendar url={lojaInfo.agenda}></Calendar>
        </div>

        <Footer contatos={lojaInfo}></Footer>
      </div>
    </>
  );
}
