import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Auth from "./components/Auth.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import TeacherDashboard from "./components/TeacherDashboard.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

/* One path per page and per dashboard menu option. Each dashboard gets a
   prop telling it which section to show, so no <Outlet> is needed. Dashboard
   routes are wrapped in ProtectedRoute so a direct visit without a token
   goes back to /login. The * route catches unknown URLs. */
const router = createBrowserRouter([
  // Public pages
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Auth form="faculty-login" /> },
  { path: "/signup", element: <Auth form="faculty-signup" /> },
  { path: "/login/admin", element: <Auth form="admin-login" /> },
  { path: "/login/student", element: <Auth form="student-login" /> },
  { path: "/signup/student", element: <Auth form="student-signup" /> },

  // Admin menu options
  { path: "/admin", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="overview" /></ProtectedRoute> },
  { path: "/admin/overview", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="overview" /></ProtectedRoute> },
  { path: "/admin/pending-teachers", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="pending-teachers" /></ProtectedRoute> },
  { path: "/admin/announcements", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="announcements" /></ProtectedRoute> },
  { path: "/admin/classes-subjects", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="classes-subjects" /></ProtectedRoute> },
  { path: "/admin/grading-policy", element: <ProtectedRoute roles={["admin"]}><AdminDashboard section="grading-policy" /></ProtectedRoute> },

  // Teacher menu options
  { path: "/teacher", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="dashboard" /></ProtectedRoute> },
  { path: "/teacher/dashboard", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="dashboard" /></ProtectedRoute> },
  { path: "/teacher/quizzes", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="quizzes" /></ProtectedRoute> },
  { path: "/teacher/upload-scan", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="upload-scan" /></ProtectedRoute> },
  { path: "/teacher/review", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="review" /></ProtectedRoute> },
  { path: "/teacher/results", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="results" /></ProtectedRoute> },
  { path: "/teacher/batch", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="batch" /></ProtectedRoute> },
  { path: "/teacher/students", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="students" /></ProtectedRoute> },
  { path: "/teacher/regrade", element: <ProtectedRoute roles={["faculty"]}><TeacherDashboard section="regrade" /></ProtectedRoute> },

  // Student menu options
  { path: "/student", element: <ProtectedRoute roles={["student"]}><StudentDashboard section="grades" /></ProtectedRoute> },
  { path: "/student/grades", element: <ProtectedRoute roles={["student"]}><StudentDashboard section="grades" /></ProtectedRoute> },
  { path: "/student/regrade", element: <ProtectedRoute roles={["student"]}><StudentDashboard section="regrade" /></ProtectedRoute> },
  { path: "/student/announcements", element: <ProtectedRoute roles={["student"]}><StudentDashboard section="announcements" /></ProtectedRoute> },

  // Unknown URLs land on the landing page instead of a blank screen
  { path: "*", element: <Landing /> },
]);

export default router;
