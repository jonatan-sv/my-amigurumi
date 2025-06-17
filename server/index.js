import express from "express";
import path from "path";
import helmet from "helmet";
import { fileURLToPath } from "url";
import clientRoutes from "./routes/client.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(helmet());
app.use(express.json());

// Servir React buildado
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Rotas
app.use("/admin", adminRoutes);
app.use("/", clientRoutes);

// Inicializar servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
