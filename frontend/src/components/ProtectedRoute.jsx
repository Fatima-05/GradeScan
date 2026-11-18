import { Navigate } from "react-router-dom";

/* Minimal UI guard: no token -> login, wrong stored role -> login.
   The role here is only for UI; the backend still verifies the signed JWT. */
export default function ProtectedRoute({ roles, children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(role)) return <Navigate to="/login" replace />;

  return children;
}
