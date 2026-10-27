import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


export async function facultySignupAxiosFunction(data){
  console.log("facultySignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup`, data);
} // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup route pe POST request bhejega aur data ko send karega.

export async function studentSignupAxiosFunction(data) {
  console.log("studentSignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup/student`, data); // is function ko frontend ke StudentSignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup/student route pe POST request bhejega aur data ko send karega.
}

export async function quizAxiosFunction(data) {
  console.log("quizAxiosFunction called");
  return await axios.post(`${API_URL}/quizzes`, data); // is function ko frontend ke Quizzes.jsx component se call kiya jayega jab user quiz form submit karega. Ye function backend ke /quizzes route pe POST request bhejega aur data ko send karega.
}

export async function announcementAxiosFunction(data) {
  console.log("announcementAxiosFunction called");
  return await axios.post(`${API_URL}/announcements`, data); // is function ko frontend ke Announcements.jsx component se call kiya jayega jab user announcement form submit karega. Ye function backend ke /announcements route pe POST request bhejega aur data ko send karega.
}

export async function deleteAnnouncementAxiosFunction(data) {
  console.log("deleteAnnouncementAxiosFunction called");
  return await axios.delete(`${API_URL}/announcements`, { data: data }); // is function ko frontend ke Announcements.jsx component se call kiya jayega jab user delete button click karega. Ye function backend ke /announcements route pe DELETE request bhejega aur data ko send karega.
}

export async function classSectionAxiosFunction(data) {
  console.log("classSectionAxiosFunction called");
  return await axios.post(`${API_URL}/class_sections`, data); // is function ko frontend ke ClassSections.jsx component se call kiya jayega jab user class section form submit karega. Ye function backend ke /class_sections route pe POST request bhejega aur data ko send karega.
}

export async function removeClassSectionAxiosFunction(data) {
  console.log("removeClassSectionAxiosFunction called");
  return await axios.delete(`${API_URL}/class_sections`, { data: data }); // is function ko frontend ke ClassSections.jsx component se call kiya jayega jab user remove button click karega. Ye function backend ke /class_sections route pe DELETE request bhejega aur data ko send karega.
}

export async function subjectAxiosFunction(data) {
  console.log("subjectAxiosFunction called");
  return await axios.post(`${API_URL}/subjects`, data); // is function ko frontend ke Subjects.jsx component se call kiya jayega jab user subject form submit karega. Ye function backend ke /subjects route pe POST request bhejega aur data ko send karega.
}

export async function removeSubjectAxiosFunction(data) {
  console.log("removeSubjectAxiosFunction called");
  return await axios.delete(`${API_URL}/subjects`, { data: data }); // is function ko frontend ke Subjects.jsx component se call kiya jayega jab user remove button click karega. Ye function backend ke /subjects route pe DELETE request bhejega aur data ko send karega.
}

export async function gradingPolicyAxiosFunction(data) {
  console.log("gradingPolicyAxiosFunction called");
  return await axios.put(`${API_URL}/grading_policy`, data); // is function ko frontend ke GradingPolicy.jsx component se call kiya jayega jab user grading policy form submit karega. Ye function backend ke /grading_policy route pe PUT request bhejega aur data ko send karega.
}

export async function regradeAxiosFunction(data) {
  console.log("regradeAxiosFunction called");
  return await axios.post(`${API_URL}/regrades`, data); // is function ko frontend ke Regrade.jsx component se call kiya jayega jab user regrade form submit karega. Ye function backend ke /regrades route pe POST request bhejega aur data ko send karega.
}

export async function regradeDecisionAxiosFunction(data) {
  console.log("regradeDecisionAxiosFunction called");
  return await axios.put(`${API_URL}/regrades`, data); // is function ko frontend ke Regrade.jsx component se call kiya jayega jab teacher approve/reject button click karega. Ye function backend ke /regrades route pe PUT request bhejega aur data ko send karega.
}

export async function approveTeacherAxiosFunction(data) {
  console.log("approveTeacherAxiosFunction called");
  return await axios.put(`${API_URL}/teachers/approve`, data); // is function ko frontend ke AdminDashboard.jsx component se call kiya jayega jab admin approve button click karega. Ye function backend ke /teachers/approve route pe PUT request bhejega aur data ko send karega.
}

export async function declineTeacherAxiosFunction(data) {
  console.log("declineTeacherAxiosFunction called");
  return await axios.delete(`${API_URL}/teachers/decline`, { data: data }); // is function ko frontend ke AdminDashboard.jsx component se call kiya jayega jab admin decline button click karega. Ye function backend ke /teachers/decline route pe DELETE request bhejega aur data ko send karega.
}