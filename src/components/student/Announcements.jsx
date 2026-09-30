/* Announcements (student side): read-only cards, posted by teachers. */
export default function Announcements() {
  return (
    <>
      <h2 className="mb-1">Announcements</h2>
      <p className="text-muted mb-4">Read-only — posted by your teachers.</p>

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
                22 Sep 2026 · <span className="badge bg-secondary">Everyone</span>
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
                20 Sep 2026 · <span className="badge bg-secondary">Students</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}