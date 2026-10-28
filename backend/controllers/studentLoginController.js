import Student from "../models/student.js";

export const studentLoginController = async (req, res) => {
  try {
    const { email, password } = req.body; // is se frontend se email aur password ayega

    const student = await Student.findOne({ email: email }); // is se database mei check karega k koi student isi email se exist karta hai ya nahi

    if (!student) {
      return res.status(404).send("User not found");
    }

    // abhi sirf existence check kar rahe hain
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Login error: " + error);
  }
};
