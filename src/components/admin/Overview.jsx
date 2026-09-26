/* Admin Overview: welcome + quick stat cards. Numbers are hard-coded (DB in a later phase). */
export default function Overview() {
  const stats = [
    { label: "Classes", value: 3, hint: "seeded list" },
    { label: "Subjects", value: 3, hint: "seeded list" },
    { label: "Pending teachers", value: 3, hint: "awaiting review" },
    { label: "Announcements", value: 2, hint: "posted" },
  ];

  return (
    <>
      <h2 className="mb-4">Overview</h2>
      {/* Stat cards: Bootstrap grid (row/col-md-3) + Card component */}
      <div className="row g-4">
        {stats.map((s) => (
          <div className="col-md-3" key={s.label}>
            <div className="card text-center">
              <div className="card-body">
                <h1 className="display-6 mb-1">{s.value}</h1>
                <p className="card-title mb-0">{s.label}</p>
                <small className="text-muted">{s.hint}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}