import mongoose from "mongoose";
   
const resultSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  studentName: { type: String },

  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  quizTitle: { type: String, required: true },
  set: { type: String, required: true },
  className: { type: String },
  subject: { type: String },

  answers: [
    {
      questionNumber: Number,
      studentAnswer: String, // "A"/"B"/... or "" if the bubble was left blank
      status: { type: String, enum: ["correct", "wrong", "blank"] },
    },
  ],
  
  correctCount: { type: Number, required: true },
  wrongCount: { type: Number, required: true },
  blankCount: { type: Number, required: true },

  // Total after negative marking (e.g. 14.75). maxQuestions is the quiz length (16).
  score: { type: Number, required: true },
  maxQuestions: { type: Number, required: true },
  percentage: { type: Number, required: true }, // 0–100
  grade: { type: String, required: true }, // letter, snapshotted at grading time
  negativeApplied: { type: Number, default: 0 }, // the negative-marking value used

  gradedAt: { type: Date, default: Date.now },
  sourceFile: { type: String }, // uploaded sheet filename, for traceability
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
