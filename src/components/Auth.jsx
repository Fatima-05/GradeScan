import { useState } from "react";

/* Auth: professional split layout. Left brand panel, right form. Role via nav-pills, basic useState only. */
export default function Auth() {
  const [role, setRole] = useState("Faculty");  // Admin | Faculty | Student
  const [mode, setMode] = useState("login");     // login | signup (Faculty/Student only)
  const [done, setDone] = useState(null);        // message shown after a fake submit
  const [error, setError] = useState(null);      // validation message when a field is empty
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");
  const [subject, setSubject] = useState("");
  const [password, setPassword] = useState("");

  // Fake submit: checks every visible field is filled first, then shows a
  // message — no routes, so pages are switched manually in main.jsx
  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    if (role !== "Admin" && mode === "signup" && !name.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    if (role === "Student" && mode === "signup" && !reg.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    if (role === "Faculty" && mode === "signup" && !subject.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    setError(null);
    if (role === "Admin") {
      setDone("Logged in as Admin. Switch to the dashboard in main.jsx.");
    } else if (mode === "login") {
      setDone("Logged in as " + role + ". The dashboard comes in a later phase.");
    } else if (role === "Faculty") {
      setDone("Signup sent! Your account is waiting for admin approval.");
    } else {
      setDone("Signup sent! Check your registration number and log in.");
    }
  }

  // Label shown on the submit button changes with role and mode
  function submitLabel() {
    if (role === "Admin") { return "Log in as Admin"; }
    if (mode === "login") { return "Log in"; }
    return "Create account";
  }

  function switchRole(nextRole) {
    setRole(nextRole);
    setDone(null);
    setError(null);
  }

  return (
    <div className="d-flex min-vh-100">
      {/* Brand panel: hidden on small screens. Pinned to exactly half the
          viewport width (50vw), so the partition never shifts between roles */}
      <div
        className="d-none d-lg-flex auth-brand align-items-center justify-content-center p-5"
        style={{ width: "50vw", position: "sticky", top: 0, height: "100vh" }}
      >
        <div className="text-center">
          {/* Image: transparent PNG, floats over the rust panel */}
          <img src="/auth-hero.png" alt="GradeScan scanned sheet" className="img-fluid mb-4" style={{ maxHeight: "360px" }} />
          <h1 className="fw-bold mb-3">GradeScan</h1>
          <p className="mb-0">The OMR grading system for your classes.</p>
        </div>
      </div>

      {/* Form panel: fills the other half with a normal flex column */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
        <div style={{ maxWidth: "460px", width: "100%" }}>
          {/* Link: placeholder — switch the page in main.jsx */}
          <a href="#/" className="text-warning">← Back to home</a>
          <h2 className="mt-3 mb-1">Welcome!</h2>
          <p className="text-muted mb-4">Log in or create your account.</p>

          {/* Role tabs: Bootstrap nav-pills */}
          <ul className="nav nav-pills justify-content-center mb-4">
            {/* Faculty */}
            <li className="nav-item">
              <button
                type="button"
                className={"nav-link " + (role === "Faculty" ? "active" : "")}
                onClick={() => switchRole("Faculty")}
              >
                Faculty
              </button>
            </li>
            {/* Admin */}
            <li className="nav-item">
              <button
                type="button"
                className={"nav-link " + (role === "Admin" ? "active" : "")}
                onClick={() => switchRole("Admin")}
              >
                Admin
              </button>
            </li>
            {/* Student */}
            <li className="nav-item">
              <button
                type="button"
                className={"nav-link " + (role === "Student" ? "active" : "")}
                onClick={() => switchRole("Student")}
              >
                Student
              </button>
            </li>
          </ul>

          {done && !error ? (
            // Message after a fake Faculty/Student submit
            <div className="alert alert-success text-center" role="alert">
              <p className="mb-2">{done}</p>
              <button className="btn btn-warning" onClick={() => setDone(null)}>Sign in again</button>
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="card-body p-4">
                {/* Login/Sign up toggle: Admin has no signup */}
                {role !== "Admin" && (
                  <div className="btn-group w-100 mb-4">
                    {/* Login button */}
                    <button
                      type="button"
                      className={"btn " + (mode === "login" ? "btn-warning" : "btn-outline-warning")}
                      onClick={() => { setMode("login"); setError(null); }}
                    >
                      Login
                    </button>
                    {/* Sign up button */}
                    <button
                      type="button"
                      className={"btn " + (mode === "signup" ? "btn-warning" : "btn-outline-warning")}
                      onClick={() => { setMode("signup"); setError(null); }}
                    >
                      Sign up
                    </button>
                  </div>
                )}

                {/* Form: Bootstrap form-control + form-label */}
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger text-center" role="alert">{error}</div>
                  )}
                  {role !== "Admin" && mode === "signup" && (
                    <div className="mb-3">
                      <label className="form-label">Full name</label>
                      <input className="form-control" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" placeholder="you@school.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  {role === "Student" && mode === "signup" && (
                    <div className="mb-3">
                      <label className="form-label">Registration number</label>
                      <input className="form-control" type="text" placeholder="e.g. BSE-2024-042" value={reg} onChange={(e) => setReg(e.target.value)} />
                    </div>
                  )}

                  {role === "Faculty" && mode === "signup" && (
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input className="form-control" type="text" placeholder="e.g. AI" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  {role !== "Admin" && mode === "login" && (
                    <div className="text-end mb-3">
                      <a href="#forgot" className="text-warning small">Forgot password?</a>
                    </div>
                  )}

                  {/* Button: Bootstrap Button component*/}
                  <button type="submit" className="btn btn-warning w-100">{submitLabel()}</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}