/* Announcements: compose box + static list (DB later). Post/delete are visual only. */
const announcements = [
  { text: "Midterm schedule is now live.", date: "25 Sep 2026", audience: "Everyone" },
  { text: "GradeScan maintenance Sunday 2 AM.", date: "22 Sep 2026", audience: "Teachers" },
];

export default function Announcements() {
  return (
    <>
      <h2 className="mb-4">Announcements</h2>
      {/* Compose box: Bootstrap form-control + form-select + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <textarea className="form-control mb-2" rows="3" placeholder="Write a notice…"></textarea>
          <div className="d-flex gap-2">
            <select className="form-select" defaultValue="everyone">
              <option value="everyone">Send to everyone</option>
              <option value="teachers">Teachers only</option>
              <option value="students">Students only</option>
            </select>
            <button className="btn btn-warning px-4">Post</button>
          </div>
        </div>
      </div>
      {/* Past announcements: Bootstrap grid + Card component */}
      <div className="row g-4">
        {announcements.map((a, i) => (
          <div className="col-md-6" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title">{a.text}</h6>
                  <a href="#del" className="text-muted">delete</a>
                </div>
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