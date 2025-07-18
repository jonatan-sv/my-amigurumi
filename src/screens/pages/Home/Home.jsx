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
        <Hearts />

        <VagasBox vagas={lojaInfo.vagas} />

        <Galery produtos={produtos} />

        <div id="agenda" style={{ marginBottom: "10vh" }}>
          <div style={{ marginBottom: "20px" }}>
            <SectionTitle>Agenda de Eventos</SectionTitle>
          </div>
          <Calendar url={lojaInfo.agenda} />
        </div>

        <Footer contatos={lojaInfo} />
      </div>
    </>
  );
}
