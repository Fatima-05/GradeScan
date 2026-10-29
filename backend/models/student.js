import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  password: { type: String, required: true },
});
// Ye schema define karta hai ki student ka data kaise store hoga MongoDB database mei.

const Student = mongoose.model("Student", studentSchema);

export default Student;
