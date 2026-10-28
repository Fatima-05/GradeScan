import express from "express";
import { subjectAddController, subjectRemoveController, subjectGetController } from "../controllers/subjectController.js";

const router = express.Router();
// is se backend ke /subject route pe GET, POST aur DELETE request bhejne k liye use hoga. Ye router define karta hai ki subject ka data kaise add, view aur remove hoga MongoDB database mei.

router.get("/", subjectGetController);
// is se backend ke /subject route pe GET request bhejne k liye use hoga. Ye function database se saare subjects fetch karke frontend ko bhejega.

router.post("/", subjectAddController);
// is se backend ke /subject route pe POST request bhejne k liye use hoga. Ye router define karta hai ki subject ka data kaise add hoga MongoDB database mei.

router.delete("/", subjectRemoveController);
// is se backend ke /subject route pe DELETE request bhejne k liye use hoga. Ye router define karta hai ki subject ka data kaise remove hoga MongoDB database mei.

export default router;
