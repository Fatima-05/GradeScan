import mongoose from "mongoose";

const gradingPolicySchema = new mongoose.Schema({
  negative: { type: Number, required: true },
  passing: { type: Number, required: true },
  gradeA: { type: Number, required: true },
  gradeAm: { type: Number, required: true },
  gradeBp: { type: Number, required: true },
  gradeB: { type: Number, required: true },
  gradeBm: { type: Number, required: true },
  gradeCp: { type: Number, required: true },
  gradeC: { type: Number, required: true },
  gradeCm: { type: Number, required: true },
  gradeD: { type: Number, required: true },
});
// is schema ko backend ke /gradingPolicy route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki grading policy ka data kaise store hoga MongoDB database mei.

const GradingPolicy = mongoose.model("GradingPolicy", gradingPolicySchema);
// is se GradingPolicy model create hoga jo backend ke /gradingPolicy route pe POST request bhejne k liye use hoga. Ye model define karta hai ki grading policy ka data kaise store hoga MongoDB database mei.

export default GradingPolicy;
