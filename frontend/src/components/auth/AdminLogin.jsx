import { Link } from "react-router-dom";

/* Admin — Log in. Pills route to the other roles. Admin has no sign up. */
export default function AdminLogin() {
  return (
    <>
      {/* Role tabs: each pill routes to that role's login page */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Faculty</Link>
        </li>
        <li className="nav-item">
          <Link to="/login/admin" className="nav-link active">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/login/student" className="nav-link">Student</Link>
        </li>
      </ul>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          {/* Fields: Bootstrap form-control + form-label */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="admin@school.edu" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="••••••" />
          </div>

          {/* Button: Bootstrap Button component — visual only */}
          <button type="button" className="btn btn-warning w-100">Log in as Admin</button>
        </div>
      </div>
    </>
  );
}