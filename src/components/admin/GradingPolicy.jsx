/* Grading Policy: editable defaults (DB later). Uses defaultValue so inputs are not controlled. */
export default function GradingPolicy() {
  return (
    <>
      <h2 className="mb-4">Grading Policy Defaults</h2>
      <div className="card">
        <div className="card-body">
          {/* Fields: Bootstrap grid so the card fills the content area instead of a narrow column */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label">Negative marking per wrong answer</label>
              <input className="form-control" type="number" step="0.01" defaultValue="0.25" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Passing percentage</label>
              <input className="form-control" type="number" defaultValue="40" />
            </div>
          </div>
          <div className="mb-4">
            {/* Label for each grade, one number input below it */}
            <label className="form-label">Grade boundaries — minimum % for each grade</label>
            <div className="row row-cols-lg-3 row-cols-md-2 g-3">
              {/* A */}
              <div className="col">
                <label className="form-label mb-1 small">A</label>
                <input className="form-control" type="number" defaultValue="90" />
              </div>
              {/* A- */}
              <div className="col">
                <label className="form-label mb-1 small">A-</label>
                <input className="form-control" type="number" defaultValue="85" />
              </div>
              {/* B+ */}
              <div className="col">
                <label className="form-label mb-1 small">B+</label>
                <input className="form-control" type="number" defaultValue="80" />
              </div>
              {/* B */}
              <div className="col">
                <label className="form-label mb-1 small">B</label>
                <input className="form-control" type="number" defaultValue="75" />
              </div>
              {/* B- */}
              <div className="col">
                <label className="form-label mb-1 small">B-</label>
                <input className="form-control" type="number" defaultValue="70" />
              </div>
              {/* C+ */}
              <div className="col">
                <label className="form-label mb-1 small">C+</label>
                <input className="form-control" type="number" defaultValue="65" />
              </div>
              {/* C */}
              <div className="col">
                <label className="form-label mb-1 small">C</label>
                <input className="form-control" type="number" defaultValue="60" />
              </div>
              {/* C- */}
              <div className="col">
                <label className="form-label mb-1 small">C-</label>
                <input className="form-control" type="number" defaultValue="55" />
              </div>
              {/* D */}
              <div className="col">
                <label className="form-label mb-1 small">D</label>
                <input className="form-control" type="number" defaultValue="50" />
              </div>
            </div>
            <small className="text-muted">A score below D is an F.</small>
          </div>
          {/* Button: Bootstrap Button component*/}
          <button className="btn btn-warning">Save defaults</button>
        </div>
      </div>
    </>
  );
}