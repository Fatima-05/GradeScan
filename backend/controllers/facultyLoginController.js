import bcrypt from "bcryptjs";
import { signAccessToken } from "../utils/tokens.js";
import Faculty from "../models/faculty.js";

export const facultyLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega
    const normalizedEmail = (email || "").trim().toLowerCase(); // query karte waqt email ko normalize karte hain

    const faculty = await Faculty.findOne({ email: normalizedEmail }).select("+password"); // password field default select nahi hoti, isliye explicitly mangwate hain

    if (!faculty) {
      return res.status(404).json({ error: { message: "User not found" } });
    }

    const passwordMatches = await bcrypt.compare(password, faculty.password); // plain password ko stored hash se compare karte hain

    if (!passwordMatches) {
      return res.status(401).json({ error: { message: "Incorrect password" } });
    }

    if (faculty.status !== "approved") {
      return res.status(403).json({ error: { message: "Account pending admin approval" } });
    }

    const token = signAccessToken(faculty, "faculty");
    res.json({ token, role: "faculty" });
  } catch (error) {
    next(error);
  }
};
