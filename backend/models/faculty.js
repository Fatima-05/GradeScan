import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, default: "pending" },
}); // Ye schema define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;
