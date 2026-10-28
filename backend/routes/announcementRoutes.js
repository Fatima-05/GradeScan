import express from "express";
import { announcementAddController, announcementDeleteController, announcementGetController } from "../controllers/announcementController.js";

const router = express.Router();
// is se backend ke /announcement route pe GET, POST aur DELETE request bhejne k liye use hoga. Ye router define karta hai ki announcement ka data kaise add, view aur delete hoga MongoDB database mei.

router.get("/", announcementGetController);
// is se backend ke /announcements route pe GET request bhejne k liye use hoga. Ye function database se saare announcements fetch karke frontend ko bhejega.

router.post("/", announcementAddController);
// is se backend ke /announcements route pe POST request bhejne k liye use hoga. Ye function define karta hai ki announcement ka data kaise add hoga MongoDB database mei.

router.delete("/", announcementDeleteController);
// is se backend ke /announcements route pe DELETE request bhejne k liye use hoga. Ye function define karta hai ki announcement ka data kaise delete hoga MongoDB database mei.

export default router;
