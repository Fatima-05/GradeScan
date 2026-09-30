/* Batch: process a whole folder of scans at once, auto-create new students,
   and export CSV with an average/high/low summary row. Static UI — the
   summary numbers are hard-coded from the seeded results. */
export default function Batch() {
  return (
    <>
      <h2 className="mb-1">Batch Processing</h2>
      <p className="text-muted mb-4">
        Grade a folder of scans at once. New Reg#s are auto-added to the student roster.
      </p>

      <div className="card mb-4">
        <div className="card-body">
          {/* Folder: Bootstrap form-control (webkitdirectory picks a folder) */}
          <label className="form-label">Folder of sheet photos</label>
          <input className="form-control mb-3" type="file" webkitdirectory="" />
          <button type="button" className="btn btn-warning px-4">Process folder</button>
        </div>
      </div>

      {/* Class summary: average/high/low in Bootstrap grid */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">87%</h1>
              <p className="card-title mb-0">Class average</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">94%</h1>
              <p className="card-title mb-0">Highest</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">75%</h1>
              <p className="card-title mb-0">Lowest</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">3 sheets graded</h6>
              <small className="text-muted">
                1 new student auto-created: <strong>Ansa Irshad (FA24-BSE-102)</strong>
              </small>
            </div>
            {/* CSV export: placeholder */}
            <a href="#" className="btn btn-warning">Export CSV</a>
          </div>
        </div>
      </div>

      {/* Letter grade references the Grading Policy boundaries */}
      <small className="text-muted">Grades use the admin Grading Policy defaults.</small>
    </>
  );
}