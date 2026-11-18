import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega
    const normalizedEmail = (email || "").trim().toLowerCase(); // query karte waqt email ko normalize karte hain

    const admin = await Admin.findOne({ email: normalizedEmail }).select("+password"); // password field default select nahi hoti, isliye explicitly mangwate hain

    if (!admin) {
      return res.status(404).send("User not found");
    }

    const passwordMatches = await bcrypt.compare(password, admin.password); // plain password ko stored hash se compare karte hain

    if (!passwordMatches) {
      return res.status(401).send("Incorrect password");
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );
    res.json({ token, role: "admin" });
  } catch (error) {
    res.status(500).send("Login error: " + error);
  }
};
