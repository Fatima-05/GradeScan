import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import facultySignuRoutes from "./routes/facultySignupRoutes.js";
import studentSignupRoutes from "./routes/studentSignupRoutes.js";
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

// app.post("/signup", facultySignupController); // jb frontend se signup ka request ayega tou yeh route handle karega aur console mei message print karega

app.use("/signup", facultySignuRoutes); // jb frontend se signup ka request ayega tou yeh route handle karega aur console mei message print karega
app.use("/signup/student", studentSignupRoutes);
app.use("/quizzes", quizRoutes);
app.use("/announcements", announcementRoutes);
app.use("/class_sections", classSectionRoutes);
app.use("/subjects", subjectRoutes);
app.use("/grading_policy", gradingPolicyRoutes);
app.use("/regrades", regradeRoutes);
app.use("/teachers", teacherRoutes);

const PORT = process.env.PORT || 3000; // backend server ka port number define krne k liye

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // is se backend server start hoga aur port 3000 pe listen karega

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));
// is se backend server MongoDB database se connect hoga aur agar connection successful hoga tou console mei message print karega, agar error aayega tou error message print karega