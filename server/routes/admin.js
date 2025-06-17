import express from "express";
import * as controllers from "../controllers/admin.js";

const router = express.Router();

router.get("/panel", controllers.getAdminPanel);
//router.get("/login", controllers.getLoginPage);

export default router;
