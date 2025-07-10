const style = {
  backgroundColor: "white",
  display: "inline-block",
  padding: "10px 30px",
  borderRadius: "40px",
  boxShadow: "0px 4px 0px 2px var(--dark-purple)",
  marginBottom: "20p",
  outline: "3px solid var(--dark-purple)",
};

export default function SectionTitle({ children }) {
  return (
    <div style={style}>
      <h2 style={{ margin: 0, color: "#3d0066" }}>{children}</h2>
    </div>
  );
}
