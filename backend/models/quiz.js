import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  set: { type: String, required: true },
  className: { type: String, required: true },
  subject: { type: String, required: true },
  negative: { type: Number, required: true },
  passing: { type: Number, required: true },
  q1: { type: String, required: true },
  q2: { type: String, required: true },
  q3: { type: String, required: true },
  q4: { type: String, required: true },
  q5: { type: String, required: true },
  q6: { type: String, required: true },
  q7: { type: String, required: true },
  q8: { type: String, required: true },
  q9: { type: String, required: true },
  q10: { type: String, required: true },
  q11: { type: String, required: true },
  q12: { type: String, required: true },
  q13: { type: String, required: true },
  q14: { type: String, required: true },
  q15: { type: String, required: true },
  q16: { type: String, required: true },
});
// Ye schema define karta hai ki quiz ka data kaise store hoga MongoDB database mei.

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
