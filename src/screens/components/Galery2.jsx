export default function Galery({ produtos }) {
  return (
    <section
      id="galeria"
      style={{
        padding: "20px",
        scrollMarginTop: "100px",
      }}
    >
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
              border: "1px solid #A56BE6",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              background: "#fff",
              scrollSnapAlign: "start",
              position: "relative",
              boxShadow: "5px 5px 0 #3d0066",
            }}
          >
            <img src={produto.imagem_url} alt={produto.nome} width="150" height="150" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginTop: "10px",
                  textAlign: "center",
                  border: "none",
                  width: "80%",
                }}
              >
                {produto.nome}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "5px",
                  textAlign: "center",
                  border: "none",
                  width: "50%",
                }}
              >
                {produto.promo && Number(produto.promo) > 0 ? (
                  <>
                    <span style={{ textDecoration: 'line-through', color: '#888', marginRight: 8 }}>
                      R$ {produto.preco}
                    </span>
                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                      R$ {produto.preco - produto.promo}
                    </span>
                  </>
                ) : (
                  <span>R$ {produto.preco}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
