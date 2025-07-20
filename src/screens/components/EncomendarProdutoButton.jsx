import React from "react";

export default function EncomendarProdutoButton({ produto }) {
  if (!produto) return null;

  const handleClick = () => {
    const phone = "558598566608";
    const message = encodeURIComponent(
      `Olá! Quero encomendar o amigurumi "${produto.nome}".`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      style={{
        margin: "10px auto",
        display: "block",
        padding: "8px 16px",
        background: "#3b0056",
        border: "3px solid #e8d6fa",
        borderRadius: "20px",
        fontSize: "18px",
        cursor: "pointer",
        color: "#ffffffff",
        boxShadow: "3px 3px 0 #e8d6fa",
        outline: "none",
        fontFamily: "'Hepta Slab', serif",
        fontWeight: "bold",
      }}
      onClick={handleClick}
    >
      Encomendar este amigurumi
    </button>
  );
}