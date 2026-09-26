import { useState } from "react";
import { Link } from "react-router-dom";
import Overview from "./admin/Overview.jsx";
import PendingTeachers from "./admin/PendingTeachers.jsx";
import Announcements from "./admin/Announcements.jsx";
import ClassesSubjects from "./admin/ClassesSubjects.jsx";
import GradingPolicy from "./admin/GradingPolicy.jsx";

/* Admin layout: sidebar menu (Bootstrap nav) + content area. useState picks which section shows. */
export default function AdminDashboard() {
  const [view, setView] = useState("overview");

  const menu = [
    { id: "overview", label: "Overview", icon: "bi-speedometer2" },
    { id: "teachers", label: "Pending Teachers", icon: "bi-people" },
    { id: "announcements", label: "Announcements", icon: "bi-megaphone" },
    { id: "classes", label: "Classes & Subjects", icon: "bi-mortarboard" },
    { id: "policy", label: "Grading Policy", icon: "bi-sliders" },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: Bootstrap flex column + nav. Pinned to exactly one viewport,
          same for every section */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          {menu.map((m) => (
            <li className="nav-item" key={m.id}>
              <button
                type="button"
                className={"nav-link w-100 text-start " + (view === m.id ? "active" : "")}
                onClick={() => setView(m.id)}
              >
                <i className={"bi " + m.icon}></i> {m.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Log out: react-router Link, pinned to the bottom with mt-auto */}
        <div className="mt-auto">
          <Link to="/" className="nav-link text-white-50">Log out</Link>
        </div>
      </aside>

      {/* Main content: shows one section at a time; scrolls inside the column
          if a section is taller than the screen instead of the page */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {view === "overview" && <Overview />}
        {view === "teachers" && <PendingTeachers />}
        {view === "announcements" && <Announcements />}
        {view === "classes" && <ClassesSubjects />}
        {view === "policy" && <GradingPolicy />}
      </main>
    </div>
  );
}