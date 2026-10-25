import express from "express";
import { announcementAddController, announcementDeleteController } from "../controllers/announcementController.js";

const router = express.Router();
// is se backend ke /announcement route pe POST aur DELETE request bhejne k liye use hoga. Ye router define karta hai ki announcement ka data kaise add aur delete hoga MongoDB database mei.

router.post("/", announcementAddController);
// is se backend ke /announcement route pe POST request bhejne k liye use hoga. Ye router define karta hai ki announcement ka data kaise add hoga MongoDB database mei.

router.delete("/", announcementDeleteController);
// is se backend ke /announcement route pe DELETE request bhejne k liye use hoga. Ye router define karta hai ki announcement ka data kaise delete hoga MongoDB database mei.

export default router;
