import express from "express";
import { teacherApproveController, teacherDeclineController, pendingTeachersGetController } from "../controllers/teacherApprovalController.js";

const router = express.Router();

router.get("/pending", pendingTeachersGetController); 
// jb frontend se pending teachers ka request ayega tou yeh route handle karega

router.put("/approve", teacherApproveController); 
// jb frontend se approve ka request ayega tou yeh route handle karega aur console mei message print karega

router.delete("/decline", teacherDeclineController); // jb frontend se decline ka request ayega tou yeh route handle karega aur console mei message print karega

export default router;
