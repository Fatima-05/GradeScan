/* App: the root component. Interfaces only — no routing (Phase 2), so one
   page renders at a time. All pages are imported above (unused imports are
   dropped by the bundler), so switching is just ONE line: uncomment the
   page you want to show below and comment out the others. */
import Landing from "./components/Landing.jsx";
import Auth from "./components/Auth.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import TeacherDashboard from "./components/TeacherDashboard.jsx";

export default function App() {
  return (
    <>
      {/* The visible page — uncomment one, keep the rest commented */}
      {/* <Landing /> */}
      {/* <Auth /> */}
      {/* <AdminDashboard /> */}
      {/* <StudentDashboard /> */}
      <TeacherDashboard />
    </>
  );
}