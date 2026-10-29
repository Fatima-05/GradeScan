import ClassSection from "../models/classSection.js";

export const classSectionAddController = (req, res) => {
  const { className } = req.body; //Ye function define karta hai ki class ka data kaise store hoga MongoDB database mei.

  const newClassSection = new ClassSection({
    className: className,
  }); // is se newClassSection object create hoga

  newClassSection
    .save()
    .then(() => res.status(201).send("Class added successfully"))
    .catch((error) => res.status(500).send("Error adding class: " + error));
};

export const classSectionRemoveController = (req, res) => {
  const { className } = req.body;

  ClassSection.deleteOne({ className: className })
    .then((result) => {
      if (result.deletedCount === 0) return res.status(404).send("No class found with that name");
      res.send("Class removed");
    })
    .catch((error) => res.status(500).send("Error removing class: " + error)); 
};

export const classSectionGetController = async (req, res) => {
  try {
    const classSections = await ClassSection.find();
    res.json(classSections);
  } catch (error) {
    res.status(500).send("Error fetching class sections: " + error);
  }
};
