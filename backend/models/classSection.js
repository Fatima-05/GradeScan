import mongoose from "mongoose";

const classSectionSchema = new mongoose.Schema({
  className: { type: String, required: true },
});
// Ye schema define karta hai ki class section ka data kaise store hoga MongoDB database mei.

const ClassSection = mongoose.model("ClassSection", classSectionSchema);

export default ClassSection;
