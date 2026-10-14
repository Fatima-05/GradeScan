import { Link } from "react-router-dom";
import StudentGrades from "./student/Grades.jsx";
import StudentRegrade from "./student/Regrade.jsx";
import StudentAnnouncements from "./student/Announcements.jsx";

/* Student dashboard (viewed as Ayesha Khan): espresso sidebar like the other
   dashboards. The router passes the `section` prop (e.g. /student/grades
   passes "grades"), the sidebar highlights it, and the view renders below. */
export default function StudentDashboard({ section }) {
  let content;
  if (section === "grades") content = <StudentGrades />;
  else if (section === "regrade") content = <StudentRegrade />;
  else content = <StudentAnnouncements />;

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin and teacher sides */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <Link to="/" className="navbar-brand mb-4">GradeScan</Link>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <Link to="/student/grades" className={"nav-link text-start w-100" + (section === "grades" ? " active" : "")}>
              <i className="bi bi-journal-check"></i> My Grades
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student/regrade" className={"nav-link text-start w-100" + (section === "regrade" ? " active" : "")}>
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Request
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student/announcements" className={"nav-link text-start w-100" + (section === "announcements" ? " active" : "")}>
              <i className="bi bi-megaphone"></i> Announcements
            </Link>
          </li>
        </ul>
        {/* Log out: routed back to the login page */}
        <div className="mt-auto">
          <Link to="/login" className="nav-link text-white-50">Log out</Link>
        </div>
      </aside>

      {/* The view chosen by the current route */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {content}
      </main>
    </div>
  );
}