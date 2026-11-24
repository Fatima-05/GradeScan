import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import { regradeAddController, regradeDecisionController } from "../controllers/regradeController.js";

const router = express.Router();
// Ye router define karta hai ki regrade ka data kaise add aur decision kaise update hoga MongoDB database mei.

router.post("/", authenticate, authorize("student"), regradeAddController);
// Ye router define karta hai ki regrade ka data kaise add hoga MongoDB database mei.

router.put("/", authenticate, authorize("faculty"), regradeDecisionController);
// Ye router define karta hai ki regrade ka data kaise update hoga MongoDB database mei.

export default router;
