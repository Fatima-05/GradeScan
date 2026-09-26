import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* Auth page: three roles via Bootstrap nav-pills, forms via Bootstrap form-control. Only basic useState. */
export default function Auth() {
  const [role, setRole] = useState("Faculty");  // Admin | Faculty | Student
  const [mode, setMode] = useState("login");     // login | signup (Faculty/Student only)
  const [done, setDone] = useState(null);        // message shown after a fake submit
  const navigate = useNavigate();

  const roles = ["Faculty", "Admin", "Student"];

  // Fake submit: Admin → dashboard, others → message (their dashboards come later)
  function handleSubmit(event) {
    event.preventDefault();
    if (role === "Admin") {
      navigate("/admin");
    } else if (mode === "login") {
      setDone("Logged in as " + role + ". The dashboard comes in a later phase.");
    } else {
      setDone(
        role === "Faculty"
          ? "Signup sent! Your account is waiting for admin approval."
          : "Signup sent! Check your registration number and log in."
      );
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      {/* Link: back to the landing page */}
      <Link to="/" className="text-warning">← Back to home</Link>
      <h2 className="text-center mb-4 mt-3">Welcome to GradeScan</h2>

      {/* Role tabs: Bootstrap nav-pills */}
      <ul className="nav nav-pills justify-content-center mb-4">
        {roles.map((r) => (
          <li className="nav-item" key={r}>
            <button
              type="button"
              className={"nav-link " + (role === r ? "active" : "")}
              onClick={() => { setRole(r); setDone(null); }}
            >
              {r}
            </button>
          </li>
        ))}
      </ul>

      {done ? (
        // Message after a fake Faculty/Student submit
        <div className="alert alert-success text-center" role="alert">
          <p className="mb-2">{done}</p>
          <button className="btn btn-warning" onClick={() => setDone(null)}>
            Sign in again
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="card-body p-4">
            {/* Login/Sign up toggle: Admin has no signup */}
            {role !== "Admin" && (
              <div className="btn-group w-100 mb-4">
                <button
                  type="button"
                  className={"btn " + (mode === "login" ? "btn-warning" : "btn-outline-warning")}
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={"btn " + (mode === "signup" ? "btn-warning" : "btn-outline-warning")}
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
              </div>
            )}

            {/* Form: Bootstrap form-control + form-label */}
            <form onSubmit={handleSubmit}>
              {role !== "Admin" && mode === "signup" && (
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input className="form-control" type="text" placeholder="Your name" />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" placeholder="you@school.edu" />
              </div>

              {role === "Student" && mode === "signup" && (
                <div className="mb-3">
                  <label className="form-label">Registration number</label>
                  <input className="form-control" type="text" placeholder="e.g. BSE-2024-042" />
                </div>
              )}

              {role === "Faculty" && mode === "signup" && (
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input className="form-control" type="text" placeholder="e.g. AI" />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" type="password" placeholder="••••••" />
              </div>

              {/* Button: Bootstrap Button component*/}
              <button type="submit" className="btn btn-warning w-100">
                {role === "Admin"
                  ? "Log in as Admin"
                  : mode === "login"
                    ? "Log in"
                    : "Create account"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}