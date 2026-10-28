import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginAxiosFunction } from "../../service/api";

const adminLoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters").max(30, "Password must be at most 30 characters"),
});

/* Admin — Log in. Pills route to the other roles. Admin has no sign up. */
export default function AdminLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: zodResolver(adminLoginSchema), 
    defaultValues: { email: "", password: "" },
  });

  async function onAdminLoginSubmit(data) { // ye function form ke onSubmit event ke liye hai, jisme user admin login karega. Ye function admin login ko backend pe send karega aur response ko receive karega
    try {
      const response = await adminLoginAxiosFunction(data); // data ko backend pe bhej rahe hain
      console.log("Admin logged in", response.data);
      navigate("/admin"); // agar user exist karta hai tou admin dashboard pe le jao
    } catch (error) {
      console.log("Admin login failed", error.response?.data || error);
      alert(error.response?.data || "Login failed"); // user ko dikhana k user nahi mila
    }
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
