import { useState } from "react";

/* Student Dashboard: My Grades (grouped by subject, expandable per-question
   breakdown), Regrade Requests, and read-only Announcements.
   Everything is dummy data here (DB in a later phase). */

/* Letter grade: same boundary percentages as the Grading Policy defaults */
function letterGrade(percent) {
  if (percent >= 90) return "A";
  if (percent >= 85) return "A-";
  if (percent >= 80) return "B+";
  if (percent >= 75) return "B";
  if (percent >= 70) return "B-";
  if (percent >= 65) return "C+";
  if (percent >= 60) return "C";
  if (percent >= 55) return "C-";
  if (percent >= 50) return "D";
  return "F";
}

/* Mock data: every quiz tied to one Reg# (BSE-2024-042), grouped by subject.
   "answers" holds one entry per question: ✓ correct, ✗ wrong, – blank. */
const subjects = [
  {
    name: "AI",
    results: [
      { id: 1, quiz: "Quiz 1 — Neural nets", date: "18 Sep 2026", score: 8, answers: ["✓", "✓", "✗", "✓", "–", "✓", "✓", "✗", "✓", "✓"] },
      { id: 2, quiz: "Quiz 2 — Search", date: "25 Sep 2026", score: 9, answers: ["✓", "✓", "✓", "✓", "–", "✓", "✓", "✓", "✗", "✓"] },
    ],
  },
  {
    name: "Operating Systems",
    results: [
      { id: 3, quiz: "Quiz 1 — Processes", date: "12 Sep 2026", score: 6, answers: ["✓", "✗", "✓", "✗", "✓", "–", "✓", "✗", "✓", "✓"] },
    ],
  },
  {
    name: "Data Structures",
    results: [
      { id: 4, quiz: "Quiz 2 — Trees", date: "20 Sep 2026", score: 10, answers: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
    ],
  },
];

/* Flat copy of every quiz with its subject, used by the regrade dropdown */
const allResults = subjects.flatMap((s) =>
  s.results.map((r) => ({ ...r, subject: s.name }))
);

/* Read-only notices addressed to students */
const announcements = [
  { text: "Regrade requests are reviewed every Friday.", date: "26 Sep 2026" },
  { text: "Midterm schedule is now live.", date: "25 Sep 2026" },
];

/* One answer mark, colored to the palette: ✓ ochre, ✗ rust, – muted */
function Mark({ m }) {
  if (m === "✓") return <span style={{ color: "#a8763e", fontWeight: 700 }}>✓</span>;
  if (m === "✗") return <span style={{ color: "#6f1a07", fontWeight: 700 }}>✗</span>;
  return <span className="text-muted">–</span>;
}

export default function StudentDashboard() {
  const [view, setView] = useState("grades");      // grades | regrade | announcements
  const [openId, setOpenId] = useState(null);      // quiz showing its per-question breakdown
  const [requests, setRequests] = useState([       // dummy regrade queue; new ones come from the form
    { id: 1, quiz: "Quiz 1 — Neural nets (AI)", question: 3, reason: "My bubble may have been misread.", status: "Pending", date: "22 Sep 2026" },
  ]);
  const [quizId, setQuizId] = useState("1");
  const [question, setQuestion] = useState("1");
  const [reason, setReason] = useState("");
  const [error, setError] = useState(null);

  const menu = [
    { id: "grades", label: "My Grades", icon: "bi-journal-bookmark-fill" },
    { id: "regrade", label: "Regrade Requests", icon: "bi-pencil-square" },
    { id: "announcements", label: "Announcements", icon: "bi-megaphone" },
  ];

  const selectedQuiz = allResults.find((r) => r.id === Number(quizId));

  // Fake submit: adds the request to the queue as Pending
  function addRequest(event) {
    event.preventDefault();
    if (!reason.trim()) {
      setError("Please write a reason.");
      return;
    }
    setError(null);
    setRequests([
      {
        id: requests.length + 1,
        quiz: selectedQuiz.quiz + " (" + selectedQuiz.subject + ")",
        question: Number(question),
        reason: reason,
        status: "Pending",
        date: "26 Sep 2026",
      },
      ...requests,
    ]);
    setReason("");
  }

  // Status chip colors: Pending ochre, Approved rust, Rejected muted
  function statusColor(status) {
    if (status === "Approved") return "#6f1a07";
    if (status === "Rejected") return "#b9b29c";
    return "#a8763e";
  }

  return (
    <div className="d-flex vh-100">
      {/* Sidebar: same espresso menu as the admin side, pinned width */}
      <aside
        className="sidebar bg-dark text-white d-flex flex-column p-3"
        style={{ flex: "0 0 250px", width: "250px", minWidth: "250px", maxWidth: "250px" }}
      >
        <a className="navbar-brand mb-4" href="#">GradeScan</a>
        <ul className="nav flex-column gap-1">
          {menu.map((m) => (
            <li className="nav-item" key={m.id}>
              <button
                type="button"
                className={"nav-link w-100 text-start " + (view === m.id ? "active" : "")}
                onClick={() => setView(m.id)}
              >
                <i className={"bi " + m.icon}></i> {m.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Log out: placeholder — switch the page in main.jsx */}
        <div className="mt-auto">
          <a href="#/" className="nav-link text-white-50">Log out</a>
        </div>
      </aside>

      {/* Main content: shows one section at a time; scrolls if taller than the screen */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {view === "grades" && (
          /* My Grades: every result for this Reg#, grouped by subject */
          <>
            <h2 className="mb-1">My Grades</h2>
            <p className="text-muted mb-4">Registration no. BSE-2024-042</p>
            {subjects.map((s) => (
              <div className="mb-4" key={s.name}>
                <h4 className="mb-3">{s.name}</h4>
                {s.results.map((r) => {
                  const percent = Math.round((r.score / r.answers.length) * 100);
                  const open = openId === r.id;
                  return (
                    /* Quiz card: header row toggles the per-question breakdown */
                    <div className="card mb-2" key={r.id}>
                      <div
                        className="card-body d-flex justify-content-between align-items-center py-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpenId(open ? null : r.id)}
                      >
                        <div>
                          <h6 className="mb-0">{r.quiz}</h6>
                          <small className="text-muted">{r.date}</small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <span className="fw-bold">{r.score}/{r.answers.length}</span>
                          <span className="text-muted">{percent}%</span>
                          <span className="badge" style={{ background: "#2b2118", color: "#a8763e" }}>{letterGrade(percent)}</span>
                          <i className={"bi " + (open ? "bi-chevron-up" : "bi-chevron-down") + " text-muted"}></i>
                        </div>
                      </div>
                      {/* Per-question breakdown: shown when the quiz is expanded */}
                      {open && (
                        <div className="card-body pt-0">
                          <div className="d-flex flex-wrap gap-2">
                            {r.answers.map((m, i) => (
                              <div key={i} className="border rounded px-2 py-1 text-center" style={{ minWidth: "36px" }}>
                                <small className="text-muted d-block">Q{i + 1}</small>
                                <Mark m={m} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}

        {view === "regrade" && (
          /* Regrade Requests: form to flag a question + list of past requests */
          <>
            <h2 className="mb-1">Regrade Requests</h2>
            <p className="text-muted mb-4">Flag a question you think was graded incorrectly.</p>

            <form onSubmit={addRequest}>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Quiz</label>
                      <select className="form-select" value={quizId} onChange={(e) => setQuizId(e.target.value)}>
                        {allResults.map((r) => (
                          <option key={r.id} value={r.id}>{r.subject} — {r.quiz}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Question</label>
                      <select className="form-select" value={question} onChange={(e) => setQuestion(e.target.value)}>
                        {selectedQuiz.answers.map((m, i) => (
                          <option key={i} value={i + 1}>Q{i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Reason</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="e.g. the OMR may have misread my bubble…"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {error && (
                    <div className="alert alert-danger text-center mt-3 mb-0" role="alert">{error}</div>
                  )}
                  <button className="btn btn-warning mt-3 px-4">Submit request</button>
                </div>
              </div>
            </form>

            <h4 className="mb-3">Request status</h4>
            {requests.map((req) => (
              <div className="card mb-2" key={req.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1">{req.quiz} — Q{req.question}</h6>
                      <p className="mb-0 text-muted">{req.reason}</p>
                      <small className="text-muted">{req.date}</small>
                    </div>
                    <span className="badge text-white" style={{ background: statusColor(req.status) }}>{req.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {view === "announcements" && (
          /* Announcements: read-only, same card style as the admin side */
          <>
            <h2 className="mb-4">Announcements</h2>
            <div className="row g-4">
              {announcements.map((a, i) => (
                <div className="col-md-6" key={i}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="card-title mb-1">{a.text}</h6>
                      <small className="text-muted">{a.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}