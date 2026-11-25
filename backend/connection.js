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
import protectedRoutes from "./routes/protected.js";
import connectDB from "./config/db.js";
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
app.use("/", protectedRoutes);

const PORT = process.env.PORT || 3000; // backend server ka port number define krne k liye

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}); // pehle MongoDB connect, phir server start
