import logoFinal from "./assets/Logo final.png";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <>
        <img src={logoFinal} alt="Logo do site" className="logo-final" />
        <p className="slogan">Os melhores amigurumis pertinho de você</p>

        <div className="pedido-box">
          <label htmlFor="vagas">Vagas de encomendas</label>
          <input
            id="vagas"
            type="number"
            className="vagas-input"
            placeholder="0"
          />
        </div>
      </>
      <div className="galeria-container">
        <h2>Galeria</h2>
        <div className="galeria-grid">
          <div className="produto-card">
            <img src="/img/amigurumi1.jpg" alt="Amigurumi 1" />
            <p className="nome-produto">Boneca Amarela</p>
            <p className="preco-produto">R$ 45,00</p>
          </div>
          <div className="produto-card">
            <img src="/img/amigurumi2.jpg" alt="Amigurumi 2" />
            <p className="nome-produto">Boneca Lilás</p>
            <p className="preco-produto">R$ 50,00</p>
          </div>
          {/* Adicione mais produtos aqui */}
        </div>
      </div>

      <div className="contato-section">
        <h2>Contatos</h2>
        <div className="link-inputs">
          <input type="text" placeholder="Link do Instagram" />
          <input type="text" placeholder="Link do WhatsApp" />
          <input type="text" placeholder="Link do Site" />
        </div>

        <div className="contato-footer">
          <p>
            Insira aqui seus dados de contato ou uma mensagem para o visitante
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
