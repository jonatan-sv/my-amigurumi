import React, { useState } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaBluesky, FaInstagram } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Boneca Amarela",
      preco: 80.0,
      imagem: "/produtos/boneca.jpg",
      desconto: 0,
      hidden: true,
    },
    {
      nome: "Gatinho Roxo",
      preco: 60.0,
      imagem: "/produtos/gatinho.jpg",
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
    <div style={{ textAlign: "center", padding: "150px 20px 20px" }}>
      {/* Navegação */}
      <div
        style={{
          backgroundColor: "white",
          display: "inline-block",
          padding: "10px 30px",
          borderRadius: "40px",
          boxShadow: "6px 6px 0px #3d0066",
          fontFamily: "Arial",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: "0",
          zIndex: 2,
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
      <img
        src="/logo.svg"
        alt="Logo My Amigurumi"
        style={{
          width: "100px",
          position: "absolute",
          left: "5%",
          top: "2%",
          zIndex: 1,
        }}
      />

      {/* Corações */}
      <div>
          {/*corações 1*/}
        <FaHeart
          size={30}
          style={{ position: "absolute", top: 160, left: 20, rotate: "5deg"}}
        />
        {/* top +30 do coração 2 */}
        <FaHeart
          size={20}
          style={{ position: "absolute", top: 130, left: 20, rotate: "-5deg"}}
        />
        {/* top -30 do coração 1 */}
        <FaHeart
          size={13}
          style={{ position: "absolute", top: 143, left: 50, rotate: "3deg"}}
        />
        {/* top +13 do coração 2 */}
         {/*corações 2*/}
        <FaHeart
          size={30}
          style={{ position: "absolute", top: 440, right: 20, rotate: "5deg"}}
        />
        <FaHeart
          size={20}
          style={{ position: "absolute", top: 410, right: 20, rotate: "-5deg"}}
        />
        <FaHeart
          size={13}
          style={{ position: "absolute", top: 423, right: 50, rotate: "3deg"}}
        />
        {/*corações 3*/}
        <FaHeart
          size={30}
          style={{ position: "absolute", top: 690, left: 800, rotate: "-5deg"}}
        />
        <FaHeart
          size={20}
          style={{ position: "absolute", top: 665, left: 790, rotate: "5deg"}}
        />
        {/* corações 4 */}
        <FaHeart
          size={30}
          style={{ position: "absolute", top: 1250, right: 535, rotate: "5deg"}}
        />
        <FaHeart
          size={20}
          style={{ position: "absolute", top: 1220, right: 525, rotate: "-5deg"}}
        />
      </div>


      {/* Galeria */}
      <section id="galeria" style={{ padding: "20px", background: "#f3e8ff" }}>
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
                zIndex: 1,
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
              >
                <TbTrashXFilled />
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
                  width: "80%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  {produto.desconto && Number(produto.desconto) > 0 ? (
                    <>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "red",
                          marginRight: 8,
                        }}
                      >
                        R$ {Number(produto.preco).toFixed(2)}
                      </span>
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        R$ {Number(produto.desconto).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <>
                      R$
                      <input
                        value={produto.preco}
                        onChange={(e) =>
                          handleChangeProduto(index, "preco", e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (
                            [
                              "Backspace",
                              "Delete",
                              "Tab",
                              "Escape",
                              "Enter",
                              "ArrowLeft",
                              "ArrowRight",
                              ",",
                              ".",
                            ].includes(e.key)
                          ) {
                            return;
                          }
                          if (!/^[0-9]$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          fontSize: "14px",
                          marginTop: "5px",
                          textAlign: "center",
                          border: "none",
                          borderBottom: "1px solid #ccc",
                          width: "50%",
                        }}
                      />
                    </>
                  )}
                </div>
                <button
                  onClick={() => ativarDesconto(index)}
                  style={{
                    fontSize: "14px",
                    marginTop: "5px",
                    textAlign: "center",
                    border: "none",
                    background: "#3d0066",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: produto.hidden ? "block" : "none",
                  }}
                >
                  Adicionar Desconto
                </button>
                <input
                  onChange={(e) =>
                    handleChangeProduto(index, "desconto", e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (
                      [
                        "Backspace",
                        "Delete",
                        "Tab",
                        "Escape",
                        "Enter",
                        "ArrowLeft",
                        "ArrowRight",
                        ",",
                        ".",
                      ].includes(e.key)
                    ) {
                      return;
                    }
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  value={produto.desconto}
                  style={{
                    fontSize: "14px",
                    marginTop: "5px",
                    textAlign: "center",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    width: "50%",
                    display: produto.hidden ? "none" : "block",
                  }}
                />
                <button
                  onClick={() => aplicarDesconto(index, produto.desconto)}
                  style={{
                    fontSize: "14px",
                    marginTop: "5px",
                    textAlign: "center",
                    border: "none",
                    background: "#3d0066",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: produto.hidden ? "none" : "block",
                  }}
                >
                  Aplicar Desconto
                </button>
                {produto.desconto && Number(produto.desconto) > 0 && (
                  <div
                    style={{
                      fontSize: "14px",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    O desconto atual é de{" "}
                    {(
                      (1 - Number(produto.desconto) / Number(produto.preco)) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adicionar Produtos */}
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
            type="number"
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

      {/* Agenda */}
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
              type="number"
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

        <div
          style={{
            backgroundColor: "#d6b4ff",
            height: "400px",
            width: "90%",
            maxWidth: "700px",
            margin: "0 auto",
            borderRadius: "15px",
            padding: "10px",
            boxShadow: "4px 4px 0 #3d0066",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3d0066",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FFortaleza&showPrint=0&showCalendars=0&title=Agenda%20de%20Eventos&src=ZWNiYTE5OTFlODVmZjE2MWNiNTRjZjVkYmRlYzQyM2YwNTM1NzkxYmUwNWNkNTM2ODljZGFkMTQ2YzNiYmVmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb"
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          ></iframe>
        </div>
      </section>

      {/* Contato */}
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

        <div style={{ fontSize: "18px", marginBottom: "20px" }}>
          <a
            href={contatos.bluesky}
            target="_blank"
            rel="noreferrer"
            style={{
              margin: "0 10px",
              borderRight: "1px solid black",
              padding: "8px 10px 0px 0px",
            }}
          >
            <FaBluesky size={22} color="black" />
          </a>
          <a href={contatos.instagram} target="_blank" rel="noreferrer">
            <FaInstagram size={24} color="black" />
          </a>
          <a
            href={contatos.tiktok}
            target="_blank"
            rel="noreferrer"
            style={{
              margin: "0 10px",
              borderLeft: "1px solid black",
              padding: "8px 10px 0px 8px",
            }}
          >
            <AiFillTikTok size={24} color="black" />
          </a>
        </div>

        <footer
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 0 10px #C9B4EF",
            padding: "10px",
          }}
        >
          <p style={{ fontSize: "20px", margin: 0 }}>My Amigurumi</p>
          <p style={{ fontSize: "15px", margin: 0 }}>Mariana Lima</p>
          <img src="/logo.svg" style={{ width: "100px" }} alt="Logo rodapé" />
        </footer>
      </section>
    </div>
  );
}
