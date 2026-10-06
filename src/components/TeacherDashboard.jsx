import { Link } from "react-router-dom";
import Dashboard from "./teacher/Dashboard.jsx";
import Quizzes from "./teacher/Quizzes.jsx";
import Upload from "./teacher/Upload.jsx";
import Review from "./teacher/Review.jsx";
import Results from "./teacher/Results.jsx";
import Batch from "./teacher/Batch.jsx";
import Students from "./teacher/Students.jsx";
import Regrade from "./teacher/Regrade.jsx";

/* Teacher layout: same sidebar pattern as the admin side. The router passes
   the `section` prop (e.g. /teacher/results passes "results"); the sidebar
   highlights it with `active` and the matching section renders below. */
export default function TeacherDashboard({ section }) {
  let content;
  if (section === "dashboard") content = <Dashboard />;
  else if (section === "quizzes") content = <Quizzes />;
  else if (section === "upload-scan") content = <Upload />;
  else if (section === "review") content = <Review />;
  else if (section === "results") content = <Results />;
  else if (section === "batch") content = <Batch />;
  else if (section === "students") content = <Students />;
  else content = <Regrade />;

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin side */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <Link to="/" className="navbar-brand mb-4">GradeScan</Link>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <Link to="/teacher/dashboard" className={"nav-link text-start w-100" + (section === "dashboard" ? " active" : "")}>
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/quizzes" className={"nav-link text-start w-100" + (section === "quizzes" ? " active" : "")}>
              <i className="bi bi-journal-text"></i> Quizzes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/upload-scan" className={"nav-link text-start w-100" + (section === "upload-scan" ? " active" : "")}>
              <i className="bi bi-cloud-arrow-up"></i> Upload &amp; Scan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/review" className={"nav-link text-start w-100" + (section === "review" ? " active" : "")}>
              <i className="bi bi-eye"></i> Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/results" className={"nav-link text-start w-100" + (section === "results" ? " active" : "")}>
              <i className="bi bi-clipboard-data"></i> Results
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/batch" className={"nav-link text-start w-100" + (section === "batch" ? " active" : "")}>
              <i className="bi bi-folder2-open"></i> Batch
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/students" className={"nav-link text-start w-100" + (section === "students" ? " active" : "")}>
              <i className="bi bi-people"></i> Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/regrade" className={"nav-link text-start w-100" + (section === "regrade" ? " active" : "")}>
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Requests
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