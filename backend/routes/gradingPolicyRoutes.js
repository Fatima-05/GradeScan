import express from "express";
import { gradingPolicyController, gradingPolicyGetController } from "../controllers/gradingPolicyController.js";

const router = express.Router();
// Ye router define karta hai ki grading policy ka data kaise add, update aur view hoga MongoDB database mei.

router.get("/", gradingPolicyGetController);
// Ye function database se grading policy fetch karke frontend ko bhejega.

router.put("/", gradingPolicyController);
// Ye router define karta hai ki grading policy ka data kaise update hoga MongoDB database mei.

export default router;
