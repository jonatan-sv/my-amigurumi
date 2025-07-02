import { useState, useEffect } from "react";
import { onValue, ref, set, push, remove } from "firebase/database";
import { db, auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

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
