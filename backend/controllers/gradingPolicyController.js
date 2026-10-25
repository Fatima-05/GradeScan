import GradingPolicy from "../models/gradingPolicy.js";

export const gradingPolicyController = (req, res) => {
  // matches the first (only) policy document; creates it on the very first save
  GradingPolicy.findOneAndUpdate({}, req.body, { upsert: true })
    .then(() => res.send("Grading policy saved"))
    .catch((error) => res.status(500).send("Error saving grading policy: " + error));
};
// is function ko frontend ke GradingPolicy.jsx component se call kiya jayega jab user grading policy form submit karega. Ye function backend ke /gradingPolicy route pe POST request bhejega aur data ko save karega.