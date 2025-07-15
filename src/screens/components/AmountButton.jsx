export default function AmountButton({ click, children }) {
  const style = {
    fontSize: "20px",
    padding: "5px 15px",
    borderRadius: "10px",
    backgroundColor: "#3d0066",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button onClick={click} style={style}>
      {children}
    </button>
  );
}
