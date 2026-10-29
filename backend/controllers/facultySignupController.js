import Faculty from "../models/faculty.js";

export const facultySignupController = (req, res) => { // Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.
  
  const { fullName, email, password } = req.body; //Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

  const newFaculty = new Faculty({
    fullName: fullName,
    email: email,
    password: password,
  }); // is se newFaculty object create hoga

  newFaculty
    .save()
    .then(() => res.status(201).send("Faculty signup request received"))
    .catch((error) => res.status(500).send("Error adding faculty: " + error));
};