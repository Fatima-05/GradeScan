/* Quizzes: a creator form + the teacher's quiz cards. The 16 answer-key
   selects are written out one by one (Q1–Q8, Q9–Q16). Static UI — nothing
   submits; the sheet download is a placeholder for the QR. */
export default function Quizzes() {
  return (
    <>
      <h2 className="mb-1">Quizzes</h2>
      <p className="text-muted mb-4">Create quizzes and manage their answer keys.</p>

      {/* Create card: Bootstrap form-control + form-select + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Quiz title</label>
              <input className="form-control" type="text" placeholder="e.g. AI Quiz" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Set</label>
              <select className="form-select" defaultValue="Set-A">
                <option>Set-A</option>
                <option>Set-B</option>
                <option>Set-C</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Class</label>
              <select className="form-select" defaultValue="BSE-4A">
                <option>BSE-4A</option>
                <option>BSE-4B</option>
                <option>BSCS-3A</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Subject</label>
              <select className="form-select" defaultValue="AI">
                <option>AI</option>
                <option>Operating Systems</option>
                <option>Databases</option>
              </select>
            </div>
            {/* Grading settings prefill from the admin Grading Policy defaults */}
            <div className="col-md-3">
              <label className="form-label">Negative marking</label>
              <input className="form-control" type="number" step="0.01" defaultValue="0.25" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Passing %</label>
              <input className="form-control" type="number" defaultValue="40" />
            </div>

            {/* Answer key — Part I (Q1–Q8) */}
            <div className="col-12">
              <label className="form-label">Answer key — Part I (Q1–Q8)</label>
              <div className="row g-2">
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Answer key — Part II (Q9–Q16) */}
            <div className="col-12">
              <label className="form-label">Answer key — Part II (Q9–Q16)</label>
              <div className="row g-2">
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
                <div className="col-3 col-md-2">
                  <select className="form-select" defaultValue="A">
                    <option>A</option><option>B</option><option>C</option><option>D</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Button: Bootstrap Button component — visual only */}
          <button type="button" className="btn btn-warning mt-3 px-4">Create quiz</button>
        </div>
      </div>

      {/* Quiz list: hard-coded cards */}
      <h4 className="mb-3">Your quizzes</h4>
      <div className="row g-4">
        {/* Quiz 1 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">
                AI Quiz <span className="badge bg-secondary">Set-C</span>
              </h6>
              <small className="text-muted">BSE-4A · AI · 16 questions · 30 min</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">Neg: 0 · 16 questions</small>
                {/* Sheet download: placeholder for the QR sheet */}
                <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
              </div>
            </div>
          </div>
        </div>
        {/* Quiz 2 */}
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
      </div>
    </>
  );
}