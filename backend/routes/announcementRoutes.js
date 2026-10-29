import express from "express";
import { announcementAddController, announcementDeleteController, announcementGetController } from "../controllers/announcementController.js";

const router = express.Router();
// Ye router define karta hai ki announcement ka data kaise add, view aur delete hoga MongoDB database mei.

router.get("/", announcementGetController);
// Ye function database se saare announcements fetch karke frontend ko bhejega.

router.post("/", announcementAddController);
// Ye function define karta hai ki announcement ka data kaise add hoga MongoDB database mei.

router.delete("/", announcementDeleteController);
// Ye function define karta hai ki announcement ka data kaise delete hoga MongoDB database mei.

export default router;
