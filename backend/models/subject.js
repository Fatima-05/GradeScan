import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
});
// Ye schema define karta hai ki subject ka data kaise store hoga MongoDB database mei.

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
