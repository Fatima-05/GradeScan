/* Student — Sign up. Static UI: pills and button highlight match this variant. */
export default function StudentSignup() {
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
            <button type="button" className="btn btn-outline-warning">Login</button>
            <button type="button" className="btn btn-warning">Sign up</button>
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
            <label className="form-label">Registration number</label>
            <input className="form-control" type="text" placeholder="e.g. BSE-2024-042" />
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