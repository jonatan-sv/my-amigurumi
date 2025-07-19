import { useState, useEffect } from "react";
import NavBar from "@components/NavBar";
import Galery from "@components/Galery";
import Hearts from "@components/Hearts";
import Hero from "@sections/Hero";
import Footer from "@sections/Footer";
import AgendaSection from "@sections/Agenda";
import ContatosSection from "@sections/Contatos";
import AdicionarSection from "@sections/Adicionar";
import { fetchProdutos, deleteProduto } from "@services/supabaseDB";

export default function Admin() {
  const [produtos, setProdutos] = useState([]);

  const fetch = async () => {
    const result = await fetchProdutos();
    result.data
      ? setProdutos(result.data)
      : console.error("Erro ao salvar produtos");
    console.log(result.data);
  };

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    imagem_url: "",
  });

  const [contatos, setContatos] = useState({
    bluesky: "https://bsky.app/profile/seuperfil.bsky.social",
    tiktok: "https://www.tiktok.com/@seuperfil",
    instagram: "https://instagram.com/seuperfil",
  });

  const [encomendas, setEncomendas] = useState(3);

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.imagem_url) return;
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({
      nome: "",
      preco: "",
      imagem_url: "",
    });
  };

  const handleChangeProduto = (index, campo, valor) => {
    const atualizados = [...produtos];
    atualizados[index][campo] = valor;
    setProdutos(atualizados);
  };

const removerProduto = async (index) => {
    const produto = produtos[index];
    if (!produto || !produto.id) return;
    await deleteProduto(produto.id);
    setProdutos((prev) => prev.filter((_, i) => i !== index));
  };
  
  const ativarDesconto = (index) => {
    const atualizados = [...produtos];
    atualizados[index].hidden = !atualizados[index].hidden;
    setProdutos(atualizados);
  };

  const aplicarDesconto = (index, preco) => {
    const atualizados = [...produtos];
    if (Number(preco) === Number(atualizados[index].preco)) {
      atualizados[index].desconto = 0;
    } else {
      atualizados[index].desconto = preco;
    }
    setProdutos(atualizados);
    ativarDesconto(index);
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
          ativarDesconto={ativarDesconto}
          aplicarDesconto={aplicarDesconto}
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
