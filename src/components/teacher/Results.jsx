/* Results: every graded sheet for the quiz, with per-question ✓/✗/– marks,
   correct/incorrect/unattempted, total with negative marking, percentage,
   and letter grade. Values are hard-coded (DB later). The CSV export is a
   real browser download of the same numbers, written line by line. */

export default function Results() {
  // Real download for Set-C: builds the CSV text by hand, then triggers a download
  function exportSetC() {
    const csv =
      "Name,Reg#,Correct,Incorrect,Unattempted,Total,Max,Percentage,Grade\n" +
      "Ayesha Khan,FA24-BSE-100,15,1,0,15,16,94%,A\n" +
      "Bilal Ahmed,FA24-BSE-101,12,3,1,12,16,75%,B\n";
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AI-Quiz-Set-C-results.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Real download for Set-A: one line for the single graded sheet
  function exportSetA() {
    const csv =
      "Name,Reg#,Correct,Incorrect,Unattempted,Total,Max,Percentage,Grade\n" +
      "Ansa Irshad,FA24-BSE-102,15,1,0,14.75,16,92%,A\n";
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AI-Quiz-Set-A-results.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <h2 className="mb-1">Results</h2>
      <p className="text-muted mb-4">Grades for each scanned sheet, per question.</p>
      <small className="text-muted d-block mb-3">
        Each set has its own Download CSV button below.
      </small>

      {/* AI Quiz — Set C */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">AI Quiz <span className="badge bg-secondary">Set-C</span> · BSE-4A</h6>
            {/* CSV export: downloads only this set's rows */}
            <button className="btn btn-warning btn-sm" onClick={exportSetC}>
              <i className="bi bi-download me-1"></i> Download CSV
            </button>
          </div>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Reg#</th>
                  <th>Part I (Q1–Q8)</th>
                  <th>Part II (Q9–Q16)</th>
                  <th>✓</th>
                  <th>✗</th>
                  <th>–</th>
                  <th>Total</th>
                  <th>%</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {/* Ayesha Khan */}
                <tr>
                  <td>Ayesha Khan</td>
                  <td>FA24-BSE-100</td>
                  <td>✓✓✓✓✓✓✓✓</td>
                  <td>✓✓✓✓✓✓✗✓</td>
                  <td>15</td>
                  <td>1</td>
                  <td>0</td>
                  <td>15/16</td>
                  <td>94%</td>
                  <td><span className="badge bg-warning text-dark">A</span></td>
                </tr>
                {/* Bilal Ahmed */}
                <tr>
                  <td>Bilal Ahmed</td>
                  <td>FA24-BSE-101</td>
                  <td>✓✓✗✓✓✗✓✓</td>
                  <td>✓✓✗✓✓✓✓–</td>
                  <td>12</td>
                  <td>3</td>
                  <td>1</td>
                  <td>12/16</td>
                  <td>75%</td>
                  <td><span className="badge bg-warning text-dark">B</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Quiz — Set A */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">AI Quiz <span className="badge bg-secondary">Set-A</span> · BSE-4A</h6>
            {/* CSV export: downloads only this set's rows */}
            <button className="btn btn-warning btn-sm" onClick={exportSetA}>
              <i className="bi bi-download me-1"></i> Download CSV
            </button>
          </div>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Reg#</th>
                  <th>Part I (Q1–Q8)</th>
                  <th>Part II (Q9–Q16)</th>
                  <th>✓</th>
                  <th>✗</th>
                  <th>–</th>
                  <th>Total</th>
                  <th>%</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {/* Ansa Irshad */}
                <tr>
                  <td>Ansa Irshad</td>
                  <td>FA24-BSE-102</td>
                  <td>✓✓✗✓✓✓✓✓</td>
                  <td>✓✓✓✓✓✓✓✓</td>
                  <td>15</td>
                  <td>1</td>
                  <td>0</td>
                  <td>14.75/16</td>
                  <td>92%</td>
                  <td><span className="badge bg-warning text-dark">A</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <small className="text-muted">Negative marking 0.25 is applied on Set-A.</small>
        </div>
      </div>

      {/* Legend: the characters used in the per-question columns */}
      <small className="text-muted">
        <span className="fw-bold">Legend:</span> ✓ correct · ✗ wrong · – blank
      </small>
    </>
  );
}