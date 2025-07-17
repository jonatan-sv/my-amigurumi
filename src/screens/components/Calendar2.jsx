const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d6b4ff",
  height: "400px",
  width: "90%",
  maxWidth: "700px",
  borderRadius: "15px",
  padding: "10px",
  boxShadow: "4px 4px 0 var(--dark-purple)",
};

export default function Calendar({ url }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={container}>
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
