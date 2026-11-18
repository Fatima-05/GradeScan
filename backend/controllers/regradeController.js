import Regrade from "../models/regrade.js";
import Quiz from "../models/quiz.js";

export const regradeAddController = async (req, res) => {
  try {
    const { quiz, questionNumber, reason } = req.body;

    if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > 16) {
      return res.status(400).send("Question number must be between 1 and 16");
    }

    // The dropdown sends a label like "Web Tech Quiz 1 (Set-A)". Use it to
    // find the quiz owner so the request lands in that teacher's queue.
    const match = typeof quiz === "string" ? quiz.match(/^(.*) \((Set-[A-Z])\)$/) : null;
    let teacherEmail = "";

    if (match) {
      const quizDoc = await Quiz.findOne({ title: match[1], set: match[2] });
      if (quizDoc) teacherEmail = quizDoc.teacherEmail || "";
    }

    const newRegrade = new Regrade({
      registrationNumber: req.user.registrationNumber, // token is the source of truth, not the typed form value
      quiz,
      questionNumber,
      reason,
      teacherEmail,
    });

    await newRegrade.save();
    res.status(201).send("Regrade request added successfully");
  } catch (error) {
    res.status(500).send("Error adding regrade request: " + error);
  }
};

export const regradeDecisionController = (req, res) => {
  const { id, status, teacherNote } = req.body;

  Regrade.findByIdAndUpdate(
    id,
    {
      status,
      teacherNote: teacherNote || "",
      decidedAt: new Date(),
    },
    { new: true }
  )
    .then((request) => {
      if (!request) {
        return res.status(404).send("No regrade request found for that id");
      }

      res.status(200).json(request);
    })
    .catch((error) => {
      res.status(500).send("Error updating regrade request: " + error);
    });
};
