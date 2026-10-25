import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


export async function facultySignupAxiosFunction(data){
  console.log("facultySignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup`, data);
} // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup route pe POST request bhejega aur data ko send karega.

export async function studentSignupAxiosFunction(data) {
  console.log("studentSignupAxiosFunction called");
  return await axios.post(`${API_URL}/signup/student`, data);
}

export async function quizAxiosFunction(data) {
  console.log("quizAxiosFunction called");
  return await axios.post(`${API_URL}/quizzes`, data);
}

export async function announcementAxiosFunction(data) {
  console.log("announcementAxiosFunction called");
  return await axios.post(`${API_URL}/announcements`, data);
}

export async function deleteAnnouncementAxiosFunction(data) {
  console.log("deleteAnnouncementAxiosFunction called");
  return await axios.delete(`${API_URL}/announcements`, { data: data });
}

export async function classSectionAxiosFunction(data) {
  console.log("classSectionAxiosFunction called");
  return await axios.post(`${API_URL}/class_sections`, data);
}

export async function removeClassSectionAxiosFunction(data) {
  console.log("removeClassSectionAxiosFunction called");
  return await axios.delete(`${API_URL}/class_sections`, { data: data });
}

export async function subjectAxiosFunction(data) {
  console.log("subjectAxiosFunction called");
  return await axios.post(`${API_URL}/subjects`, data);
}

export async function removeSubjectAxiosFunction(data) {
  console.log("removeSubjectAxiosFunction called");
  return await axios.delete(`${API_URL}/subjects`, { data: data });
}

export async function gradingPolicyAxiosFunction(data) {
  console.log("gradingPolicyAxiosFunction called");
  return await axios.put(`${API_URL}/grading_policy`, data);
}

export async function regradeAxiosFunction(data) {
  console.log("regradeAxiosFunction called");
  return await axios.post(`${API_URL}/regrades`, data);
}

export async function regradeDecisionAxiosFunction(data) {
  console.log("regradeDecisionAxiosFunction called");
  return await axios.put(`${API_URL}/regrades`, data);
}

export async function approveTeacherAxiosFunction(data) {
  console.log("approveTeacherAxiosFunction called");
  return await axios.put(`${API_URL}/teachers/approve`, data);
}

export async function declineTeacherAxiosFunction(data) {
  console.log("declineTeacherAxiosFunction called");
  return await axios.delete(`${API_URL}/teachers/decline`, { data: data });
}