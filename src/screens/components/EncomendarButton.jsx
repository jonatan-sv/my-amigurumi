import React from "react";

export default function EncomendarButton({ onClick }) {
  const handleClick = () => {
    const phone = "558598566608"; // Coloque o número com DDI e DDD, sem espaços ou traços
    const message = encodeURIComponent("Olá! Quero encomendar um amigurumi personalizado.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

    return (
    <button
      style={{
        margin: "20px auto",
        display: "block",
        padding: "10px 20px",
        background: "#ffffffff",
        border: "3px solid #3b0056",
        borderRadius: "20px",
        fontSize: "26px",
        cursor: "pointer",
        color: "#3b0056",
        boxShadow: "5px 5px 0 #3b0056",
        outline: "none",
        fontFamily: "'Hepta Slab', serif", // Adiciona a fonte
        fontWeight: "bold",                // Deixa em negrito
      }}
      onClick={handleClick}
    >
      Encomende aqui seu amigurumi personalizado!
    </button>
  );
}