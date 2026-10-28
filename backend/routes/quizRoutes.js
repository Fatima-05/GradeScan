import express from "express";
import { quizController, quizGetController } from "../controllers/quizController.js";

const router = express.Router();
// is se backend ke /quiz route pe GET aur POST request bhejne k liye use hoga. Ye router define karta hai ki quiz ka data kaise add aur view hoga MongoDB database mei.

router.get("/", quizGetController);
// is se backend ke /quiz route pe GET request bhejne k liye use hoga. Ye function database se saare quizzes fetch karke frontend ko bhejega.

router.post("/", quizController);
// is se backend ke /quiz route pe POST request bhejne k liye use hoga. Ye router define karta hai ki quiz ka data kaise add hoga MongoDB database mei.

export default router;
