/* Regrade: queue of student-submitted requests for this teacher's quizzes.
   The note for the student is written before deciding (visual only), and
   processed requests show no note box. Static UI — statuses are hard-coded. */
export default function Regrade() {
  return (
    <>
      <h2 className="mb-1">Regrade Requests</h2>
      <p className="text-muted mb-4">Students flagged a question — review and decide.</p>

      {/* Request 1 — still pending */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-C) — Q6</h6>
              <p className="mb-1">
                <strong>Ayesha Khan</strong> · <span className="text-muted">27 Sep 2026</span>
              </p>
              <p className="mb-2 text-muted">I marked B but it should be A.</p>
              {/* The note is written first, then Approve/Reject */}
              <textarea className="form-control mb-2" rows="2" placeholder="Add a note for the student…"></textarea>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-warning btn-sm">Approve</button>
                <button type="button" className="btn btn-outline-warning btn-sm">Reject</button>
              </div>
            </div>
            <span className="badge text-white" style={{ background: "#a8763e" }}>Pending</span>
          </div>
        </div>
      </div>

      {/* Request 2 — already processed: no note box is shown */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-A) — Q3</h6>
              <p className="mb-1">
                <strong>Ansa Irshad</strong> · <span className="text-muted">24 Sep 2026</span>
              </p>
              <p className="mb-2 text-muted">The scanner may have skipped my bubble.</p>
            </div>
            <span className="badge text-white" style={{ background: "#6f1a07" }}>Approved</span>
          </div>
        </div>
      </div>
    </>
  );
}