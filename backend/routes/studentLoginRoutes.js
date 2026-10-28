import express from "express";
import { studentLoginController } from "../controllers/studentLoginController.js";

const router = express.Router();
// is se backend ke /login/student route pe POST request handle hoga aur user exist check karega

router.post("/", studentLoginController);

export default router;
