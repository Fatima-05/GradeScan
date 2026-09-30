import Overview from "./admin/Overview.jsx";
import PendingTeachers from "./admin/PendingTeachers.jsx";
import Announcements from "./admin/Announcements.jsx";
import ClassesSubjects from "./admin/ClassesSubjects.jsx";
import GradingPolicy from "./admin/GradingPolicy.jsx";

/* Admin layout: sidebar menu (Bootstrap nav, visual only) + one section at a
   time. All sections are imported above (unused ones are dropped), so switch
   by editing just the render lines below. No state, UI only. */
export default function AdminDashboard() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar: fixed espresso column, same for every section */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          <li className="nav-item">
            <button type="button" className="nav-link active w-100 text-start">
              <i className="bi bi-speedometer2"></i> Overview
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-people"></i> Pending Teachers
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-megaphone"></i> Announcements
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-mortarboard"></i> Classes &amp; Subjects
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link w-100 text-start">
              <i className="bi bi-sliders"></i> Grading Policy
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
        {/* <Overview /> */}
        {/* <PendingTeachers /> */}
        {/* <Announcements /> */}
        {/* <ClassesSubjects /> */}
        {/* <GradingPolicy /> */}
      </main>
    </div>
  );
}