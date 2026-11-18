import express from "express";
import { auth } from "../middleware/auth.js";
import { subjectAddController, subjectRemoveController, subjectGetController } from "../controllers/subjectController.js";

const router = express.Router();
// Ye router define karta hai ki subject ka data kaise add, view aur remove hoga MongoDB database mei.

router.get("/", auth("admin"), subjectGetController);
// Ye function database se saare subjects fetch karke frontend ko bhejega.

router.post("/", auth("admin"), subjectAddController);
// Ye router define karta hai ki subject ka data kaise add hoga MongoDB database mei.

router.delete("/", auth("admin"), subjectRemoveController);
// Ye router define karta hai ki subject ka data kaise remove hoga MongoDB database mei.

export default router;
