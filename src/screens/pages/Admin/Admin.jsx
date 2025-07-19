import { useState, useEffect } from "react";
import NavBar from "@components/NavBar";
import Galery from "@components/Galery";
import Hearts from "@components/Hearts";
import Hero from "@sections/Hero";
import Footer from "@sections/Footer";
import AgendaSection from "@sections/Agenda";
import ContatosSection from "@sections/Contatos";
import AdicionarSection from "@sections/Adicionar";
import { fetchProdutos, deleteProduto, updateProduto, addProduto } from "@services/supabaseDB";

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
    bluesky: "https://bsky.app/profile/seuperfil.bsky.social",
    tiktok: "https://www.tiktok.com/@seuperfil",
    instagram: "https://instagram.com/seuperfil",
  });

  const [encomendas, setEncomendas] = useState(3);

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.imagem_url) return;
    addProduto(novoProduto);
    setNovoProduto({
      nome: "",
      preco: 0,
      imagem_url: "",
      promo: 0,
      hidden: true,
    });
    fetch();
  }; // Atualmente ao adicionar um produto com url de imagem ele não atualiza imediatamente, ver como resolver depois

  const handleChangeProduto = (index, chave, valor) => {
    const novosProdutos = [...produtos];
    novosProdutos[index][chave] = valor;
    setProdutos(novosProdutos);
  }

  const atualizarProduto = async (index) => {
    await updateProduto(produtos[index].id, produtos[index]);
    fetch();
  }

  const removerProduto = async (index) => {
    await deleteProduto(produtos[index].id);
    fetch();
  };
  
  useEffect(() => {
    fetch();
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
          setEncomendas={setEncomendas}
          encomendas={encomendas}
        ></AgendaSection>

        <ContatosSection
          setContatos={setContatos}
          contatos={contatos}
        ></ContatosSection>

        <Footer contatos={contatos}></Footer>
      </div>
    </>
  );
}