import Announcement from "../models/announcement.js";

export const announcementAddController = (req, res) => {
  const { message, audience } = req.body; // Ye function define karta hai ki announcement ka data kaise store hoga MongoDB database mei.

  const newAnnouncement = new Announcement({
    message: message,
    audience: audience,
  }); // is se newAnnouncement object create hoga

  newAnnouncement
    .save()
    .then(() => res.status(201).send("Announcement added successfully")) 
    .catch((error) => res.status(500).send("Error adding announcement: " + error));
};

export const announcementDeleteController = (req, res) => {
  const { message } = req.body;

  Announcement.deleteOne({ message: message })
    .then((result) => {
      if (result.deletedCount === 0) return res.status(404).send("No announcement found with that message");
      res.send("Announcement deleted");
    })
    .catch((error) => res.status(500).send("Error deleting announcement: " + error));
};

export const announcementGetController = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).send("Error fetching announcements: " + error);
  }
};