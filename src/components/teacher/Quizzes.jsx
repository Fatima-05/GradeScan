import { useState } from "react";

/* Quizzes: creator form + the teacher's quiz cards. The 16 answer-key
   selects are written out one by one (Q1–Q8, Q9–Q16). The sheet download
   is a placeholder for the QR the professor's app would generate. */
export default function Quizzes() {
  const [title, setTitle] = useState("");
  const [quizSet, setQuizSet] = useState("Set-A");
  const [className, setClassName] = useState("BSE-4A");
  const [subject, setSubject] = useState("AI");
  const [negative, setNegative] = useState("0.25");
  const [passing, setPassing] = useState("40");
  const [part1, setPart1] = useState(["A", "A", "A", "A", "A", "A", "A", "A"]);
  const [part2, setPart2] = useState(["A", "A", "A", "A", "A", "A", "A", "A"]);
  const [error, setError] = useState(null);
  const [created, setCreated] = useState(false); // true right after "Create quiz"

  // Updates one letter of a key while keeping the rest of the array as it was
  function setKeyValue(part, setter, index, value) {
    const next = part.slice();
    next[index] = value;
    setter(next);
  }

  // Fake submit: only checks the title, then shows the sheet-download alert
  function addQuiz(event) {
    event.preventDefault();
    if (!title.trim()) {
      setError("Please give the quiz a title.");
      return;
    }
    setError(null);
    setCreated(true);
    setTitle("");
  }

  return (
    <>
      <h2 className="mb-1">Quizzes</h2>
      <p className="text-muted mb-4">Create quizzes and manage their answer keys.</p>

      {/* Create card: Bootstrap form-control + form-select + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={addQuiz}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Quiz title</label>
                <input className="form-control" type="text" placeholder="e.g. AI Quiz" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="col-md-3">
                <label className="form-label">Set</label>
                <select className="form-select" value={quizSet} onChange={(e) => setQuizSet(e.target.value)}>
                  <option>Set-A</option>
                  <option>Set-B</option>
                  <option>Set-C</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Class</label>
                <select className="form-select" value={className} onChange={(e) => setClassName(e.target.value)}>
                  {/* Classes come from the admin lists */}
                  <option>BSE-4A</option>
                  <option>BSE-4B</option>
                  <option>BSCS-3A</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Subject</label>
                <select className="form-select" value={subject} onChange={(e) => setSubject(e.target.value)}>
                  {/* Subjects come from the admin lists */}
                  <option>AI</option>
                  <option>Operating Systems</option>
                  <option>Databases</option>
                </select>
              </div>
              {/* Grading settings prefill from the admin Grading Policy defaults */}
              <div className="col-md-3">
                <label className="form-label">Negative marking</label>
                <input className="form-control" type="number" step="0.01" value={negative} onChange={(e) => setNegative(e.target.value)} />
              </div>
              <div className="col-md-3">
                <label className="form-label">Passing %</label>
                <input className="form-control" type="number" value={passing} onChange={(e) => setPassing(e.target.value)} />
              </div>

              {/* Answer key — Part I (Q1–Q8) */}
              <div className="col-12">
                <label className="form-label">Answer key — Part I (Q1–Q8)</label>
                <div className="row g-2">
                  {/* Q1 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[0]} onChange={(e) => setKeyValue(part1, setPart1, 0, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q2 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[1]} onChange={(e) => setKeyValue(part1, setPart1, 1, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q3 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[2]} onChange={(e) => setKeyValue(part1, setPart1, 2, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q4 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[3]} onChange={(e) => setKeyValue(part1, setPart1, 3, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q5 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[4]} onChange={(e) => setKeyValue(part1, setPart1, 4, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q6 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[5]} onChange={(e) => setKeyValue(part1, setPart1, 5, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q7 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[6]} onChange={(e) => setKeyValue(part1, setPart1, 6, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q8 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part1[7]} onChange={(e) => setKeyValue(part1, setPart1, 7, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Answer key — Part II (Q9–Q16) */}
              <div className="col-12">
                <label className="form-label">Answer key — Part II (Q9–Q16)</label>
                <div className="row g-2">
                  {/* Q9 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[0]} onChange={(e) => setKeyValue(part2, setPart2, 0, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q10 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[1]} onChange={(e) => setKeyValue(part2, setPart2, 1, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q11 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[2]} onChange={(e) => setKeyValue(part2, setPart2, 2, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q12 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[3]} onChange={(e) => setKeyValue(part2, setPart2, 3, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q13 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[4]} onChange={(e) => setKeyValue(part2, setPart2, 4, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q14 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[5]} onChange={(e) => setKeyValue(part2, setPart2, 5, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q15 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[6]} onChange={(e) => setKeyValue(part2, setPart2, 6, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  {/* Q16 */}
                  <div className="col-3 col-md-2">
                    <select className="form-select" value={part2[7]} onChange={(e) => setKeyValue(part2, setPart2, 7, e.target.value)}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {error && (
              <div className="alert alert-danger text-center mt-3 mb-0" role="alert">{error}</div>
            )}
            <button className="btn btn-warning mt-3 px-4">Create quiz</button>
          </form>
        </div>
      </div>

      {/* After creating: the QR sheet is what the teacher prints for students */}
      {created && (
        <div className="alert alert-success text-center" role="alert">
          <p className="mb-2">
            <strong>{title.trim()} ({quizSet})</strong> is ready — its answer key is
            encoded in the sheet's QR.
          </p>
          <a href="#" className="btn btn-warning">Download question sheet</a>
        </div>
      )}

      {/* Quiz list: hard-coded cards + the new quiz that was just created */}
      <h4 className="mb-3">Your quizzes</h4>
      <div className="row g-4">
        {/* Seeded quiz 1 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">
                AI Quiz <span className="badge bg-secondary">Set-C</span>
              </h6>
              <small className="text-muted">BSE-4A · AI · 16 questions · 30 min</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">Neg: 0 · 16 questions</small>
                {/* Sheet download: the printable blank with the answer-key QR */}
                <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
              </div>
            </div>
          </div>
        </div>
        {/* Seeded quiz 2 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">
                AI Quiz <span className="badge bg-secondary">Set-A</span>
              </h6>
              <small className="text-muted">BSE-4A · AI · 16 questions · 30 min</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">Neg: 0.25 · 16 questions</small>
                <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
              </div>
            </div>
          </div>
        </div>
        {/* The quiz created in this session */}
        {created && (
          <div className="col-md-6">
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h6 className="card-title">
                  {title.trim()} <span className="badge bg-secondary">{quizSet}</span>
                </h6>
                <small className="text-muted">{className} · {subject} · 16 questions · 30 min</small>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-muted">Neg: {negative} · 16 questions</small>
                  <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}