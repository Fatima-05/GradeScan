/* Regrade Request (student side): a form to flag a question, plus the status
   of past requests. Static UI — nothing submits, DB comes later. */
export default function Regrade() {
  return (
    <>
      <h2 className="mb-1">Regrade Request</h2>
      <p className="text-muted mb-4">Ask your teacher to re-check an answer.</p>

      {/* Request form: Bootstrap form-select + form-control + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Quiz</label>
              <select className="form-select" defaultValue="AI Quiz (Set-C)">
                <option>AI Quiz (Set-C)</option>
                <option>OS Quiz (Set-A)</option>
                <option>DS Quiz (Set-A)</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Question number</label>
              <input className="form-control" type="text" placeholder="e.g. 15" />
            </div>
            <div className="col-12">
              <label className="form-label">Reason</label>
              <textarea className="form-control" rows="3" placeholder="Explain what went wrong…"></textarea>
            </div>
          </div>
          {/* Button: Bootstrap Button component — visual only */}
          <button type="button" className="btn btn-warning mt-3 px-4">Send request</button>
        </div>
      </div>

      {/* Request status: the teacher approves or rejects later */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Request status</h4>
        <span className="badge bg-secondary">2 total</span>
      </div>
      {/* Newest request — still pending */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-C) — Q15</h6>
              <p className="mb-1 text-muted">I think the scanner missed the bubble.</p>
              <small className="text-muted">Sent 20 Sep 2026</small>
            </div>
            <span className="badge text-white" style={{ background: "#a8763e" }}>Pending</span>
          </div>
        </div>
      </div>
      {/* Earlier request — already decided by the teacher */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-A) — Q3</h6>
              <p className="mb-1 text-muted">The scanner may have skipped my bubble.</p>
              <small className="text-muted">Sent 12 Sep 2026</small>
            </div>
            <span className="badge text-white" style={{ background: "#6f1a07" }}>Approved</span>
          </div>
        </div>
      </div>
    </>
  );
}