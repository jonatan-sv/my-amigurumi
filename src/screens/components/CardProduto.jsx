import React, { useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";

const CardProduto = ({ produto, index, removerProduto, handleChangeProduto, updateProduto }) => {
  const [isEditando, setIsEditando] = useState(false);

  const handleKeyDown = (e) => {
    const allowedKeys = [
      "Backspace", "Delete", "Tab", "Escape", "Enter",
      "ArrowLeft", "ArrowRight", ",", "."
    ];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[0-9]$/.test(e.key)) e.preventDefault();
  };

  const inputStyle = (editable = true) => ({
    fontSize: "14px",
    textAlign: "center",
    border: "none",
    borderBottom: "1px solid #ccc",
    width: "60%",
    height: "18px",
    backgroundColor: editable ? "white" : "#f0f0f0",
  });

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    marginTop: "10px",
  };

  const labelStyle = {
    fontSize: "13px",
    whiteSpace: "nowrap",
    width: "40%",
    textAlign: "right",
  };

  const temDesconto = produto.promo && Number(produto.promo) > 0;
  const precoComDesconto = (
    Number(produto.preco) - Number(produto.promo)
  ).toFixed(2);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "240px",
        background: "#fff",
        scrollSnapAlign: "start",
        position: "relative",
      }}
    >
      {/* Botão para remover */}
      <button
        onClick={() => removerProduto(index)}
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          color: "#cc0000",
        }}
      >
        <TbTrashXFilled />
      </button>

      {/* Imagem no topo */}
      <img
        src={produto.imagem_url}
        alt={produto.nome}
        width="90%"
        height="60%"
        style={{ objectFit: "contain", maxHeight: "160px" }}
      />

      {/* Conteúdo fixado ao fundo */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        flexGrow: 1,
      }}>
        <div style={{ width: "100%" }}>
          {/* Nome */}
          <div style={rowStyle}>
            <label style={labelStyle}>Nome:</label>
            <input
              value={produto.nome}
              disabled={!isEditando}
              onChange={(e) => handleChangeProduto(index, "nome", e.target.value)}
              style={inputStyle(isEditando)}
            />
          </div>

          {/* Preço */}
          <div style={rowStyle}>
            <label style={labelStyle}>Preço: R$</label>
            {isEditando || !temDesconto ? (
              <input
                value={produto.preco}
                disabled={!isEditando}
                onChange={(e) =>
                  handleChangeProduto(index, "preco", e.target.value)
                }
                onKeyDown={handleKeyDown}
                style={inputStyle(isEditando)}
              />
            ) : (
              <div
                style={{
                  ...inputStyle(isEditando),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "4px 0 0 10px", // Não me orgulho muito disso aqui, mas são 3h da manhã
                  height: "18px",
                  borderRadius: "4px",
                  borderBottom: "1.5px solid #ccc", // Nem dessa aqui 
                }}
              >
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  {Number(produto.preco).toFixed(2)}
                </span>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {precoComDesconto}
                </span>
              </div>
            )}
          </div>


          {/* Quantidade */}
          <div style={rowStyle}>
            <label style={labelStyle}>Quantidade:</label>
            <input
              value={produto.quantidade}
              disabled={!isEditando}
              onKeyDown={handleKeyDown}
              onChange={(e) => handleChangeProduto(index, "quantidade", e.target.value)}
              style={inputStyle(isEditando)}
            />
          </div>

          {/* Desconto em edição */}
          {isEditando && (
            <div style={rowStyle}>
              <label style={labelStyle}>Desconto:</label>
              <input
                value={produto.promo}
                onKeyDown={handleKeyDown}
                onChange={(e) => handleChangeProduto(index, "promo", e.target.value)}
                style={inputStyle(true)}
              />
            </div>
          )}
        </div>

        {/* Desconto visível */}
        {produto.promo && Number(produto.promo) > 0 ? (
          <div
            style={{
              fontSize: "13px",
              marginTop: "10px",
              textAlign: "center",
              color: "#333",
            }}
          >
            O desconto atual é de{" "}
            {(
              (100 * Number(produto.promo)) / Number(produto.preco)
            ).toFixed(2)}
            %
          </div>
        ) : null}

        {/* Botão editar/salvar */}
        <button
          onClick={() => {
            setIsEditando(!isEditando)
            if (isEditando) {
              updateProduto(index)
            }
          }}
          style={{
            fontSize: "14px",
            marginTop: "15px",
            border: "none",
            background: "#3d0066",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isEditando ? "Salvar Edição" : "Editar Amigurumi"}
        </button>
      </div>
    </div>
  );
};

export default CardProduto;