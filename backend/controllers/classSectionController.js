import ClassSection from "../models/classSection.js";

export const classSectionAddController = (req, res) => {
  const { className } = req.body; // is se frontend se class add ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /classSection route pe POST request bhejne k liye use hoga. Ye function define karta hai ki class ka data kaise store hoga MongoDB database mei.

  const newClassSection = new ClassSection({
    className: className,
  }); // is se newClassSection object create hoga jo backend ke /classSection route pe POST request bhejne k liye use hoga. Ye object define karta hai ki class ka data kaise store hoga MongoDB database mei.

  newClassSection
    .save()
    .then(() => res.status(201).send("Class added successfully"))
    .catch((error) => res.status(500).send("Error adding class: " + error));
}; // is function ko frontend ke ClassSection.jsx component se call kiya jayega jab user class add form submit karega. Ye function backend ke /classSection route pe POST request bhejega aur data ko send karega.

export const classSectionRemoveController = (req, res) => {
  const { className } = req.body; // is se frontend se class remove ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /classSection route pe DELETE request bhejne k liye use hoga. Ye function define karta hai ki class ka data kaise delete hoga MongoDB database mei.

  ClassSection.deleteOne({ className: className })
    .then((result) => {
      if (result.deletedCount === 0) return res.status(404).send("No class found with that name");
      res.send("Class removed");
    })
    .catch((error) => res.status(500).send("Error removing class: " + error)); // is function ko frontend ke ClassSection.jsx component se call kiya jayega jab user class remove form submit karega. Ye function backend ke /classSection route pe DELETE request bhejega aur data ko delete karega.
};

export const classSectionGetController = async (req, res) => {
  try {
    const classSections = await ClassSection.find();
    res.json(classSections);
  } catch (error) {
    res.status(500).send("Error fetching class sections: " + error);
  }
};
