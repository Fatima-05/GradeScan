import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
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
// import facultySignupController from "./controllers/facultySignupController.js";

const app = express(); // is se express ka instance create hoga jo backend server k liye use hoga

app.use(cors()); //backend aur frontend server k dermeyan connection bananay k liye

app.use(express.json()); //jb actual data hota hai tou usko unpack kr k read krne k liye yeh use hoga


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
app.get("/students", async (req, res) => { // ye route backend ke /students route pe GET request handle karega aur database se students ka data fetch karega aur response ko send karega
  try {
    const Student = (await import("./models/student.js")).default; // ye line student model ko import karegi, jisse database se students ka data fetch karne ke liye use kiya jayega

    const students = await Student.find();
    res.json(students); // ye line students ka data response ke form mei send karegi, jisse frontend pe receive kiya jayega
  } catch (error) {
    res.status(500).send("Error fetching students: " + error);
  }
});

app.get("/regrades/teacher", async (req, res) => {
  try {
    const Regrade = (await import("./models/regrade.js")).default;
    const regrades = await Regrade.find({ status: "pending" });
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

app.get("/regrades/student", async (req, res) => {
  try {
    const Regrade = (await import("./models/regrade.js")).default;
    const regrades = await Regrade.find();
    res.json(regrades);
  } catch (error) {
    res.status(500).send("Error fetching regrades: " + error);
  }
});

app.get("/grades", async (req, res) => {
  try {
    const Result = (await import("./models/result.js")).default;
    const grades = await Result.find();
    res.json(grades);
  } catch (error) {
    res.status(500).send("Error fetching grades: " + error);
  }
});

const PORT = process.env.PORT || 3000; // backend server ka port number define krne k liye

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // is se backend server start hoga aur port 3000 pe listen karega

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));
// is se backend server MongoDB database se connect hoga aur agar connection successful hoga tou console mei message print karega, agar error aayega tou error message print karega