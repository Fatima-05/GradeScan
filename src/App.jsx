/* App: the root component. Interfaces only — no routing (Phase 2), so one
   page renders at a time. To switch pages, uncomment the page you want in
   BOTH places below (the import and the render) and comment out the others. */
import Landing from "./components/Landing.jsx";
// import Auth from "./components/Auth.jsx";
// import AdminDashboard from "./components/AdminDashboard.jsx";
// import StudentDashboard from "./components/StudentDashboard.jsx";
import TeacherDashboard from "./components/TeacherDashboard.jsx";

export default function App() {
  return (
    <>
      {/* The visible page — switch it together with the imports above */}
      {/* <Landing /> */}
      {/* <Auth /> */}
      {/* <AdminDashboard /> */}
      {/* <StudentDashboard /> */}
      <TeacherDashboard />
    </>
  );
}