import Subject from "../models/subject.js";

export const subjectAddController = (req, res) => {
  const { subjectName } = req.body; 
  // Ye function define karta hai ki subject ka data kaise store hoga MongoDB database mei.

  const newSubject = new Subject({
    subjectName: subjectName,
  }); 
  // is se newSubject object create hoga

  newSubject
    .save()
    .then(() => res.status(201).send("Subject added successfully"))
    .catch((error) => res.status(500).send("Error adding subject: " + error));
};

export const subjectRemoveController = (req, res) => {
  const { subjectName } = req.body;
  // Ye function define karta hai ki subject ka data kaise delete hoga MongoDB database mei.

  Subject.deleteOne({ subjectName: subjectName })
    .then((result) => {
      if (result.deletedCount === 0) return res.status(404).send("No subject found with that name");
      res.send("Subject removed");
    })
    .catch((error) => res.status(500).send("Error removing subject: " + error));
}; // Ye function define karta hai ki subject ka data kaise delete hoga MongoDB database mei.

export const subjectGetController = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).send("Error fetching subjects: " + error);
  }
};
