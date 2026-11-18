import Quiz from "../models/quiz.js";

export const quizController = (req, res) => {
  // Teacher email comes from the verified token, never from the request body
  const newQuiz = new Quiz({
    ...req.body,
    teacherEmail: req.user.email,
  });

  newQuiz
    .save()
    .then(() => res.status(201).send("Quiz added successfully"))
    .catch((error) => res.status(500).send("Error adding quiz: " + error));
};

export const quizGetController = async (req, res) => {
  try {
    let filter = {};

    if (req.user?.role === "faculty") {
      // Teachers see their own quizzes; unassigned legacy quizzes stay visible to everyone
      filter = {
        $or: [
          { teacherEmail: req.user.email },
          { teacherEmail: { $exists: false } },
          { teacherEmail: "" },
        ],
      };
    }

    const quizzes = await Quiz.find(filter);
    res.json(quizzes);
  } catch (error) {
    res.status(500).send("Error fetching quizzes: " + error);
  }
};
