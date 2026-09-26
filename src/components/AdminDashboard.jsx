import { Link } from "react-router-dom";

/* Hard-coded data: static arrays for now, will come from a database in a later phase */
const pendingTeachers = [
  { name: "Ali Raza", email: "ali.raza@school.edu", subject: "Physics" },
  { name: "Sara Ahmed", email: "sara.ahmed@school.edu", subject: "AI" },
  { name: "Hamza Khan", email: "hamza.khan@school.edu", subject: "Operating Systems" },
];

const announcements = [
  { text: "Midterm schedule is now live.", date: "25 Sep 2026" },
  { text: "GradeScan maintenance Sunday 2 AM.", date: "22 Sep 2026" },
];

const classes = ["BSE-4A", "BSE-4B", "BSCS-3A"];
const subjects = ["AI", "Operating Systems", "Databases"];

/* Admin dashboard: four static form/UI blocks, almost entirely Bootstrap. Buttons are visual only this phase. */
export default function AdminDashboard() {
  return (
    <div className="container py-4">
      {/* Header: flex utilities + react-router Link as the log out button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Admin Dashboard</h2>
        <Link to="/" className="btn btn-outline-warning">Log out</Link>
      </div>

      {/* Admin cards: Bootstrap grid (row/col-lg-6) + Card component */}
      <div className="row g-4">
        {/* Admin card 1 (Pending Teachers): Card component + Bootstrap lists */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Pending Teacher Signups</h5>
              {pendingTeachers.map((t) => (
                <div className="border rounded p-3 mb-2" key={t.email}>
                  <h6 className="mb-0">{t.name}</h6>
                  <p className="text-muted small mb-2">{t.email} · {t.subject}</p>
                  <button className="btn btn-warning btn-sm">Approve</button>{" "}
                  <button className="btn btn-outline-warning btn-sm">Reject</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin card 2 (Announcements): Bootstrap form-control + Card component */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Post an Announcement</h5>
              <textarea className="form-control mb-2" rows="2" placeholder="Write a notice…"></textarea>
              <button className="btn btn-warning">Post</button>
              <div className="mt-4">
                {announcements.map((a, i) => (
                  <div className="border rounded p-3 mb-2" key={i}>
                    <p className="mb-1">{a.text}</p>
                    <small className="text-muted">{a.date} · <a href="#delete">delete</a></small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Admin card 3 (Classes/Subjects): Bootstrap form-control + Card component */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Classes</h5>
              <div className="d-flex gap-2 mb-3">
                <input className="form-control" type="text" placeholder="Add class" />
                <button className="btn btn-warning">Add</button>
              </div>
              {classes.map((c) => (
                <p className="mb-1" key={c}>
                  {c} <a className="text-muted" href="#remove">remove</a>
                </p>
              ))}
              <hr />
              <h5 className="card-title">Subjects</h5>
              <div className="d-flex gap-2 mb-3">
                <input className="form-control" type="text" placeholder="Add subject" />
                <button className="btn btn-warning">Add</button>
              </div>
              {subjects.map((s) => (
                <p className="mb-1" key={s}>
                  {s} <a className="text-muted" href="#remove">remove</a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Admin card 4 (Grading Policy): Bootstrap form-control + Card component */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Grading Policy Defaults</h5>
              <div className="mb-3">
                <label className="form-label">Negative marking per wrong answer</label>
                <input className="form-control" type="number" defaultValue="0.25" />
              </div>
              <div className="mb-3">
                <label className="form-label">Passing percentage</label>
                <input className="form-control" type="number" defaultValue="40" />
              </div>
              <div className="mb-3">
                <label className="form-label">Grade A boundary (%)</label>
                <input className="form-control" type="number" defaultValue="85" />
              </div>
              <div className="mb-3">
                <label className="form-label">Grade B boundary (%)</label>
                <input className="form-control" type="number" defaultValue="70" />
              </div>
              <button className="btn btn-warning">Save defaults</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}