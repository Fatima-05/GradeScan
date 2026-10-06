import { Link } from "react-router-dom";

/* Faculty — Sign up. Pills and toggle are <Link>s to the other auth pages. */
export default function FacultySignup() {
  return (
    <>
      {/* Role tabs: each pill routes to that role's login page */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/signup" className="nav-link active">Faculty</Link>
        </li>
        <li className="nav-item">
          <Link to="/login/admin" className="nav-link">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/login/student" className="nav-link">Student</Link>
        </li>
      </ul>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          {/* Login/Sign up toggle: switches mode for this role */}
          <div className="btn-group w-100 mb-4">
            <Link to="/login" className="btn btn-outline-warning">Login</Link>
            <Link to="/signup" className="btn btn-warning">Sign up</Link>
          </div>

          {/* Fields: Bootstrap form-control + form-label */}
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input className="form-control" type="text" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="you@school.edu" />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input className="form-control" type="text" placeholder="e.g. AI" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="••••••" />
          </div>

          {/* Button: Bootstrap Button component — visual only */}
          <button type="button" className="btn btn-warning w-100">Create account</button>
        </div>
      </div>
    </>
  );
}