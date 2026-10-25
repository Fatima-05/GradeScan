import Student from "../models/student.js";

export const studentSignupController = (req, res) => {
  const { fullName, email, registrationNumber, password } = req.body;
  // is se frontend se signup ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /studentSignup route pe POST request bhejne k liye use hoga. Ye function define karta hai ki student ka data kaise store hoga MongoDB database mei.

  const newStudent = new Student({
    fullName: fullName,
    email: email,
    registrationNumber: registrationNumber,
    password: password,
  }); // is se newStudent object create hoga jo backend ke /studentSignup route pe POST request bhejne k liye use hoga. Ye object define karta hai ki student ka data kaise store hoga MongoDB database mei.

  newStudent
    .save()
    .then(() => res.status(201).send("Student added successfully"))
    .catch((error) => res.status(500).send("Error adding student: " + error));
}; // is function ko frontend ke StudentSignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /studentSignup route pe POST request bhejega aur data ko send karega.
