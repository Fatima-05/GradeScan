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
// is schema ko backend ke /regrade route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki regrade ka data kaise store hoga MongoDB database mei.

const Regrade = mongoose.model("Regrade", regradeSchema);
// is se Regrade model create hoga jo backend ke /regrade route pe POST request bhejne k liye use hoga. Ye model define karta hai ki regrade ka data kaise store hoga MongoDB database mei.

export default Regrade;
