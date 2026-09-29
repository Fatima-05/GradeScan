/* Admin Overview: welcome + quick stat cards. Numbers are hard-coded (DB in a later phase). */
export default function Overview() {
  return (
    <>
      <h2 className="mb-4">Overview</h2>
      {/* Stat cards: Bootstrap grid (row/col-md-3) + Card component */}
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">3</h1>
              <p className="card-title mb-0">Classes</p>
              <small className="text-muted">seeded list</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">3</h1>
              <p className="card-title mb-0">Subjects</p>
              <small className="text-muted">seeded list</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">3</h1>
              <p className="card-title mb-0">Pending teachers</p>
              <small className="text-muted">awaiting review</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">2</h1>
              <p className="card-title mb-0">Announcements</p>
              <small className="text-muted">posted</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}