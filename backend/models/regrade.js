import mongoose from "mongoose";

const regradeSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  quiz: { type: String, required: true },
  questionNumber: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "pending" },
  teacherNote: { type: String, default: "" },
  decidedAt: { type: Date },
});
// Ye schema define karta hai ki regrade ka data kaise store hoga MongoDB database mei.

const Regrade = mongoose.model("Regrade", regradeSchema);

export default Regrade;
