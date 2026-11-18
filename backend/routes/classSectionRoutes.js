import express from "express";
import { auth } from "../middleware/auth.js";
import { classSectionAddController, classSectionRemoveController, classSectionGetController } from "../controllers/classSectionController.js";

const router = express.Router();
// Ye router define karta hai ki class section ka data kaise add, view aur delete hoga MongoDB database mei.

router.get("/", auth("admin"), classSectionGetController);
// Ye function database se saare classes fetch karke frontend ko bhejega.

router.post("/", auth("admin"), classSectionAddController);
//  Ye router define karta hai ki class section ka data kaise add hoga MongoDB database mei.

router.delete("/", auth("admin"), classSectionRemoveController);
// Ye router define karta hai ki class section ka data kaise delete hoga MongoDB database mei.

export default router;
