import { Link } from "react-router-dom";
import Overview from "./admin/Overview.jsx";
import PendingTeachers from "./admin/PendingTeachers.jsx";
import Announcements from "./admin/Announcements.jsx";
import ClassesSubjects from "./admin/ClassesSubjects.jsx";
import GradingPolicy from "./admin/GradingPolicy.jsx";

/* Admin layout: espresso sidebar + one section at a time. The router passes
   a `section` prop telling which one to render (e.g. /admin/teachers passes
   "teachers"); the sidebar highlights it with the Bootstrap `active` class.
   No state, no <Outlet> — just a Link-driven sidebar and a section picker. */
export default function AdminDashboard({ section }) {
  let content;
  if (section === "overview") content = <Overview />;
  else if (section === "pending-teachers") content = <PendingTeachers />;
  else if (section === "announcements") content = <Announcements />;
  else if (section === "classes-subjects") content = <ClassesSubjects />;
  else content = <GradingPolicy />;

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: fixed espresso column, same for every section */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <Link to="/" className="navbar-brand mb-4">GradeScan</Link>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <Link to="/admin/overview" className={"nav-link text-start w-100" + (section === "overview" ? " active" : "")}>
              <i className="bi bi-speedometer2"></i> Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/pending-teachers" className={"nav-link text-start w-100" + (section === "pending-teachers" ? " active" : "")}>
              <i className="bi bi-people"></i> Pending Teachers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/announcements" className={"nav-link text-start w-100" + (section === "announcements" ? " active" : "")}>
              <i className="bi bi-megaphone"></i> Announcements
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/classes-subjects" className={"nav-link text-start w-100" + (section === "classes-subjects" ? " active" : "")}>
              <i className="bi bi-mortarboard"></i> Classes &amp; Subjects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/grading-policy" className={"nav-link text-start w-100" + (section === "grading-policy" ? " active" : "")}>
              <i className="bi bi-sliders"></i> Grading Policy
            </Link>
          </li>
        </ul>
        {/* Log out: routed back to the login page */}
        <div className="mt-auto">
          <Link to="/login" className="nav-link text-white-50">Log out</Link>
        </div>
      </aside>

      {/* The section chosen by the current route */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {content}
      </main>
    </div>
  );
}