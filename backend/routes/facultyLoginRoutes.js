import express from "express";
import { facultyLoginController } from "../controllers/facultyLoginController.js";

const router = express.Router();
// is se backend ke /login route pe POST request handle hoga aur user exist check karega

router.post("/", facultyLoginController);

export default router;
