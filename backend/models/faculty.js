import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, default: "pending" },
}); // is schema ko backend ke /signup route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

const Faculty = mongoose.model("Faculty", facultySchema); // is se Faculty model create hoga jo backend ke /signup route pe POST request bhejne k liye use hoga. Ye model define karta hai ki faculty ka data kaise store hoga MongoDB database mei.

export default Faculty;
