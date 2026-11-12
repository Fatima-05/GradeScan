import bcrypt from "bcryptjs";
import Student from "../models/student.js";

export const studentSignupController = async (req, res) => {
  try {
    const { fullName, email, registrationNumber, password } = req.body;
    // Ye function define karta hai ki student ka data kaise store hoga MongoDB database mei.

    const hashedPassword = await bcrypt.hash(password, 10); // password ko hash karke store karte hain, plain text kabhi save nahi hota

    const newStudent = new Student({
      fullName: fullName,
      email: email,
      registrationNumber: registrationNumber,
      password: hashedPassword,
    }); // is se newStudent object create hoga

    await newStudent.save();
    res.status(201).send("Student added successfully");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send("Email already registered"); // unique index ki wajah se duplicate email par ye error aata hai
    }
    res.status(500).send("Error adding student: " + error);
  }
};
