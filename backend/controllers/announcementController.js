import Announcement from "../models/announcement.js";

export const announcementAddController = (req, res) => {
  const { message, audience } = req.body; // is se frontend se announcement ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /announcement route pe POST request bhejne k liye use hoga. Ye function define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

  const newAnnouncement = new Announcement({
    message: message,
    audience: audience,
  }); // is se newAnnouncement object create hoga jo backend ke /announcement route pe POST request bhejne k liye use hoga. Ye object define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

  newAnnouncement
    .save()
    .then(() => res.status(201).send("Announcement added successfully"))
    .catch((error) => res.status(500).send("Error adding announcement: " + error));
}; // is function ko frontend ke Announcement.jsx component se call kiya jayega jab user announcement form submit karega. Ye function backend ke /announcement route pe POST request bhejega aur data ko send karega.

export const announcementDeleteController = (req, res) => {
  const { message } = req.body; // is se frontend se announcement delete ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /announcement route pe DELETE request bhejne k liye use hoga. Ye function define karta hai ki announcement ka data kaise delete hoga MongoDB database mei.

  Announcement.deleteOne({ message: message })
    .then(() => res.send("Announcement deleted"))
    .catch((error) => res.status(500).send("Error deleting announcement: " + error));
};
// is function ko frontend ke Announcement.jsx component se call kiya jayega jab user announcement delete karega. Ye function backend ke /announcement route pe DELETE request bhejega aur data ko delete karega.