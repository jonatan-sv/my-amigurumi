import { useState, useEffect } from "react";
import { onValue, ref, set, push, remove } from "firebase/database";
import { db, auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

import logoFinal from "../assets/logo.svg";
import NavBar from "../components/NavBar";

export default function AdminPanel() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Referência para o nó 'items' no Realtime Database
    const itemsRef = ref(db, "items");
    // Escuta por mudanças nos dados
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const itemsData = snapshot.val();
      if (itemsData) {
        // Converte o objeto de dados em um array para facilitar a exibição
        const itemsList = Object.keys(itemsData).map((key) => ({
          id: key,
          ...itemsData[key],
        }));

        setData(itemsList);
      } else {
        setData([]); // Limpa a lista se não houver dados
      }
    });

    // Limpa o listener ao desmontar o componente
    return () => unsubscribe();
  }, []);

  const handleAdd = () => {
    if (newItem.trim() !== "") {
      const itemsRef = ref(db, "items");
      const newRef = push(itemsRef); // Cria uma nova chave única
      set(newRef, { name: newItem }); // Salva o novo item
      setNewItem(""); // Limpa o input atual
    }
  };

  const handleDelete = (id) => {
    const itemRef = ref(db, `items/${id}`);
    remove(itemRef); // Remove o item pelo ID
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redireciona para a tela pública após o logout
  };

  return (
    <div>
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

      <h2>Painel de Administração</h2>
      <button onClick={handleLogout}>Sair</button>
      <div>
        <h3>Adicionar Novo Item</h3>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nome do item"
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <hr />
      <h3>Itens no Banco de Dados</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
