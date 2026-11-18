import express from "express";
import { auth } from "../middleware/auth.js";
import { teacherApproveController, teacherDeclineController, pendingTeachersGetController } from "../controllers/teacherApprovalController.js";

const router = express.Router();

router.get("/pending", auth("admin"), pendingTeachersGetController); 
// jb frontend se pending teachers ka request ayega tou yeh route handle karega

router.put("/approve", auth("admin"), teacherApproveController); 
// jb frontend se approve ka request ayega tou yeh route handle karega aur console mei message print karega

router.delete("/decline", auth("admin"), teacherDeclineController); // jb frontend se decline ka request ayega tou yeh route handle karega aur console mei message print karega

export default router;
