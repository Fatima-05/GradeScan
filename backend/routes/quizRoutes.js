import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import { quizController, quizGetController } from "../controllers/quizController.js";

const router = express.Router();
// Ye router define karta hai ki quiz ka data kaise add aur view hoga MongoDB database mei.

router.get("/", authenticate, quizGetController);
// Ye function database se saare quizzes fetch karke frontend ko bhejega.

router.post("/", authenticate, authorize("faculty"), quizController);
// Ye router define karta hai ki quiz ka data kaise add hoga MongoDB database mei.

export default router;
