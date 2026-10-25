import express from "express";
import { studentSignupController } from "../controllers/studentSignupController.js";

const router = express.Router();
// is se backend ke /signup route pe POST request bhejne k liye use hoga. Ye router define karta hai ki student ka data kaise add hoga MongoDB database mei.

router.post("/", studentSignupController);
// is se backend ke /signup route pe POST request bhejne k liye use hoga. Ye router define karta hai ki student ka data kaise add hoga MongoDB database mei.

export default router;
