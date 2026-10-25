import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSignupAxiosFunction } from "../../service/api";

const studentSignupSchema = z.object({
  fullName: z.string().min(1, "Full name is required").min(2, "Full name must be at least 2 characters").max(40, "Full name must be at most 40 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  registrationNumber: z.string().min(1, "Registration number is required")
    .regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters").max(30, "Password must be at most 30 characters"),
});

/* Student — Sign up. Pills and toggle are <Link>s to the other auth pages. */
export default function StudentSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(studentSignupSchema),
    defaultValues: { fullName: "", email: "", registrationNumber: "", password: "" },
  });

  async function onStudentSignupSubmit(data) {
    try {
      const response = await studentSignupAxiosFunction(data);
      console.log("Student registered", response.data);
    } catch (error) {
      console.log("Signup failed", error);
    }
  }
  // JSX for the student signup form, including role tabs, login/signup toggle, and form fields with validation messages

  return (
    <>
      {/* Role tabs: each pill routes to that role's login page */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Faculty</Link>
        </li>
        <li className="nav-item">
          <Link to="/login/admin" className="nav-link">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup/student" className="nav-link active">Student</Link>
        </li>
      </ul>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          {/* Login/Sign up toggle: switches mode for this role */}
          <div className="btn-group w-100 mb-4">
            <Link to="/login/student" className="btn btn-outline-warning">Login</Link>
            <Link to="/signup/student" className="btn btn-warning">Sign up</Link>
          </div>

          {/* Fields: Bootstrap form-control + form-label, validated with react-hook-form + zod */}
          <form onSubmit={handleSubmit(onStudentSignupSubmit)}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input className="form-control" type="text" placeholder="Your name" {...register("fullName")} />
              {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" placeholder="you@school.edu" {...register("email")} />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Registration number</label>
              <input className="form-control" type="text" placeholder="e.g. FA24-BSE-000" {...register("registrationNumber")} />
              {errors.registrationNumber && <span className="text-danger">{errors.registrationNumber.message}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="••••••" {...register("password")} />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </div>

            {/* Submit button: runs zod validation, then onStudentSignupSubmit */}
            <button type="submit" className="btn btn-warning w-100">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}
