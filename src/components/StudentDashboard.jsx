import StudentGrades from "./student/Grades.jsx";
import StudentRegrade from "./student/Regrade.jsx";
import StudentAnnouncements from "./student/Announcements.jsx";

/* Student dashboard (viewed as Ayesha Khan): espresso sidebar like the other
   dashboards, one view at a time. All views are imported above (unused ones
   are dropped), so switch by editing just the render lines. No state, UI only. */
export default function StudentDashboard() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin and teacher sides */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <button type="button" className="nav-link active w-100 text-start">
              <i className="bi bi-journal-check"></i> My Grades
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Request
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-megaphone"></i> Announcements
            </button>
          </li>
        </ul>
        {/* Log out: placeholder — switch the page in App.jsx */}
        <div className="mt-auto">
          <a href="#/" className="nav-link text-white-50">Log out</a>
        </div>
      </aside>

      {/* The visible view — uncomment one, keep the rest commented */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {/* <StudentGrades /> */}
        {/* <StudentRegrade /> */}
        {/* <StudentAnnouncements /> */}
      </main>
    </div>
  );
}