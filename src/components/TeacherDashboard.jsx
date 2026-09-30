import Dashboard from "./teacher/Dashboard.jsx";
import Quizzes from "./teacher/Quizzes.jsx";
import Upload from "./teacher/Upload.jsx";
import Review from "./teacher/Review.jsx";
import Results from "./teacher/Results.jsx";
import Batch from "./teacher/Batch.jsx";
import Students from "./teacher/Students.jsx";
import Regrade from "./teacher/Regrade.jsx";

/* Teacher layout: same sidebar pattern as the admin side. One section at a
   time — all are imported above (unused ones are dropped), so switch by
   editing just the render lines below. No state, UI only. */
export default function TeacherDashboard() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin side */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <button type="button" className="nav-link active w-100 text-start">
              <i className="bi bi-speedometer2"></i> Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-journal-text"></i> Quizzes
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-cloud-arrow-up"></i> Upload &amp; Scan
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-eye"></i> Review
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-clipboard-data"></i> Results
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-folder2-open"></i> Batch
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-people"></i> Students
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Requests
            </button>
          </li>
        </ul>
        {/* Log out: placeholder — switch the page in App.jsx */}
        <div className="mt-auto">
          <a href="#/" className="nav-link text-white-50">Log out</a>
        </div>
      </aside>

      {/* The visible section — uncomment one, keep the rest commented */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {/* <Dashboard /> */}
        {/* <Quizzes /> */}
        {/* <Upload /> */}
        {/* <Review /> */}
        {/* <Results /> */}
        {/* <Batch /> */}
        {/* <Students /> */}
        {/* <Regrade /> */}
      </main>
    </div>
  );
}