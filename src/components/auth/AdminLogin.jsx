/* Admin — Log in. Static UI: Admin has no sign up, so there is no toggle. */
export default function AdminLogin() {
  return (
    <>
      {/* Role tabs: Bootstrap nav-pills — visual only */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <button type="button" className="nav-link">Faculty</button>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link active">Admin</button>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link">Student</button>
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