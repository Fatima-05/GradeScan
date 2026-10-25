import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
});
// is schema ko backend ke /subject route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki subject ka data kaise store hoga MongoDB database mei.

const Subject = mongoose.model("Subject", subjectSchema);
// is se Subject model create hoga jo backend ke /subject route pe POST request bhejne k liye use hoga. Ye model define karta hai ki subject ka data kaise store hoga MongoDB database mei.

export default Subject;
