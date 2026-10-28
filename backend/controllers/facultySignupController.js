import Faculty from "../models/faculty.js";

export const facultySignupController = (req, res) => { // ye function backend ke /signup route pe POST request handle karega aur console mei message print karega. Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.
  
  const { fullName, email, password } = req.body; // is se frontend se signup ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /signup route pe POST request bhejne k liye use hoga. Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

  const newFaculty = new Faculty({
    fullName: fullName,
    email: email,
    password: password,
  }); // is se newFaculty object create hoga jo backend ke /signup route pe POST request bhejne k liye use hoga. Ye object define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

  newFaculty
    .save()
    .then(() => res.status(201).send("Faculty signup request received"))
    .catch((error) => res.status(500).send("Error adding faculty: " + error));
}; // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup route pe POST request bhejega aur data ko send karega.