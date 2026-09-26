/* Grading Policy: editable defaults (DB later). Uses defaultValue so inputs are not controlled. */
const grades = [
  { label: "A", threshold: 90 },
  { label: "A-", threshold: 85 },
  { label: "B+", threshold: 80 },
  { label: "B", threshold: 75 },
  { label: "B-", threshold: 70 },
  { label: "C+", threshold: 65 },
  { label: "C", threshold: 60 },
  { label: "C-", threshold: 55 },
  { label: "D", threshold: 50 },
];

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
              {grades.map((g) => (
                <div className="col" key={g.label}>
                  <label className="form-label mb-1 small">{g.label}</label>
                  <input className="form-control" type="number" defaultValue={g.threshold} />
                </div>
              ))}
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