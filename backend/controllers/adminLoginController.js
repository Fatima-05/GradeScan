import bcrypt from "bcryptjs";
import { signAccessToken } from "../utils/tokens.js";
import Admin from "../models/admin.js";

export const adminLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega
    const normalizedEmail = (email || "").trim().toLowerCase(); // query karte waqt email ko normalize karte hain

    const admin = await Admin.findOne({ email: normalizedEmail }).select("+password"); // password field default select nahi hoti, isliye explicitly mangwate hain

    if (!admin) {
      return res.status(404).json({ error: { message: "User not found" } });
    }

    const passwordMatches = await bcrypt.compare(password, admin.password); // plain password ko stored hash se compare karte hain

    if (!passwordMatches) {
      return res.status(401).json({ error: { message: "Incorrect password" } });
    }

    const token = signAccessToken(admin, "admin");
    res.json({ token, role: "admin" });
  } catch (error) {
    next(error);
  }
};
