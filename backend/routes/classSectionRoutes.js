import express from "express";
import { classSectionAddController, classSectionRemoveController } from "../controllers/classSectionController.js";

const router = express.Router();
// is se backend ke /classSection route pe POST aur DELETE request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise add aur delete hoga MongoDB database mei.

router.post("/", classSectionAddController);
// is se backend ke /classSection route pe POST request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise add hoga MongoDB database mei.

router.delete("/", classSectionRemoveController);
// is se backend ke /classSection route pe DELETE request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise delete hoga MongoDB database mei.

export default router;
