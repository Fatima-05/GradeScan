import mongoose from "mongoose";

const classSectionSchema = new mongoose.Schema({
  className: { type: String, required: true },
});
// is schema ko backend ke /classSection route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki class section ka data kaise store hoga MongoDB database mei.

const ClassSection = mongoose.model("ClassSection", classSectionSchema);
// is se ClassSection model create hoga jo backend ke /classSection route pe POST request bhejne k liye use hoga. Ye model define karta hai ki class section ka data kaise store hoga MongoDB database mei.

export default ClassSection;
