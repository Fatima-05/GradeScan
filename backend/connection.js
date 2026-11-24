import "dotenv/config";
import express from "express";
import cors from "cors";
import facultySignuRoutes from "./routes/facultySignupRoutes.js";
import studentSignupRoutes from "./routes/studentSignupRoutes.js";
import facultyLoginRoutes from "./routes/facultyLoginRoutes.js";
import adminLoginRoutes from "./routes/adminLoginRoutes.js";
import studentLoginRoutes from "./routes/studentLoginRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import classSectionRoutes from "./routes/classSectionRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import gradingPolicyRoutes from "./routes/gradingPolicyRoutes.js";
import regradeRoutes from "./routes/regradeRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import { authenticate, authorize } from "./middleware/auth.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errors.js";
// import facultySignupController from "./controllers/facultySignupController.js";

// Fail fast instead of running insecurely, like server.js in the reference.
for (const key of ["MONGODB_URI", "JWT_SECRET"]) {
  if (!process.env[key]) {
    console.error(`Missing environment variable: ${key}`);
    process.exit(1);
  }
}

const app = express(); // is se express ka instance create hoga jo backend server k liye use hoga

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", credentials: true })); // backend aur frontend server k dermeyan connection bananay k liye
app.use(express.json()); // jb actual data hota hai tou usko unpack kr k read krne k liye yeh use hoga

app.use("/signup", facultySignuRoutes);
app.use("/signup/student", studentSignupRoutes);
app.use("/login", facultyLoginRoutes);
app.use("/login/admin", adminLoginRoutes);
app.use("/login/student", studentLoginRoutes);
app.use("/quizzes", quizRoutes);
app.use("/announcements", announcementRoutes);
app.use("/class_sections", classSectionRoutes);
app.use("/subjects", subjectRoutes);
app.use("/grading_policy", gradingPolicyRoutes);
app.use("/regrades", regradeRoutes);
app.use("/teachers", teacherRoutes);

// GET routes for lists (minimal)
app.get("/students", authenticate, authorize("faculty"), async (req, res) => { // ye route backend ke /students route pe GET request handle karega aur database se students ka data fetch karega aur response ko send karega
  try {
    const Student = (await import("./models/student.js")).default; // ye line student model ko import karegi, jisse database se students ka data fetch karne ke liye use kiya jayega

    const students = await Student.find();
    res.json(students); // ye line students ka data response ke form mei send karegi, jisse frontend pe receive kiya jayega
  } catch (error) {
    res.status(500).send("Error fetching students: " + error);
  }
});

app.get("/regrades/teacher", authenticate, authorize("faculty"), async (req, res) => {
  try {
    const Regrade = (await import("./models/regrade.js")).default;
    const regrades = await Regrade.find({
      status: "pending",
      teacherEmail: req.user.email,
    });
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

app.get("/regrades/student", authenticate, authorize("student"), async (req, res) => {
  try {
    const Regrade = (await import("./models/regrade.js")).default;
    const regrades = await Regrade.find({ registrationNumber: req.user.registrationNumber });
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

app.get("/grades", authenticate, authorize("student"), async (req, res) => {
  try {
    const Result = (await import("./models/result.js")).default;
    const grades = await Result.find({ registrationNumber: req.user.registrationNumber });
    res.json(grades);
  } catch (error) {
    res.status(500).send("Error fetching grades: " + error);
  }
});

app.use(notFound); // 404 for unknown routes
app.use(errorHandler); // must be registered last

const PORT = process.env.PORT || 3000; // backend server ka port number define krne k liye

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}); // pehle MongoDB connect, phir server start
