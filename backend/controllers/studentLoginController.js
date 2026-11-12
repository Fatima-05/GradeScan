import bcrypt from "bcryptjs";
import Student from "../models/student.js";

export const studentLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega
    const normalizedEmail = (email || "").trim().toLowerCase(); // query karte waqt email ko normalize karte hain

    const student = await Student.findOne({ email: normalizedEmail }).select("+password"); // password field default select nahi hoti, isliye explicitly mangwate hain

    if (!student) {
      return res.status(404).send("User not found");
    }

    const passwordMatches = await bcrypt.compare(password, student.password); // plain password ko stored hash se compare karte hain

    if (!passwordMatches) {
      return res.status(401).send("Incorrect password");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Login error: " + error);
  }
};
