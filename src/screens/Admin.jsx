import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Calendar from "./components/Calendar";
import Galery from "./components/Galery";
import Footer from "./components/Footer";

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
        <section
          id="adicionar"
          style={{ marginTop: "60px", scrollMarginTop: "100px" }}
        >
          <SectionTitle>Adicionar Produtos</SectionTitle>

          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Nome do produto"
              value={novoProduto.nome}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, nome: e.target.value })
              }
              style={{ margin: "5px" }}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              min="0"
              placeholder="Preço"
              value={novoProduto.preco}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, preco: e.target.value })
              }
              style={{ margin: "5px" }}
            />
            <input
              type="text"
              placeholder="URL da imagem"
              value={novoProduto.imagem}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, imagem: e.target.value })
              }
              style={{ margin: "5px" }}
            />
            <button
              onClick={adicionarProduto}
              style={{
                all: "unset",
                background: "var(--dark-purple)",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              Adicionar
            </button>
          </div>
        </section>

        {/* Agenda */}
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
              <button
                onClick={() => setEncomendas((prev) => Math.max(0, prev - 1))}
                style={{
                  fontSize: "20px",
                  padding: "5px 15px",
                  borderRadius: "10px",
                  backgroundColor: "#3d0066",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                −
              </button>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                min="0"
                value={encomendas}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
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
              <button
                onClick={() => setEncomendas((prev) => prev + 1)}
                style={{
                  fontSize: "20px",
                  padding: "5px 15px",
                  borderRadius: "10px",
                  backgroundColor: "#3d0066",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                +
              </button>
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
          </div>

          <Calendar></Calendar>
        </section>

        {/* Contato */}
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
              onChange={(e) =>
                setContatos({ ...contatos, tiktok: e.target.value })
              }
              placeholder="Link do TikTok"
              style={{ margin: "5px", width: "300px" }}
            />
          </div>
        </section>
        <Footer contatos={contatos}></Footer>
      </div>
    </>
  );
}
