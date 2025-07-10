import logo from "../../assets/logo.svg";

export default function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <img
        src={logo}
        style={{
          width: "350px",
        }}
      />
      <h1 style={{ fontSize: "40px", textAlign: "left" }}>
        Os melhores
        <br /> amigurumis
        <br /> pertinho de você!!
      </h1>
    </div>
  );
}
