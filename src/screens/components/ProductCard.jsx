import { useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";
import NumberInput from "./NumberInput";

/**
 * Componente para o card de um produto na galeria.
 * @param {{produto: object, index: number, onRemove: function, onUpdate: function}} props
 */
export default function ProductCard({ produto, index, onRemove, onUpdate }) {
  const [isDiscountVisible, setDiscountVisible] = useState(false);
  const [discountValue, setDiscountValue] = useState(produto.desconto || 0);

  const handleApplyDiscount = () => {
    if (Number(discountValue) === Number(produto.preco)) {
      onUpdate(index, "desconto", 0);
    } else {
      onUpdate(index, "desconto", discountValue);
    }
    setDiscountVisible(false);
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
        onClick={() => onRemove(index)}
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
        onChange={(e) => onUpdate(index, "nome", e.target.value)}
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
          {produto.desconto > 0 ? (
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
              <NumberInput
                value={produto.preco}
                onChange={(e) => onUpdate(index, "preco", e.target.value)}
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

        {!isDiscountVisible && (
          <button
            onClick={() => setDiscountVisible(true)}
            style={{
              fontSize: "14px",
              marginTop: "5px",
              border: "none",
              background: "#3d0066",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {produto.desconto > 0 ? "Editar Desconto" : "Adicionar Desconto"}
          </button>
        )}

        {isDiscountVisible && (
          <>
            <NumberInput
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              placeholder="Valor com desconto"
              style={{
                fontSize: "14px",
                marginTop: "5px",
                textAlign: "center",
                border: "none",
                borderBottom: "1px solid #ccc",
                width: "50%",
              }}
            />
            <button
              onClick={handleApplyDiscount}
              style={{
                fontSize: "14px",
                marginTop: "5px",
                border: "none",
                background: "#3d0066",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Aplicar Desconto
            </button>
          </>
        )}

        {produto.desconto > 0 && (
          <div
            style={{ fontSize: "14px", marginTop: "10px", textAlign: "center" }}
          >
            Desconto de{" "}
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
}
