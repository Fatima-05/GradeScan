/* My Grades (viewed as Ayesha Khan): one card per quiz, grouped by subject,
   with a per-question ✓/✗/– breakdown. Hard-coded numbers — DB comes later. */
export default function Grades() {
  return (
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
  );
}