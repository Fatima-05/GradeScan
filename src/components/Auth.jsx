import FacultyLogin from "./auth/FacultyLogin.jsx";
import FacultySignup from "./auth/FacultySignup.jsx";
import AdminLogin from "./auth/AdminLogin.jsx";
import StudentLogin from "./auth/StudentLogin.jsx";
import StudentSignup from "./auth/StudentSignup.jsx";

/* Auth: split layout. Left brand panel, right form. Every role/mode combo
   lives in its own file, imported above (unused ones are dropped by the
   bundler). To switch forms, uncomment the one you want below and comment
   out the others — same idea as switching pages in App.jsx. */
export default function Auth() {
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
          {/* Link: placeholder — switch the page in App.jsx */}
          <a href="#/" className="text-warning">← Back to home</a>
          <h2 className="mt-3 mb-1">Welcome!</h2>
          <p className="text-muted mb-4">Log in or create your account.</p>

          {/* The visible form — uncomment one, keep the rest commented */}
          {/* <FacultySignup /> */}
          {/* <FacultyLogin /> */}
          {/* <AdminLogin /> */}
          {/* <StudentLogin /> */}
          {/* <StudentSignup /> */}
        </div>
      </div>
    </div>
  );
}