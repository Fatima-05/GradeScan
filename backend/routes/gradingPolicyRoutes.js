import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import { gradingPolicyController, gradingPolicyGetController } from "../controllers/gradingPolicyController.js";

const router = express.Router();
// Ye router define karta hai ki grading policy ka data kaise add, update aur view hoga MongoDB database mei.

router.get("/", authenticate, authorize("admin"), gradingPolicyGetController);
// Ye function database se grading policy fetch karke frontend ko bhejega.

router.put("/", authenticate, authorize("admin"), gradingPolicyController);
// Ye router define karta hai ki grading policy ka data kaise update hoga MongoDB database mei.

export default router;
