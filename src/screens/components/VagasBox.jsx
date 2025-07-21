import React from "react";

export default function VagasBox({ vagas }) {
  return (
    <div
      className="pedido-box"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3rem",
        marginBottom: "5rem",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <label
        htmlFor="vagas"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#3b0056",
        }}
      >
        Vagas de encomendas
      </label>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          minWidth: "80px",
          fontSize: "1.6rem",
          borderRadius: "20px",
          border: "3px solid #3b0056",
          backgroundColor: "#e8d6fa",
          color: "#3b0056",
          boxShadow: "5px 5px 0 #3b0056",
          outline: "none",
        }}
      >
        {vagas === 0 ? "Fechado" : vagas}
      </div>
    </div>
  );
}
