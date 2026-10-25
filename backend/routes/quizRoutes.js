import express from "express";
import { quizController } from "../controllers/quizController.js";

const router = express.Router();
// is se backend ke /quiz route pe POST request bhejne k liye use hoga. Ye router define karta hai ki quiz ka data kaise add hoga MongoDB database mei.

router.post("/", quizController);
// is se backend ke /quiz route pe POST request bhejne k liye use hoga. Ye router define karta hai ki quiz ka data kaise add hoga MongoDB database mei.

export default router;
