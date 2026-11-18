import express from "express";
import { auth } from "../middleware/auth.js";
import { regradeAddController, regradeDecisionController } from "../controllers/regradeController.js";

const router = express.Router();
// Ye router define karta hai ki regrade ka data kaise add aur decision kaise update hoga MongoDB database mei.

router.post("/", auth("student"), regradeAddController);
// Ye router define karta hai ki regrade ka data kaise add hoga MongoDB database mei.

router.put("/", auth("faculty"), regradeDecisionController);
// Ye router define karta hai ki regrade ka data kaise update hoga MongoDB database mei.

export default router;
