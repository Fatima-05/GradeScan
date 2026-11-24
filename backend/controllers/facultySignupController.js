import bcrypt from "bcryptjs";
import Faculty from "../models/faculty.js";

export const facultySignupController = async (req, res, next) => { // Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.
  try {
    const { fullName, email, password } = req.body; // Ye function define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

    const hashedPassword = await bcrypt.hash(password, 10); // password ko hash karke store karte hain, plain text kabhi save nahi hota

    const newFaculty = new Faculty({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    }); // is se newFaculty object create hoga

    await newFaculty.save();
    res.status(201).json({ data: { message: "Faculty signup request received" } });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: { message: "Email already registered" } }); // unique index ki wajah se duplicate email par ye error aata hai
    }
    next(error);
  }
};
