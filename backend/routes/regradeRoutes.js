import express from "express";
import { regradeAddController, regradeDecisionController } from "../controllers/regradeController.js";

const router = express.Router();
// is se backend ke /regrade route pe POST aur PUT request bhejne k liye use hoga. Ye router define karta hai ki regrade ka data kaise add aur decision kaise update hoga MongoDB database mei.

router.post("/", regradeAddController);
// is se backend ke /regrade route pe POST request bhejne k liye use hoga. Ye router define karta hai ki regrade ka data kaise add hoga MongoDB database mei.

router.put("/", regradeDecisionController);
// is se backend ke /regrade route pe PUT request bhejne k liye use hoga. Ye router define karta hai ki regrade ka data kaise update hoga MongoDB database mei.

export default router;
