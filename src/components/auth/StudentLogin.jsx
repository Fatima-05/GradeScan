/* Student — Log in. Static UI: pills and button highlight match this variant. */
export default function StudentLogin() {
  return (
    <>
      {/* Role tabs: Bootstrap nav-pills — visual only */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <button type="button" className="nav-link">Faculty</button>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link">Admin</button>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link active">Student</button>
        </li>
      </ul>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          {/* Login/Sign up toggle: Bootstrap btn-group — visual only */}
          <div className="btn-group w-100 mb-4">
            <button type="button" className="btn btn-warning">Login</button>
            <button type="button" className="btn btn-outline-warning">Sign up</button>
          </div>

          {/* Fields: Bootstrap form-control + form-label */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="you@school.edu" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="••••••" />
          </div>
          <div className="text-end mb-3">
            <a href="#forgot" className="text-warning small">Forgot password?</a>
          </div>

          {/* Button: Bootstrap Button component — visual only */}
          <button type="button" className="btn btn-warning w-100">Log in</button>
        </div>
      </div>
    </>
  );
}