import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import NavBar from "../../components/NavBar";
import Hero from "./sections/Hero";
import Galery from "../../components/Galery";
import Footer from "./sections/Footer";
import AgendaSection from "./sections/Agenda";
import ContatosSection from "./sections/Contatos";
import AdicionarSection from "./sections/Adicionar";

export default function Admin() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Boneca Amarela",
      preco: 80.0,
      imagem:
        "https://www.lojinhauai.com/image/cache/catalog/Fotos/amigurumi-croche-menino-cabelo-enrolado-1000x1000.jpg",
      desconto: 0,
      hidden: true,
    },
    {
      nome: "Gatinho Roxo",
      preco: 60.0,
      imagem:
        "https://www.lojinhauai.com/image/cache/catalog/Fotos/amigurumi-croche-menina-674x674.jpg",
      desconto: 0,
      hidden: true,
    },
  ]);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    imagem: "",
  });

  const [contatos, setContatos] = useState({
    bluesky: "https://bsky.app/profile/seuperfil.bsky.social",
    tiktok: "https://www.tiktok.com/@seuperfil",
    instagram: "https://instagram.com/seuperfil",
  });

  const [encomendas, setEncomendas] = useState(3);

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.imagem) return;
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({
      nome: "",
      preco: 0,
      imagem: "",
      desconto: 0,
      hidden: true,
    });
  };

  const handleChangeProduto = (index, campo, valor) => {
    const atualizados = [...produtos];
    atualizados[index][campo] = valor;
    setProdutos(atualizados);
  };

  const removerProduto = (index) => {
    const novaLista = produtos.filter((_, i) => i !== index);
    setProdutos(novaLista);
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

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <Hero />

        {/* Corações */}
        <div>
          {/*corações 1*/}
          <FaHeart
            size={30}
            style={{ position: "absolute", top: 160, left: 20, rotate: "5deg" }}
          />
          {/* top +30 do coração 2 */}
          <FaHeart
            size={20}
            style={{
              position: "absolute",
              top: 130,
              left: 20,
              rotate: "-5deg",
            }}
          />
          {/* top -30 do coração 1 */}
          <FaHeart
            size={13}
            style={{ position: "absolute", top: 143, left: 50, rotate: "3deg" }}
          />
          {/* top +13 do coração 2 */}
          {/*corações 2*/}
          <FaHeart
            size={30}
            style={{
              position: "absolute",
              top: 440,
              right: 20,
              rotate: "5deg",
            }}
          />
          <FaHeart
            size={20}
            style={{
              position: "absolute",
              top: 410,
              right: 20,
              rotate: "-5deg",
            }}
          />
          <FaHeart
            size={13}
            style={{
              position: "absolute",
              top: 423,
              right: 50,
              rotate: "3deg",
            }}
          />
        </div>

        {/* Galeria */}
        <Galery
          produtos={produtos}
          removerProduto={removerProduto}
          handleChangeProduto={handleChangeProduto}
          ativarDesconto={ativarDesconto}
          aplicarDesconto={aplicarDesconto}
        ></Galery>

        {/* Adicionar Produtos */}
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
