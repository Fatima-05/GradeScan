import Quiz from "../models/quiz.js";

export const quizController = (req, res) => {
  // form field names are identical to the schema names, so the body goes straight in
  const newQuiz = new Quiz(req.body);

  newQuiz
    .save()
    .then(() => res.status(201).send("Quiz added successfully"))
    .catch((error) => res.status(500).send("Error adding quiz: " + error));
};

export const quizGetController = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).send("Error fetching quizzes: " + error);
  }
};