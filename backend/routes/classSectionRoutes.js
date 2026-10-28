import express from "express";
import { classSectionAddController, classSectionRemoveController, classSectionGetController } from "../controllers/classSectionController.js";

const router = express.Router();
// is se backend ke /classSection route pe GET, POST aur DELETE request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise add, view aur delete hoga MongoDB database mei.

router.get("/", classSectionGetController);
// is se backend ke /classSection route pe GET request bhejne k liye use hoga. Ye function database se saare classes fetch karke frontend ko bhejega.

router.post("/", classSectionAddController);
// is se backend ke /classSection route pe POST request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise add hoga MongoDB database mei.

router.delete("/", classSectionRemoveController);
// is se backend ke /classSection route pe DELETE request bhejne k liye use hoga. Ye router define karta hai ki class section ka data kaise delete hoga MongoDB database mei.

export default router;
