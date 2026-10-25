import Regrade from "../models/regrade.js";

export const regradeAddController = (req, res) => {
  const { registrationNumber, quiz, questionNumber, reason } = req.body;
  // form field names are identical to the schema names, so the body goes straight in

  const newRegrade = new Regrade({
    registrationNumber: registrationNumber,
    quiz: quiz,
    questionNumber: questionNumber,
    reason: reason,
  }); // is se newRegrade object create hoga jo backend ke /regrade route pe POST request bhejne k liye use hoga. Ye object define karta hai ki regrade request ka data kaise store hoga MongoDB database mei.

  newRegrade
    .save()
    .then(() => res.status(201).send("Regrade request added successfully"))
    .catch((error) => res.status(500).send("Error adding regrade request: " + error));
}; // is function ko frontend ke Regrade.jsx component se call kiya jayega jab user regrade request form submit karega. Ye function backend ke /regrade route pe POST request bhejega aur data ko send karega.

export const regradeDecisionController = (req, res) => {
  const { quiz, questionNumber, status, teacherNote } = req.body; // is se frontend se regrade decision ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /regrade route pe PUT request bhejne k liye use hoga. Ye function define karta hai ki regrade request ka data kaise update hoga MongoDB database mei.

  Regrade.findOneAndUpdate(
    { quiz: quiz, questionNumber: questionNumber, status: "pending" },
    { status: status, teacherNote: teacherNote, decidedAt: new Date() }
  ) // is se regrade request ka status update hoga jo backend ke /regrade route pe PUT request bhejne k liye use hoga. Ye function define karta hai ki regrade request ka data kaise update hoga MongoDB database mei.
  
    .then(() => res.send("Regrade request " + status))
    .catch((error) => res.status(500).send("Error updating regrade request: " + error));
};
