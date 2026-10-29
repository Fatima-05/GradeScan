import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


export async function facultySignupAxiosFunction(data){
  console.log("facultySignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup`, data);
} // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup route pe POST request bhejega aur data ko send karega.

export async function studentSignupAxiosFunction(data) {
  console.log("studentSignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup/student`, data); // is function ko frontend ke StudentSignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup/student route pe POST request bhejega aur data ko send karega.
  //yeh backend ki file frontend/src/service/api.js me likhi gayi hai. Ye function backend ke /signup/student route pe POST request bhejega aur data ko send karega.
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
  return await axios.post(`${API_URL}/regrades`, data);
} // is function ko frontend ke Regrade.jsx component se call kiya jayega jab user regrade form submit karega. Ye function backend ke /regrades route pe POST request bhejega aur data ko send karega.

export async function regradeDecisionAxiosFunction(data) {
  console.log("regradeDecisionAxiosFunction called");
  return await axios.put(`${API_URL}/regrades`, data);
} // is function ko frontend ke Regrade.jsx component se call kiya jayega jab user regrade decision (approve/reject) button click karega. Ye function backend ke /regrades route pe PUT request bhejega aur data ko send karega.

export async function approveTeacherAxiosFunction(data) {
  console.log("approveTeacherAxiosFunction called");
  return await axios.put(`${API_URL}/teachers/approve`, data); // is function ko frontend ke AdminDashboard.jsx component se call kiya jayega jab admin approve button click karega. Ye function backend ke /teachers/approve route pe PUT request bhejega aur data ko send karega.
}

export async function declineTeacherAxiosFunction(data) {
  console.log("declineTeacherAxiosFunction called");
  return await axios.delete(`${API_URL}/teachers/decline`, { data: data }); // is function ko frontend ke AdminDashboard.jsx component se call kiya jayega jab admin decline button click karega. Ye function backend ke /teachers/decline route pe DELETE request bhejega aur data ko send karega.
}

export async function getAnnouncementsAxiosFunction() {
  console.log("getAnnouncementsAxiosFunction called");
  return await axios.get(`${API_URL}/announcements`);
}

// ---------- GET lists ----------
export async function getClassSectionsAxiosFunction() {
  console.log("getClassSectionsAxiosFunction called");
  return await axios.get(`${API_URL}/class_sections`);
} // is function ko frontend ke ClassSections.jsx component se call kiya jayega jab user class sections list dekhna chahta hai. Ye function backend ke /class_sections route pe GET request bhejega aur data ko receive karega.

export async function getSubjectsAxiosFunction() {
  console.log("getSubjectsAxiosFunction called");
  return await axios.get(`${API_URL}/subjects`);
} // is function ko frontend ke Subjects.jsx component se call kiya jayega jab user subjects list dekhna chahta hai. Ye function backend ke /subjects route pe GET request bhejega aur data ko receive karega.

export async function getPendingTeachersAxiosFunction() {
  console.log("getPendingTeachersAxiosFunction called");
  return await axios.get(`${API_URL}/teachers/pending`);
} // is function ko frontend ke AdminDashboard.jsx component se call kiya jayega jab admin pending teachers list dekhna chahta hai. Ye function backend ke /teachers/pending route pe GET request bhejega aur data ko receive karega.

export async function getGradingPolicyAxiosFunction() {
  console.log("getGradingPolicyAxiosFunction called");
  return await axios.get(`${API_URL}/grading_policy`);
} // is function ko frontend ke GradingPolicy.jsx component se call kiya jayega jab user grading policy dekhna chahta hai. Ye function backend ke /grading_policy route pe GET request bhejega aur data ko receive karega.

export async function getQuizzesAxiosFunction() {
  console.log("getQuizzesAxiosFunction called");
  return await axios.get(`${API_URL}/quizzes`);
} // is function ko frontend ke Quizzes.jsx component se call kiya jayega jab user quizzes list dekhna chahta hai. Ye function backend ke /quizzes route pe GET request bhejega aur data ko receive karega.

export async function getStudentsAxiosFunction() {
  console.log("getStudentsAxiosFunction called");
  return await axios.get(`${API_URL}/students`);
} // is function ko frontend ke Students.jsx component se call kiya jayega jab user students list dekhna chahta hai. Ye function backend ke /students route pe GET request bhejega aur data ko receive karega.

export async function getTeacherRegradesAxiosFunction() {
  console.log("getTeacherRegradesAxiosFunction called");
  return await axios.get(`${API_URL}/regrades/teacher`);
} // is function ko frontend ke Regrade.jsx component se call kiya jayega jab teacher regrades list dekhna chahta hai. Ye function backend ke /regrades/teacher route pe GET request bhejega aur data ko receive karega.

export async function getStudentRegradesAxiosFunction() {
  console.log("getStudentRegradesAxiosFunction called");
  return await axios.get(`${API_URL}/regrades/student`);
} // is function ko frontend ke Regrade.jsx component se call kiya jayega jab student regrades list dekhna chahta hai. Ye function backend ke /regrades/student route pe GET request bhejega aur data ko receive karega.

export async function getMyGradesAxiosFunction() {
  console.log("getMyGradesAxiosFunction called");
  return await axios.get(`${API_URL}/grades`);
} // is function ko frontend ke Grades.jsx component se call kiya jayega jab student apne grades list dekhna chahta hai. Ye function backend ke /grades route pe GET request bhejega aur data ko receive karega.


export async function facultyLoginAxiosFunction(data){
  console.log("facultyLoginAxiosFunction called");
  return await axios.post(`${API_URL}/login`, data);
} // is function ko frontend ke FacultyLogin.jsx component se call kiya jayega jab user login form submit karega. Ye function backend ke /login route pe POST request bhejega aur data ko send karega.

export async function adminLoginAxiosFunction(data){
  console.log("adminLoginAxiosFunction called");
  return await axios.post(`${API_URL}/login/admin`, data);
} // is function ko frontend ke AdminLogin.jsx component se call kiya jayega jab user login form submit karega. Ye function backend ke /login/admin route pe POST request bhejega aur data ko send karega.

export async function studentLoginAxiosFunction(data){
  console.log("studentLoginAxiosFunction called");
  return await axios.post(`${API_URL}/login/student`, data);
} // is function ko frontend ke StudentLogin.jsx component se call kiya jayega jab user login form submit karega. Ye function backend ke /login/student route pe POST request bhejega aur data ko send karega.