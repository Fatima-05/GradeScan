import { useState } from "react";

/* Regrade: queue of student-submitted requests for this teacher's quizzes.
   The teacher writes the note for the student first, then Approve or Reject
   (shown here as a confirmation note). Processed requests show no note box.
   Interface only — statuses are hard-coded. */
export default function Regrade() {
  const [decided, setDecided] = useState(null); // null | Approved | Rejected
  const [note, setNote] = useState(null);

  function decide(decision) {
    setDecided(decision);
    if (decision === "Approved") {
      setNote("Request approved — the score has been recalculated. Add a note below for the student.");
    } else {
      setNote("Request rejected — add a note below so the student understands why.");
    }
  }

  // Badge color matches the current status of the pending request
  function statusColor() {
    if (decided === "Approved") { return "#6f1a07"; }
    if (decided === "Rejected") { return "#b9b29c"; }
    return "#a8763e"; // still Pending
  }

  function statusLabel() {
    if (decided) { return decided; }
    return "Pending";
  }

  return (
    <>
      <h2 className="mb-1">Regrade Requests</h2>
      <p className="text-muted mb-4">Students flagged a question — review and decide.</p>

      {note && (
        <div className="alert alert-success text-center" role="alert">{note}</div>
      )}

      {/* Request 1 — the teacher decides, then types the note for the student */}
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
                <button className="btn btn-warning btn-sm" onClick={() => decide("Approved")}>Approve</button>
                <button className="btn btn-outline-warning btn-sm" onClick={() => decide("Rejected")}>Reject</button>
              </div>
            </div>
            <span className="badge text-white" style={{ background: statusColor() }}>{statusLabel()}</span>
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