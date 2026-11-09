import Faculty from "../models/faculty.js";

export const facultyLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega

    const faculty = await Faculty.findOne({ email: email }); // is se database mei check karega k koi faculty isi email se exist karta hai ya nahi

    if (!faculty) {
      return res.status(404).send("User not found");
    }

    if (faculty.password !== password) {
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
