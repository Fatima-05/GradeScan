import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Axios instance with the same base URL for every call, like client/api.js in the reference.
const api = axios.create({ baseURL: API_URL });

// JWT: attach the stored token to every request. Login/signup still work
// without one, so the interceptor simply skips requests with no token.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// An expired/invalid token shouldn't leave the UI on a broken page. Skip
// /login and /signup so a wrong password can still show its alert.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url || "";
    if (error.response?.status === 401 && !url.includes("/login") && !url.includes("/signup")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("registrationNumber");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export async function facultySignupAxiosFunction(data){
  console.log("facultySignupAxiosFunction called");
  return await api.post("/signup", data);
} // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega.

export async function studentSignupAxiosFunction(data) {
  console.log("studentSignupAxiosFunction called");
  return await api.post("/signup/student", data);
}

export async function quizAxiosFunction(data) {
  console.log("quizAxiosFunction called");
  return await api.post("/quizzes", data);
}

export async function announcementAxiosFunction(data) {
  console.log("announcementAxiosFunction called");
  return await api.post("/announcements", data);
}

export async function deleteAnnouncementAxiosFunction(data) {
  console.log("deleteAnnouncementAxiosFunction called");
  return await api.delete("/announcements", { data: data });
}

export async function classSectionAxiosFunction(data) {
  console.log("classSectionAxiosFunction called");
  return await api.post("/class_sections", data);
}

export async function removeClassSectionAxiosFunction(data) {
  console.log("removeClassSectionAxiosFunction called");
  return await api.delete("/class_sections", { data: data });
}

export async function subjectAxiosFunction(data) {
  console.log("subjectAxiosFunction called");
  return await api.post("/subjects", data);
}

export async function removeSubjectAxiosFunction(data) {
  console.log("removeSubjectAxiosFunction called");
  return await api.delete("/subjects", { data: data });
}

export async function gradingPolicyAxiosFunction(data) {
  console.log("gradingPolicyAxiosFunction called");
  return await api.put("/grading_policy", data);
}

export async function regradeAxiosFunction(data) {
  console.log("regradeAxiosFunction called");
  return await api.post("/regrades", data);
}

export async function regradeDecisionAxiosFunction(data) {
  console.log("regradeDecisionAxiosFunction called");
  return await api.put("/regrades", data);
}

export async function approveTeacherAxiosFunction(data) {
  console.log("approveTeacherAxiosFunction called");
  return await api.put("/teachers/approve", data);
}

export async function declineTeacherAxiosFunction(data) {
  console.log("declineTeacherAxiosFunction called");
  return await api.delete("/teachers/decline", { data: data });
}

// ---------- GET lists ----------
export async function getAnnouncementsAxiosFunction() {
  console.log("getAnnouncementsAxiosFunction called");
  return await api.get("/announcements");
}

export async function getClassSectionsAxiosFunction() {
  console.log("getClassSectionsAxiosFunction called");
  return await api.get("/class_sections");
}

export async function getSubjectsAxiosFunction() {
  console.log("getSubjectsAxiosFunction called");
  return await api.get("/subjects");
}

export async function getPendingTeachersAxiosFunction() {
  console.log("getPendingTeachersAxiosFunction called");
  return await api.get("/teachers/pending");
}

export async function getGradingPolicyAxiosFunction() {
  console.log("getGradingPolicyAxiosFunction called");
  return await api.get("/grading_policy");
}

export async function getQuizzesAxiosFunction() {
  console.log("getQuizzesAxiosFunction called");
  return await api.get("/quizzes");
}

export async function getStudentsAxiosFunction() {
  console.log("getStudentsAxiosFunction called");
  return await api.get("/students");
}

export async function getTeacherRegradesAxiosFunction() {
  console.log("getTeacherRegradesAxiosFunction called");
  return await api.get("/regrades/teacher");
}

export async function getStudentRegradesAxiosFunction() {
  console.log("getStudentRegradesAxiosFunction called");
  return await api.get("/regrades/student");
}

export async function getMyGradesAxiosFunction() {
  console.log("getMyGradesAxiosFunction called");
  return await api.get("/grades");
}

export async function facultyLoginAxiosFunction(data){
  console.log("facultyLoginAxiosFunction called");
  return await api.post("/login", data);
}

export async function adminLoginAxiosFunction(data){
  console.log("adminLoginAxiosFunction called");
  return await api.post("/login/admin", data);
}

export async function studentLoginAxiosFunction(data){
  console.log("studentLoginAxiosFunction called");
  return await api.post("/login/student", data);
}
