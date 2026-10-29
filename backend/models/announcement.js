import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  message: { type: String, required: true },
  audience: { type: String, required: true },
}); 
// Ye schema define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

const Announcement = mongoose.model("Announcement", announcementSchema); //plural mei save ho jae ga

export default Announcement;
