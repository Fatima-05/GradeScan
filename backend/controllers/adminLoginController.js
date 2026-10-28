import Admin from "../models/admin.js";

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega

    const admin = await Admin.findOne({ email: email }); // is se database mei check karega k koi admin isi email se exist karta hai ya nahi

    if (!admin) {
      return res.status(404).send("User not found");
    }

    // abhi sirf existence check kar rahe hain
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Login error: " + error);
  }
};
