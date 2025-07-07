import React, { useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Boneca Amarela",
      preco: "R$ 80,00",
      imagem: "/produtos/boneca.jpg",
    },
    {
      nome: "Gatinho Roxo",
      preco: "R$ 60,00",
      imagem: "/produtos/gatinho.jpg",
    },
  ]);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    imagem: "",
  });

  const adicionarProduto = () => {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.imagem) return;
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({ nome: "", preco: "", imagem: "" });
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

  const [contatos, setContatos] = useState({
    bluesky: "https://bsky.app/profile/seuperfil.bsky.social",
    tiktok: "https://www.tiktok.com/@seuperfil",
    instagram: "https://instagram.com/seuperfil",
  });

  const [numero, setNumero] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Barra de Navegação */}
      <div
        style={{
          backgroundColor: "white",
          display: "inline-block",
          padding: "10px 30px",
          borderRadius: "40px",
          boxShadow: "6px 6px 0px #3d0066",
          marginBottom: "20px",
          fontFamily: "Arial",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2
        }}
      >
        <nav style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <a
            href="#galeria"
            style={{
              textDecoration: "none",
              color: "#3d0066",
              fontWeight: "bold",
            }}
          >
            Galeria
          </a>
          <a
            href="#agenda"
            style={{
              textDecoration: "none",
              color: "#3d0066",
              fontWeight: "bold",
            }}
          >
            Agenda
          </a>
          <a
            href="#adicionar"
            style={{
              textDecoration: "none",
              color: "#3d0066",
              fontWeight: "bold",
            }}
          >
            Adicionar Produtos
          </a>
          <a
            href="#contato"
            style={{
              textDecoration: "none",
              color: "#3d0066",
              fontWeight: "bold",
            }}
          >
            Contato
          </a>
        </nav>
      </div>
      
      {/* Logo */}
      <div style={{ 
        position: "relative", 
        marginTop: "100px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "left", 
        gap: "40px", 
        marginLeft: "20px",
      }}>
        <img
          src="/logo.png"
          alt="Logo My Amigurumi"
          style={{ width: "200px", display: "block", zIndex: 2 }}
        />
        <h1 style={{ zIndex: 2, margin: 0 }}>
          Os melhores amigurumis pertinho de você!
        </h1>
      </div>
      {/* /* Seção: Vagas de Encomendas */}
      <section
        style={{
          margin: "60px",
          padding: "20px",
        }}
      >
        <h1>Vagas de encomenda</h1>
        <section
          style={{
            margin: "40px auto 0 auto",
            maxWidth: "200px",
            background: "#D0B3D7",
            borderRadius: "20px",
            boxShadow: "0px 0px 0px 5px #390B46",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="meuNumero"
            style={{
              fontWeight: "bold",
              marginRight: "10px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
          </label>
          <input
            id="meuNumero"
            type="number"
            min={0}
            max={100}
            value={numero}
            onChange={e => setNumero(Number(e.target.value))}
            style={{
              width: "100px",
              height: "80px",
              fontSize: "50px",
              padding: "5px",
              display: "block",
              margin: "0 auto",
              textAlign: "center",
              borderRadius: "10px",
              position: "flex",
            }}
          />
        </section>
      </section>
      {/* Seção: Galeria */}
      <section
        id="galeria"
        style={{ marginTop: "100px", padding: "20px", background: "#f3e8ff" }}
      >
        <div
          style={{
            backgroundColor: "white",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "40px",
            boxShadow: "6px 6px 0px #3d0066",
            marginBottom: "20px",
            fontFamily: "Arial",
          }}
        >
          <h2 style={{ margin: 0, color: "#3d0066" }}>Galeria</h2>
        </div>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px",
            scrollSnapType: "x mandatory",
          }}
        >
          {produtos.map((produto, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 auto",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                width: "200px",
                background: "#fff",
                scrollSnapAlign: "start",
                position: "relative",
                zIndex: 1
              }}
            >
              <button
                onClick={() => removerProduto(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#cc0000",
                }}
                title="Remover produto"
              >
                <img src="/lixinho.svg"/>
              </button>

              <img src={produto.imagem} alt={produto.nome} width="150" />
              <input
                value={produto.nome}
                onChange={(e) =>
                  handleChangeProduto(index, "nome", e.target.value)
                }
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginTop: "10px",
                  textAlign: "center",
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  width: "80%"
                }}
              />
              <input
                value={produto.preco}
                onChange={(e) =>
                  handleChangeProduto(index, "preco", e.target.value)
                }
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  textAlign: "center",
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  width: "50%"
                }}
              />
            </div>
          ))}
        </div>{" "}
        {/* <-- fecha o container com overflowX */}
      </section>{" "}
      {/* <-- fecha a seção de galeria corretamente */}
      <section id="agenda" style={{ marginTop: "60px" }}>
        <div
          style={{
            backgroundColor: "white",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "40px",
            boxShadow: "6px 6px 0px #3d0066",
            marginBottom: "20px",
            fontFamily: "Arial",
          }}
        >
          <h2 style={{ margin: 0, color: "#3d0066" }}>Agenda</h2>
        </div>
        <p>Agenda de encomendas ou eventos em breve...</p>
      </section>
      {/* Seção: Adicionar Produtos */}
      <section id="adicionar" style={{ marginTop: "60px" }}>
        <div
          style={{
            backgroundColor: "white",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "40px",
            boxShadow: "6px 6px 0px #3d0066",
            marginBottom: "20px",
            fontFamily: "Arial",
          }}
        >
          <h2 style={{ margin: 0, color: "#3d0066" }}>Adicionar Produtos</h2>
        </div>

        <div style={{ marginBottom: "20px" }}>
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
          <button onClick={adicionarProduto} style={{ marginLeft: "10px" }}>
            Adicionar
          </button>
        </div>
      </section>
      {/* Seção: Contato */}
      <section id="contato" style={{ marginTop: "60px", padding: "20px" }}>
        <div
          style={{
            backgroundColor: "white",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "40px",
            boxShadow: "6px 6px 0px #3d0066",
            marginBottom: "20px",
            fontFamily: "Arial",
          }}
        >
          <h2 style={{ margin: 0, color: "#3d0066" }}>Contato</h2>
        </div>
        <p>Entre em contato:</p>
        <a href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer">
          WhatsApp
        </a>{" "}
        | <a href="mailto:email@email.com">Email</a> |{" "}
        <a
          href="https://instagram.com/myamigurumi_S2"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <footer
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 0 10px #C9B4EF",
            display: "flex",
            alignItems: "center",
            gap: "650px",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <img
            src="/logo.png"
            style={{ width: "100px", alignContent: "left", padding: "0 20px" }}
            alt="Logo My Amigurumi"
          />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "23px", margin: 0 }}>My Amigurumi</p>
            <p style={{ fontSize: "17px", margin: 0 }}>Mariana Lima</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            Siga-me em:
            <div style={{gap: "10px", display: "flex", marginTop: "10px"}}>
              <img src="/bsky-icon"/>
              <img src="/tiktok-icon"/>
              <a
                href="https://instagram.com/myamigurumi_S2"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img src="/icon-insta"/>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

//<input type="button" onclick="alert('Hello World!')" value="Click Me!">