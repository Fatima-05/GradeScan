import Subject from "../models/subject.js";

export const subjectAddController = (req, res) => {
  const { subjectName } = req.body; 
  // is se frontend se subject ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /subject route pe POST request bhejne k liye use hoga. Ye function define karta hai ki subject ka data kaise store hoga MongoDB database mei.

  const newSubject = new Subject({
    subjectName: subjectName,
  }); 
  // is se newSubject object create hoga jo backend ke /subject route pe POST request bhejne k liye use hoga. Ye object define karta hai ki subject ka data kaise store hoga MongoDB database mei.

  newSubject
    .save()
    .then(() => res.status(201).send("Subject added successfully"))
    .catch((error) => res.status(500).send("Error adding subject: " + error));
};
// is function ko frontend ke Subject.jsx component se call kiya jayega jab user subject add form submit karega. Ye function backend ke /subject route pe POST request bhejega aur data ko send karega.

export const subjectRemoveController = (req, res) => {
  const { subjectName } = req.body;
  // is se frontend se subject remove ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /subject route pe DELETE request bhejne k liye use hoga. Ye function define karta hai ki subject ka data kaise delete hoga MongoDB database mei.

  Subject.deleteOne({ subjectName: subjectName })
    .then((result) => {
      if (result.deletedCount === 0) return res.status(404).send("No subject found with that name");
      res.send("Subject removed");
    })
    .catch((error) => res.status(500).send("Error removing subject: " + error));
}; // is function ko frontend ke Subject.jsx component se call kiya jayega jab user subject remove form submit karega. Ye function backend ke /subject route pe DELETE request bhejega aur data ko delete karega.

export const subjectGetController = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).send("Error fetching subjects: " + error);
  }
};
