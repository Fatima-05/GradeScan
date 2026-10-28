import express from "express";
import { gradingPolicyController, gradingPolicyGetController } from "../controllers/gradingPolicyController.js";

const router = express.Router();
// is se backend ke /gradingPolicy route pe GET aur PUT request bhejne k liye use hoga. Ye router define karta hai ki grading policy ka data kaise add, update aur view hoga MongoDB database mei.

router.get("/", gradingPolicyGetController);
// is se backend ke /gradingPolicy route pe GET request bhejne k liye use hoga. Ye function database se grading policy fetch karke frontend ko bhejega.

router.put("/", gradingPolicyController);
// is se backend ke /gradingPolicy route pe PUT request bhejne k liye use hoga. Ye router define karta hai ki grading policy ka data kaise update hoga MongoDB database mei.

export default router;
