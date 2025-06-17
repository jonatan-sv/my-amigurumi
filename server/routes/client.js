import express from "express";
import * as controllers from "../controllers/client.js";

const router = express.Router();

// Página principal
router.get("/", controllers.getClientPage);
// Redirecionar para a página inicial ao acessar rotas inexistentes
router.get("*any", controllers.redirectClient);

export default router;
