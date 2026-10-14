import { Link } from "react-router-dom";
import FacultyLogin from "./auth/FacultyLogin.jsx";
import FacultySignup from "./auth/FacultySignup.jsx";
import AdminLogin from "./auth/AdminLogin.jsx";
import StudentLogin from "./auth/StudentLogin.jsx";
import StudentSignup from "./auth/StudentSignup.jsx";

/* Auth: split layout, left brand panel and right form. The router decides
   which form to show by passing a `form` prop (e.g. /login/student passes
   "student-login"). All five variants live in the auth/ folder and the matching
   one below is picked. */
export default function Auth({ form }) {
  let content;
  if (form === "faculty-login") content = <FacultyLogin />;
  else if (form === "faculty-signup") content = <FacultySignup />;
  else if (form === "admin-login") content = <AdminLogin />;
  else if (form === "student-login") content = <StudentLogin />;
  else content = <StudentSignup />;

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
          {/* Link: back to the landing page */}
          <Link to="/" className="text-warning">← Back to home</Link>
          <h2 className="mt-3 mb-1">Welcome!</h2>
          <p className="text-muted mb-4">Log in or create your account.</p>

          {/* The form chosen by the current route */}
          {content}
        </div>
      </div>
    </div>
  );
}