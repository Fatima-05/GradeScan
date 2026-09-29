import { useState } from "react";

/* Student dashboard (viewed as Ayesha Khan): my grades grouped by subject
   with a per-question ✓/✗/– breakdown, a regrade request form with a status
   list, and read-only announcements. Everything is hand-written state +
   hard-coded numbers — no loops (DB comes later). */
export default function StudentDashboard() {
  const [view, setView] = useState("grades");

  // Regrade form fields
  const [quiz, setQuiz] = useState("AI Quiz (Set-C)");
  const [question, setQuestion] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false); // true after the fake submit

  // Fake submit: checks the question + reason are filled, then shows the
  // new Pending request card (statuses come from the teacher later)
  function sendRequest(event) {
    event.preventDefault();
    if (!question.trim() || !reason.trim()) {
      setError("Fill in the question number and the reason.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: espresso, pinned 250px like the admin and teacher sides */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          {/* My Grades */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "grades" ? "active" : "")} onClick={() => setView("grades")}>
              <i className="bi bi-journal-check"></i> My Grades
            </button>
          </li>
          {/* Regrade Request */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "regrade" ? "active" : "")} onClick={() => setView("regrade")}>
              <i className="bi bi-arrow-counterclockwise"></i> Regrade Request
            </button>
          </li>
          {/* Announcements */}
          <li className="nav-item">
            <button type="button" className={"nav-link w-100 text-start " + (view === "announcements" ? "active" : "")} onClick={() => setView("announcements")}>
              <i className="bi bi-megaphone"></i> Announcements
            </button>
          </li>
        </ul>
        {/* Log out: placeholder — switch the page in main.jsx */}
        <div className="mt-auto">
          <a href="#/" className="nav-link text-white-50">Log out</a>
        </div>
      </aside>

      {/* Main content: one section at a time; scrolls if taller than the screen */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {view === "grades" && (
          <>
            <h2 className="mb-1">My Grades</h2>
            <p className="text-muted mb-4">Ayesha Khan · FA24-BSE-100</p>

            {/* AI */}
            <h4 className="mb-3">
              AI <span className="badge bg-secondary ms-1">2 of 2 graded</span>
            </h4>
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">AI Quiz <span className="badge bg-secondary">Set-C</span></h6>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-muted">15✓ · 1✗ · 0–</span>
                    <span className="fw-bold">15/16</span>
                    <span className="text-muted">94%</span>
                    <span className="badge bg-warning text-dark">A</span>
                  </div>
                </div>
                <small className="text-muted d-block mb-1">Part I (Q1–Q8)</small>
                <div className="d-flex flex-wrap gap-1 mb-2">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q1 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q2 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q3 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q4 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q5 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q6 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q7 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q8 ✓</span>
                </div>
                <small className="text-muted d-block mb-1">Part II (Q9–Q16)</small>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q9 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q10 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q11 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q12 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q13 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q14 ✓</span>
                  <span className="badge bg-danger bg-opacity-50 text-dark">Q15 ✗</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q16 ✓</span>
                </div>
              </div>
            </div>

            {/* Operating Systems */}
            <h4 className="mb-3">
              Operating Systems <span className="badge bg-secondary ms-1">1 of 1 graded</span>
            </h4>
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">OS Quiz <span className="badge bg-secondary">Set-A</span></h6>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-muted">14✓ · 2✗ · 0–</span>
                    <span className="fw-bold">13.5/16</span>
                    <span className="text-muted">84%</span>
                    <span className="badge bg-warning text-dark">B</span>
                  </div>
                </div>
                <small className="text-muted d-block mb-1">Part I (Q1–Q8)</small>
                <div className="d-flex flex-wrap gap-1 mb-2">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q1 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q2 ✓</span>
                  <span className="badge bg-danger bg-opacity-50 text-dark">Q3 ✗</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q4 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q5 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q6 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q7 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q8 ✓</span>
                </div>
                <small className="text-muted d-block mb-1">Part II (Q9–Q16)</small>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q9 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q10 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q11 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q12 ✓</span>
                  <span className="badge bg-danger bg-opacity-50 text-dark">Q13 ✗</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q14 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q15 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q16 ✓</span>
                </div>
              </div>
            </div>

            {/* Data Structures */}
            <h4 className="mb-3">
              Data Structures <span className="badge bg-secondary ms-1">1 of 1 graded</span>
            </h4>
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">DS Quiz <span className="badge bg-secondary">Set-A</span></h6>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-muted">15✓ · 1✗ · 0–</span>
                    <span className="fw-bold">14.75/16</span>
                    <span className="text-muted">92%</span>
                    <span className="badge bg-warning text-dark">A</span>
                  </div>
                </div>
                <small className="text-muted d-block mb-1">Part I (Q1–Q8)</small>
                <div className="d-flex flex-wrap gap-1 mb-2">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q1 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q2 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q3 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q4 ✓</span>
                  <span className="badge bg-danger bg-opacity-50 text-dark">Q5 ✗</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q6 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q7 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q8 ✓</span>
                </div>
                <small className="text-muted d-block mb-1">Part II (Q9–Q16)</small>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-success bg-opacity-25 text-dark">Q9 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q10 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q11 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q12 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q13 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q14 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q15 ✓</span>
                  <span className="badge bg-success bg-opacity-25 text-dark">Q16 ✓</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <small className="text-muted">
              <span className="fw-bold">Legend:</span> ✓ correct · ✗ wrong · – blank
            </small>
          </>
        )}

        {view === "regrade" && (
          <>
            <h2 className="mb-1">Regrade Request</h2>
            <p className="text-muted mb-4">Ask your teacher to re-check an answer.</p>

            {/* Request form: Bootstrap form-select + form-control + Button component */}
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={sendRequest}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Quiz</label>
                      <select className="form-select" value={quiz} onChange={(e) => setQuiz(e.target.value)}>
                        <option>AI Quiz (Set-C)</option>
                        <option>OS Quiz (Set-A)</option>
                        <option>DS Quiz (Set-A)</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Question number</label>
                      <input className="form-control" type="text" placeholder="e.g. 15" value={question} onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Reason</label>
                      <textarea className="form-control" rows="3" placeholder="Explain what went wrong…" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
                    </div>
                  </div>
                  {error && (
                    <div className="alert alert-danger text-center mt-3 mb-0" role="alert">{error}</div>
                  )}
                  <button className="btn btn-warning mt-3 px-4">Send request</button>
                </form>
              </div>
            </div>

            {/* Request status: the teacher approves or rejects later */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Request status</h4>
              <span className="badge bg-secondary">2 total</span>
            </div>
            {submitted && (
              <div className="card mb-2">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">{quiz} — Q{question.trim()}</h6>
                      <p className="mb-1 text-muted">{reason}</p>
                      <small className="text-muted">Sent 29 Sep 2026</small>
                    </div>
                    <span className="badge text-white" style={{ background: "#a8763e" }}>Pending</span>
                  </div>
                </div>
              </div>
            )}
            {/* Earlier request — already decided by the teacher */}
            <div className="card mb-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">AI Quiz (Set-C) — Q15</h6>
                    <p className="mb-1 text-muted">I think the scanner missed the bubble.</p>
                    <small className="text-muted">Sent 20 Sep 2026</small>
                  </div>
                  <span className="badge text-white" style={{ background: "#6f1a07" }}>Approved</span>
                </div>
              </div>
            </div>
          </>
        )}

        {view === "announcements" && (
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
        )}
      </main>
    </div>
  );
}