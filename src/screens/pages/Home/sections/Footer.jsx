import logo from "@assets/logo.svg";
import { AiFillTikTok } from "react-icons/ai";
import { FaBluesky, FaInstagram } from "react-icons/fa6";

export default function Footer({ contatos }) {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "white",
        border: "10px solid #C9B4EF",
        padding: "40px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} style={{ width: "120px" }} alt="Logo rodapé" />
      <div>
        <h1 style={{ fontSize: "28px", margin: 0 }}>My Amigurumi</h1>
        <p style={{ fontSize: "15px", margin: 0 }}>Mariana Lima</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <a href={contatos.bluesky} target="_blank" rel="noreferrer">
          <FaBluesky size={30} color="black" />
        </a>
        <a href={contatos.instagram} target="_blank" rel="noreferrer">
          <FaInstagram size={34} color="black" />
        </a>
        <a href={contatos.tiktok} target="_blank" rel="noreferrer">
          <AiFillTikTok size={35} color="black" />
        </a>
      </div>
    </footer>
  );
}
