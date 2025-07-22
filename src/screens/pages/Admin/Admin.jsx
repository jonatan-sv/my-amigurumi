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

  const [contatos, setContatos] = useState(() => {
    const saved = localStorage.getItem("contatos");
    return saved
      ? JSON.parse(saved)
      : {
          bluesky: "https://bsky.app/profile/seuperfil.bsky.social",
          tiktok: "https://www.tiktok.com/@seuperfil",
          instagram: "https://instagram.com/seuperfil",
        };
  });

  const salvarContato = (rede) => {
    localStorage.setItem("contatos", JSON.stringify(contatos));
    alert(`Link do ${rede} salvo!`);
  };

  const [encomendas, setEncomendas] = useState(() => {
    const saved = localStorage.getItem("encomendas");
    const parsed = Number(saved);
    return !isNaN(parsed) ? parsed : 3;
  });

  const atualizarEncomendas = (valor) => {
    const numero = Number(valor);
    if (!isNaN(numero)) {
      setEncomendas(numero);
      localStorage.setItem("encomendas", numero);
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
