import express from "express";
import { studentSignupController } from "../controllers/studentSignupController.js";

const router = express.Router();
// Ye router define karta hai ki student ka data kaise add hoga MongoDB database mei.

router.post("/", studentSignupController);
// Ye router define karta hai ki student ka data kaise add hoga MongoDB database mei.

export default router;
