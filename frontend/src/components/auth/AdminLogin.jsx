import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const adminLoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters").max(30, "Password must be at most 30 characters"),
});

/* Admin — Log in. Pills route to the other roles. Admin has no sign up. */
export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onAdminLoginSubmit(data) {
    console.log("Admin login submitted", data);
  }

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
          {/* Fields: Bootstrap form-control + form-label, validated with react-hook-form + zod */}
          <form onSubmit={handleSubmit(onAdminLoginSubmit)} autoComplete="off">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" placeholder="admin@school.edu" autoComplete="off" {...register("email")} />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="••••••" autoComplete="new-password" {...register("password")} />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </div>

            {/* Submit button: runs zod validation, then onAdminLoginSubmit */}
            <button type="submit" className="btn btn-warning w-100">Log in as Admin</button>
          </form>
        </div>
      </div>
    </>
  );
}
