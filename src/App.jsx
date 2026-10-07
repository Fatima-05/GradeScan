import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Auth from "./components/Auth.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import TeacherDashboard from "./components/TeacherDashboard.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";

/* One path per page and per dashboard menu option. Each dashboard gets a
   prop telling it which section to show, so no <Outlet> is needed. The *
   route catches unknown URLs and just shows the landing page. */
const router = createBrowserRouter([
  // Public pages
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Auth form="faculty-login" /> },
  { path: "/signup", element: <Auth form="faculty-signup" /> },
  { path: "/login/admin", element: <Auth form="admin-login" /> },
  { path: "/login/student", element: <Auth form="student-login" /> },
  { path: "/signup/student", element: <Auth form="student-signup" /> },

  // Admin menu options
  { path: "/admin", element: <AdminDashboard section="overview" /> },
  { path: "/admin/overview", element: <AdminDashboard section="overview" /> },
  { path: "/admin/pending-teachers", element: <AdminDashboard section="pending-teachers" /> },
  { path: "/admin/announcements", element: <AdminDashboard section="announcements" /> },
  { path: "/admin/classes-subjects", element: <AdminDashboard section="classes-subjects" /> },
  { path: "/admin/grading-policy", element: <AdminDashboard section="grading-policy" /> },

  // Teacher menu options
  { path: "/teacher", element: <TeacherDashboard section="dashboard" /> },
  { path: "/teacher/dashboard", element: <TeacherDashboard section="dashboard" /> },
  { path: "/teacher/quizzes", element: <TeacherDashboard section="quizzes" /> },
  { path: "/teacher/upload-scan", element: <TeacherDashboard section="upload-scan" /> },
  { path: "/teacher/review", element: <TeacherDashboard section="review" /> },
  { path: "/teacher/results", element: <TeacherDashboard section="results" /> },
  { path: "/teacher/batch", element: <TeacherDashboard section="batch" /> },
  { path: "/teacher/students", element: <TeacherDashboard section="students" /> },
  { path: "/teacher/regrade", element: <TeacherDashboard section="regrade" /> },

  // Student menu options
  { path: "/student", element: <StudentDashboard section="grades" /> },
  { path: "/student/grades", element: <StudentDashboard section="grades" /> },
  { path: "/student/regrade", element: <StudentDashboard section="regrade" /> },
  { path: "/student/announcements", element: <StudentDashboard section="announcements" /> },

  // Unknown URLs land on the landing page instead of a blank screen
  { path: "*", element: <Landing /> },
]);

export default router;