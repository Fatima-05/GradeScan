/* Teacher Dashboard: welcome + quick stats + read-only announcements. Numbers are hard-coded. */
export default function Dashboard() {
  return (
    <>
      <h2 className="mb-1">Dashboard</h2>
      <p className="text-muted mb-4">Logged in as faculty · Pending approval for full access.</p>

      {/* Stat cards: Bootstrap grid (row/col-md-3) + Card component */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">2</h1>
              <p className="card-title mb-0">My quizzes</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">3</h1>
              <p className="card-title mb-0">Sheets graded</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">3</h1>
              <p className="card-title mb-0">Students</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">2</h1>
              <p className="card-title mb-0">Pending regrades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements: read-only, same card style as the admin side */}
      <h4 className="mb-3">Announcements</h4>
      <div className="row g-4">
        {/* Announcement 1 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title mb-1">Midterm schedule is now live.</h6>
              <small className="text-muted">
                25 Sep 2026 · <span className="badge bg-secondary">Everyone</span>
              </small>
            </div>
          </div>
        </div>
        {/* Announcement 2 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title mb-1">GradeScan maintenance Sunday 2 AM.</h6>
              <small className="text-muted">
                22 Sep 2026 · <span className="badge bg-secondary">Teachers</span>
              </small>
            </div>
          </div>
        </div>
        {/* Announcement 3 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title mb-1">Submit quiz sheets before Thursday.</h6>
              <small className="text-muted">
                20 Sep 2026 · <span className="badge bg-secondary">Everyone</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}