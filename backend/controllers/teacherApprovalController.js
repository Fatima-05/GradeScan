import Faculty from "../models/faculty.js";

export const teacherApproveController = (req, res) => {
  const { email } = req.body;
  // is se frontend se teacher approve ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /teacherApprove route pe POST request bhejne k liye use hoga. Ye function define karta hai ki teacher ka data kaise update hoga MongoDB database mei.

  Faculty.findOneAndUpdate({ email: email }, { status: "approved" })
    .then((teacher) => {
      if (!teacher) return res.status(404).send("No pending teacher found for that email");
      res.send("Teacher approved");
    })
    .catch((error) => res.status(500).send("Error approving teacher: " + error));
}; 
// is function ko frontend ke TeacherApproval.jsx component se call kiya jayega jab user teacher approve form submit karega. Ye function backend ke /teacherApprove route pe POST request bhejega aur data ko update karega.

export const teacherDeclineController = (req, res) => {
  const { email } = req.body;
  // is se frontend se teacher decline ka request ayega tou yeh route handle karega aur console mei message print karega. Ye function backend ke /teacherDecline route pe DELETE request bhejne k liye use hoga. Ye function define karta hai ki teacher ka data kaise delete hoga MongoDB database mei.

  Faculty.findOneAndDelete({ email: email })
    .then((teacher) => {
      if (!teacher) return res.status(404).send("No pending teacher found for that email");
      res.send("Teacher signup declined");
    })
    .catch((error) => res.status(500).send("Error declining teacher: " + error));
  // is function ko frontend ke TeacherApproval.jsx component se call kiya jayega jab user teacher decline form submit karega. Ye function backend ke /teacherDecline route pe DELETE request bhejega aur data ko delete karega.
};
