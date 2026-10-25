import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  message: { type: String, required: true },
  audience: { type: String, required: true },
}); 
// is schema ko backend ke /announcement route pe POST request bhejne k liye use kiya jayega. Ye schema define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

const Announcement = mongoose.model("Announcement", announcementSchema);
// is se Announcement model create hoga jo backend ke /announcement route pe POST request bhejne k liye use hoga. Ye model define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

export default Announcement;
