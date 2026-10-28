import Regrade from "../models/regrade.js";

export const regradeAddController = (req, res) => {
  const { registrationNumber, quiz, questionNumber, reason } = req.body;

  const newRegrade = new Regrade({
    registrationNumber,
    quiz,
    questionNumber,
    reason,
  });

  newRegrade
    .save()
    .then(() => res.status(201).send("Regrade request added successfully"))
    .catch((error) => res.status(500).send("Error adding regrade request: " + error));
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
