export default function App() {
  return (
    <>
      {/* NAVBAR: Bootstrap Navbar component*/}
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GradeScan</a>
          {/* Toggler: Bootstrap collapsible menu*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {/* Nav links: Bootstrap navbar-nav and nav-link utilities */}
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">How it works</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hera: custom section; text styles use Bootstrap utilities (display-5, lead), background from index.css */}
      <header className="hero text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Grade scans in seconds</h1>
          <p className="lead">
            Reads the answer key from a QR, recognizes student names with OCR,
            and grades MCQ bubble sheets right in your browser.
          </p>
          {/* Button: Bootstrap Button component*/}
          <button className="btn btn-warning btn-lg">Get started</button>
        </div>
      </header>

      {/* Content Area 1 (Features): Bootstrap grid (row/col-md-4) + Card component */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Card: Bootstrap Card component */}
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">QR answer keys</h5>
                <p className="card-text">The answer key travels in a QR code on every sheet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Photo OCR</h5>
                <p className="card-text">Names and registration numbers read from photos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Batch to CSV</h5>
                <p className="card-text">Grade a folder and export a spreadsheet report.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area 2 (How it works): Bootstrap grid + typography utilities (display-6, text-muted) */}
      <section className="container py-5 text-center">
        <div className="row g-4">
          <div className="col-md-4">
            <h2 className="display-6">1</h2>
            <h5>Print</h5>
            <p className="text-muted">Generate a blank sheet with the QR key built in.</p>
          </div>
          <div className="col-md-4">
            <h2 className="display-6">2</h2>
            <h5>Scan</h5>
            <p className="text-muted">Upload one sheet or a whole folder of sheets.</p>
          </div>
          <div className="col-md-4">
            <h2 className="display-6">3</h2>
            <h5>Results</h5>
            <p className="text-muted">Grades, breakdowns, and CSV export automatically.</p>
          </div>
        </div>
      </section>

      {/* Content area 3 (CTA) : Bootstrap Card + text-bg-warning color helper */}
      <section className="container py-5 text-center">
        <div className="card text-bg-warning">
          <div className="card-body p-4">
            <h3 className="card-title">Ready to stop grading by hand?</h3>
            <p className="card-text">Free, and ready in your browser.</p>
          </div>
        </div>
      </section>

      {/* Footer — Bootstrap utilities only (bg-dark, text-center, py-4) */}
      <footer className="bg-dark text-center py-4 mt-auto">
        <p className="mb-1">GradeScan — OMR Sheet Grader</p>
        <p className="small text-secondary mb-0">© 2026 · BSE-4A</p>
      </footer>
    </>
  );
}