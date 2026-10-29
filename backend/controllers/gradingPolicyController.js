import GradingPolicy from "../models/gradingPolicy.js";

export const gradingPolicyController = (req, res) => {
  // upsert: matches the first (only) policy document; creates it on the very first save
  GradingPolicy.findOneAndUpdate({}, req.body, { upsert: true })
    .then(() => res.send("Grading policy saved"))
    .catch((error) => res.status(500).send("Error saving grading policy: " + error));
};

export const gradingPolicyGetController = async (req, res) => {
  try {
    const gradingPolicy = await GradingPolicy.findOne();
    res.json(gradingPolicy);
  } catch (error) {
    res.status(500).send("Error fetching grading policy: " + error);
  }
};