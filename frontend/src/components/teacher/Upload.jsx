/* Upload: single-sheet scan. Mirror of the repo's Upload tab — choose a photo,
   the app aligns (corner marks), decodes the QR key, reads Name/Reg via OCR,
   then reads the bubbles. Static UI — the checklist shows the process. */
export default function Upload() {
  return (
    <>
      <h2 className="mb-1">Upload & Scan</h2>
      <p className="text-muted mb-4">Grade a single scanned answer sheet.</p>

      <div className="card mb-4">
        <div className="card-body">
          {/* File: Bootstrap form-control; Generate is a placeholder */}
          <label className="form-label">Sheet photo</label>
          <input className="form-control mb-3" type="file" accept="image/*" />
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-warning px-4">Scan &amp; grade</button>
            <a href="#" className="btn btn-outline-warning">Generate blank sheet</a>
          </div>
        </div>
      </div>

      {/* Pipeline status: the four steps, all shown with done ticks */}
      <div className="card mb-4">
        <div className="card-body">
          <ul className="list-unstyled mb-0">
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
            Sheet graded — check <strong>Review</strong> to confirm the name, then <strong>Results</strong>.
          </div>
        </div>
      </div>
    </>
  );
}