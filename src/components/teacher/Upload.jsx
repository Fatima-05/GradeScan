import { useState } from "react";

/* Upload: single-sheet scan. Mirror of the repo's Upload tab — choose a photo,
   the app aligns (corner marks), decodes the QR key, reads Name/Reg via OCR,
   then reads the bubbles. Here it's an interface-only simulation. */
export default function Upload() {
  const [file, setFile] = useState(null);
  const [done, setDone] = useState(false); // true after the fake scan finishes

  // Stores the chosen file's name (interface only — nothing is really uploaded)
  function chooseFile(event) {
    const chosen = event.target.files[0];
    if (chosen) {
      setFile(chosen.name);
      setDone(false);
    }
  }

  // Fake scan: everything "completes" at once, then Review/Results are offered
  function runScan() {
    if (!file) return;
    setDone(true);
  }

  return (
    <>
      <h2 className="mb-1">Upload & Scan</h2>
      <p className="text-muted mb-4">Grade a single scanned answer sheet.</p>

      <div className="card mb-4">
        <div className="card-body">
          {/* File: Bootstrap form-control; Generate is a placeholder */}
          <label className="form-label">Sheet photo</label>
          <input
            className="form-control mb-3"
            type="file"
            accept="image/*"
            onChange={chooseFile}
          />
          <div className="d-flex gap-2">
            <button className="btn btn-warning px-4" onClick={runScan} disabled={!file}>
              Scan &amp; grade
            </button>
            <a href="#" className="btn btn-outline-warning">Generate blank sheet</a>
          </div>
        </div>
      </div>

      {/* Pipeline status: steps light up as the fake scan progresses */}
      {file && done && (
        <div className="card mb-4">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              {/* Each step is drawn by hand; all four finish together here */}
              <li className="mb-1">
                <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
                Alignment — corner registration marks
              </li>
              <li className="mb-1">
                <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
                QR decode — answer key from the sheet
              </li>
              <li className="mb-1">
                <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
                OCR — student name and Reg#
              </li>
              <li className="mb-1">
                <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
                Bubble grid — Part I + Part II
              </li>
            </ul>
            <div className="alert alert-success text-center mt-3 mb-0" role="alert">
              {file} graded — check <strong>Review</strong> to confirm the name, then <strong>Results</strong>.
            </div>
          </div>
        </div>
      )}
    </>
  );
}