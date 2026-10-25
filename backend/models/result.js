import mongoose from "mongoose";

/* Result: the outcome of grading one student's answer sheet for one quiz.
   Created at the end of the upload→review→grade pipeline (not wired yet —
   no route or controller uses this model, so it is inert until that pipeline
   is allowed). One Result per student per quiz.

   Both the teacher Results screen and the student Grades screen render
   straight from these fields. `studentName`, `quizTitle` and `set` are
   denormalised (copied from the Student/Quiz at grading time) so the lists can
   render without a join/populate; `quiz` keeps the real ObjectId ref to the
   Quiz record so grading can read its answer key (q1–q16). */
const resultSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  studentName: { type: String },

  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  quizTitle: { type: String, required: true },
  set: { type: String, required: true },
  className: { type: String },
  subject: { type: String },

  // Per-question outcome: ✓ correct, ✗ wrong, – blank. Q1–Q16 in order.
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
