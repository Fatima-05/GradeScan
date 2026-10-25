import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  password: { type: String, required: true },
});
// is schema ko backend ke /signup route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki student ka data kaise store hoga MongoDB database mei.

const Student = mongoose.model("Student", studentSchema);
// is se Student model create hoga jo backend ke /signup route pe POST request bhejne k liye use hoga. Ye model define karta hai ki student ka data kaise store hoga MongoDB database mei.

export default Student;
