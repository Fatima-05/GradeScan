import Faculty from "../models/faculty.js";

export const teacherApproveController = (req, res) => {
  const { email } = req.body;
  // Ye function define karta hai ki teacher ka data kaise update hoga MongoDB database mei.

  Faculty.findOneAndUpdate({ email: email }, { status: "approved" })
    .then((teacher) => {
      if (!teacher) return res.status(404).send("No pending teacher found for that email");
      res.send("Teacher approved");
    })
    .catch((error) => res.status(500).send("Error approving teacher: " + error));
}; 

export const teacherDeclineController = (req, res) => {
  const { email } = req.body;
  // Ye function define karta hai ki teacher ka data kaise delete hoga MongoDB database mei.

  Faculty.findOneAndDelete({ email: email })
    .then((teacher) => {
      if (!teacher) return res.status(404).send("No pending teacher found for that email");
      res.send("Teacher signup declined");
    })
    .catch((error) => res.status(500).send("Error declining teacher: " + error));
};

export const pendingTeachersGetController = async (req, res) => {
  try {
    const teachers = await Faculty.find({ status: "pending" });
    res.json(teachers);
  } catch (error) {
    res.status(500).send("Error fetching pending teachers: " + error);
  }
};
