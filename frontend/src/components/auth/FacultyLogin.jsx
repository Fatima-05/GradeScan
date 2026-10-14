import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const facultyLoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters").max(30, "Password must be at most 30 characters"),
});

/* Faculty — Log in. Pills and toggle are <Link>s to the other auth pages. */
export default function FacultyLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(facultyLoginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onFacultyLoginSubmit(data) {
    console.log("Faculty login submitted", data);
  }

  return (
    <>
      {/* Role tabs: each pill routes to that role's login page */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/login" className="nav-link active">Faculty</Link>
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
            <Link to="/login" className="btn btn-warning">Login</Link>
            <Link to="/signup" className="btn btn-outline-warning">Sign up</Link>
          </div>

          {/* Fields: Bootstrap form-control + form-label, validated with react-hook-form + zod */}
          <form onSubmit={handleSubmit(onFacultyLoginSubmit)} autoComplete="off">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" placeholder="you@school.edu" autoComplete="off" {...register("email")} />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="••••••" autoComplete="new-password" {...register("password")} />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </div>
            <div className="text-end mb-3">
              <a href="#forgot" className="text-warning small">Forgot password?</a>
            </div>

            {/* Submit button: runs zod validation, then onFacultyLoginSubmit */}
            <button type="submit" className="btn btn-warning w-100">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}
