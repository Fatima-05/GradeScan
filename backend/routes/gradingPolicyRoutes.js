import express from "express";
import { gradingPolicyController } from "../controllers/gradingPolicyController.js";

const router = express.Router();
// is se backend ke /gradingPolicy route pe PUT request bhejne k liye use hoga. Ye router define karta hai ki grading policy ka data kaise update hoga MongoDB database mei.

router.put("/", gradingPolicyController);
// is se backend ke /gradingPolicy route pe PUT request bhejne k liye use hoga. Ye router define karta hai ki grading policy ka data kaise update hoga MongoDB database mei.

export default router;
