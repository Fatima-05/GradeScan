import express from "express";
import { adminLoginController } from "../controllers/adminLoginController.js";

const router = express.Router();
// is se backend ke /login/admin route pe POST request handle hoga aur user exist check karega

router.post("/", adminLoginController);

export default router;
