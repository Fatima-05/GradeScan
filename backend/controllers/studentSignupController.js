import Student from "../models/student.js";

export const studentSignupController = (req, res) => {
  const { fullName, email, registrationNumber, password } = req.body;
  // Ye function define karta hai ki student ka data kaise store hoga MongoDB database mei.

  const newStudent = new Student({
    fullName: fullName,
    email: email,
    registrationNumber: registrationNumber,
    password: password,
  }); // is se newStudent object create hoga

  newStudent
    .save()
    .then(() => res.status(201).send("Student added successfully"))
    .catch((error) => res.status(500).send("Error adding student: " + error));
}; 
