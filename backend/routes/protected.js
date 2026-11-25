import express from "express";
import Student from "../models/student.js";
import Regrade from "../models/regrade.js";
import Result from "../models/result.js";
import Faculty from "../models/faculty.js";
import Admin from "../models/admin.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = express.Router();

// Any authenticated user: GET /profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const models = { faculty: Faculty, student: Student, admin: Admin };
    const Model = models[req.user.role];
    if (!Model) return res.status(404).json({ error: { message: "User not found" } });

    const user = await Model.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: { message: "User not found" } });

    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: { message: "Error fetching profile: " + error.message } });
  }
});

// Faculty only
router.get("/students", authenticate, authorize("faculty"), async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send("Error fetching students: " + error);
  }
});

router.get("/regrades/teacher", authenticate, authorize("faculty"), async (req, res) => {
  try {
    const regrades = await Regrade.find({ status: "pending", teacherEmail: req.user.email });
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

// Student only
router.get("/regrades/student", authenticate, authorize("student"), async (req, res) => {
  try {
    const regrades = await Regrade.find({ registrationNumber: req.user.registrationNumber });
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

router.get("/grades", authenticate, authorize("student"), async (req, res) => {
  try {
    const grades = await Result.find({ registrationNumber: req.user.registrationNumber });
    res.json(grades);
  } catch (error) {
    res.status(500).send("Error fetching grades: " + error);
  }
});

export default router;
