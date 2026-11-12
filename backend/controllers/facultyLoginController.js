import bcrypt from "bcryptjs";
import Faculty from "../models/faculty.js";

export const facultyLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega
    const normalizedEmail = (email || "").trim().toLowerCase(); // query karte waqt email ko normalize karte hain

    const faculty = await Faculty.findOne({ email: normalizedEmail }).select("+password"); // password field default select nahi hoti, isliye explicitly mangwate hain

    if (!faculty) {
      return res.status(404).send("User not found");
    }

    const passwordMatches = await bcrypt.compare(password, faculty.password); // plain password ko stored hash se compare karte hain

    if (!passwordMatches) {
      return res.status(401).send("Incorrect password");
    }

    if (faculty.status !== "approved") {
      return res.status(403).send("Account pending admin approval");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Login error: " + error);
  }
};
