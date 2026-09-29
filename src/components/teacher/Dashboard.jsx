import { announcements } from "./data.js";

/* Teacher Dashboard: welcome + quick stats + read-only announcements. */
export default function Dashboard() {
  const stats = [
    { label: "My quizzes", value: 2 },
    { label: "Sheets graded", value: 3 },
    { label: "Students", value: 3 },
    { label: "Pending regrades", value: 2 },
  ];

  return (
    <>
      <h2 className="mb-1">Dashboard</h2>
      <p className="text-muted mb-4">Logged in as faculty · Pending approval for full access.</p>

      {/* Stat cards: Bootstrap grid (row/col-md-3) + Card component */}
      <div className="row g-4 mb-4">
        {stats.map((s) => (
          <div className="col-md-3" key={s.label}>
            <div className="card text-center">
              <div className="card-body">
                <h1 className="display-6 mb-1">{s.value}</h1>
                <p className="card-title mb-0">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Announcements: read-only, same card style as the admin side */}
      <h4 className="mb-3">Announcements</h4>
      <div className="row g-4">
        {announcements.map((a, i) => (
          <div className="col-md-6" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title mb-1">{a.text}</h6>
                <small className="text-muted">
                  {a.date} · <span className="badge bg-secondary">{a.audience}</span>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}