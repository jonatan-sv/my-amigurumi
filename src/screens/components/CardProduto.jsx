import React from "react";
import { TbTrashXFilled } from "react-icons/tb";

const CardProduto = ({
  produto,
  index,
  removerProduto,
  handleChangeProduto,
  ativarDesconto,
  aplicarDesconto,
}) => {
  const handleKeyDown = (e) => {
    const allowedKeys = [
      "Backspace", "Delete", "Tab", "Escape", "Enter",
      "ArrowLeft", "ArrowRight", ",", "."
    ];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[0-9]$/.test(e.key)) e.preventDefault();
  };

  return (
    <div
      style={{
        flex: "0 0 auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
        background: "#fff",
        scrollSnapAlign: "start",
        position: "relative",
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

      <img src={produto.imagem_url} alt={produto.nome} width="150" />
      <input
        value={produto.nome}
        onChange={(e) => handleChangeProduto(index, "nome", e.target.value)}
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
                onKeyDown={handleKeyDown}
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
          onKeyDown={handleKeyDown}
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
  );
};

export default CardProduto;