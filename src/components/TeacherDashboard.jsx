import { useState } from "react";
import Dashboard from "./teacher/Dashboard.jsx";
import Quizzes from "./teacher/Quizzes.jsx";
import Upload from "./teacher/Upload.jsx";
import Review from "./teacher/Review.jsx";
import Results from "./teacher/Results.jsx";
import Batch from "./teacher/Batch.jsx";
import Students from "./teacher/Students.jsx";
import Regrade from "./teacher/Regrade.jsx";

/* Teacher layout: same sidebar pattern as the admin side. useState picks
   which section shows; one view at a time. */
export default function TeacherDashboard() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin side */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          {/* Dashboard */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "dashboard" ? "active" : "")} onClick={() => setView("dashboard")}>
              <i className="bi bi-speedometer2"></i> Dashboard
            </button>
          </li>
          {/* Quizzes */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "quizzes" ? "active" : "")} onClick={() => setView("quizzes")}>
              <i className="bi bi-journal-text"></i> Quizzes
            </button>
          </li>
          {/* Upload & Scan */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "upload" ? "active" : "")} onClick={() => setView("upload")}>
              <i className="bi bi-cloud-arrow-up"></i> Upload &amp; Scan
            </button>
          </li>
          {/* Review */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "review" ? "active" : "")} onClick={() => setView("review")}>
              <i className="bi bi-eye"></i> Review
            </button>
          </li>
          {/* Results */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "results" ? "active" : "")} onClick={() => setView("results")}>
              <i className="bi bi-clipboard-data"></i> Results
            </button>
          </li>
          {/* Batch */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "batch" ? "active" : "")} onClick={() => setView("batch")}>
              <i className="bi bi-folder2-open"></i> Batch
            </button>
          </li>
          {/* Students */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "students" ? "active" : "")} onClick={() => setView("students")}>
              <i className="bi bi-people"></i> Students
            </button>
          </li>
          {/* Regrade Requests */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "regrade" ? "active" : "")} onClick={() => setView("regrade")}>
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Requests
            </button>
          </li>
        </ul>
        {/* Log out: placeholder — switch the page in main.jsx */}
        <div className="mt-auto">
          <a href="#/" className="nav-link text-white-50">Log out</a>
        </div>
      </aside>

      {/* Main content: one section at a time; scrolls if taller than the screen */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {view === "dashboard" && <Dashboard />}
        {view === "quizzes" && <Quizzes />}
        {view === "upload" && <Upload />}
        {view === "review" && <Review />}
        {view === "results" && <Results />}
        {view === "batch" && <Batch />}
        {view === "students" && <Students />}
        {view === "regrade" && <Regrade />}
      </main>
    </div>
  );
}