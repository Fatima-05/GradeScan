import express from "express";
import {Router} from "express";
import { facultySignupController } from "../controllers/facultySignupController.js";

const router=express.Router(); // is se express ka router create hoga jo backend ke /signup route k liye use hoga
router.post("/",facultySignupController); 
// jb frontend se signup ka request ayega tou yeh route handle karega aur console mei message print karega

export default router;