import { fetchLojaInfo, updateLojaInfo } from "@services/supabaseDB";

import { useState, useEffect } from "react";
import NavBar from "@components/NavBar";
import Galery from "@components/Galery";
import Hearts from "@components/Hearts";
import Hero from "@sections/Hero";
import Footer from "@sections/Footer";
import AgendaSection from "@sections/Agenda";
import ContatosSection from "@sections/Contatos";
import AdicionarSection from "@sections/Adicionar";
import {
  fetchProdutos,
  deleteProduto,
  updateProduto,
  addProduto,
} from "@services/supabaseDB";

export default function Admin() {
  const [produtos, setProdutos] = useState([]);

  const fetch = async () => {
    const result = await fetchProdutos();
    result.data
      ? setProdutos(result.data)
      : console.error("Erro ao salvar produtos");
  };

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    imagem_url: "",
    promo: 0,
    quantidade: 0,
  });

  const [contatos, setContatos] = useState({
    bluesky: "",
    instagram: "",
    tiktok: "",
  });

  const salvarContato = async (rede) => {
    const atualizado = await updateLojaInfo(contatos);
    if (atualizado.success) {
      alert(`Link do ${rede} salvo com sucesso!`);
    } else {
      alert(`Erro ao salvar o ${rede}`);
    }
  };

  const [encomendas, setEncomendas] = useState(0);

  const atualizarEncomendas = async (valor) => {
    const numero = Number(valor);
    if (!isNaN(numero)) {
      setEncomendas(numero);
      await updateLojaInfo({ vagas: numero });
    }
  };

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.imagem_url)
      return;

    addProduto(novoProduto);
    setNovoProduto({
      nome: "",
      preco: 0,
      imagem_url: "",
      promo: 0,
      hidden: true,
      quantidade: 0,
    });
    fetch();
  }; // Atualmente ao adicionar um produto com url de imagem ele não atualiza imediatamente, ver como resolver depois

  const handleChangeProduto = (index, chave, valor) => {
    const novosProdutos = [...produtos];
    novosProdutos[index][chave] = valor;
    setProdutos(novosProdutos);
  };

  const atualizarProduto = async (index) => {
    await updateProduto(produtos[index].id, produtos[index]);
    fetch();
  };

  const removerProduto = async (index) => {
    const produto = produtos[index];

    // Extrair o caminho interno da imagem
    const imagemPath = produto.imagem_url.replace(
      "https://hkyfwpifisdowjxiogqu.supabase.co/storage/v1/object/public/",
      ""
    );

    await deleteProduto(produto.id, imagemPath);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    const carregarLoja = async () => {
      const result = await fetchLojaInfo();
      if (result.data) {
        setContatos({
          bluesky: result.data.bluesky || "",
          instagram: result.data.instagram || "",
          tiktok: result.data.tiktok || "",
        });
        setEncomendas(result.data.vagas || 0);
      }
    };
    carregarLoja();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <Hero />

        <Hearts></Hearts>

        <Galery
          produtos={produtos}
          removerProduto={removerProduto}
          handleChangeProduto={handleChangeProduto}
          updateProduto={atualizarProduto}
        ></Galery>

        <AdicionarSection
          setNovoProduto={setNovoProduto}
          novoProduto={novoProduto}
          adicionarProduto={adicionarProduto}
        ></AdicionarSection>

        <AgendaSection
          setEncomendas={atualizarEncomendas}
          encomendas={encomendas}
        ></AgendaSection>

        <ContatosSection
          setContatos={setContatos}
          contatos={contatos}
          salvarContato={salvarContato}
        />

        <Footer contatos={contatos}></Footer>
      </div>
    </>
  );
}
