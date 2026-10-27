import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { facultySignupAxiosFunction } from "../../service/api";

const facultySignupSchema = z.object({
  fullName: z.string().min(1, "Full name is required").min(2, "Full name must be at least 2 characters").max(40, "Full name must be at most 40 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters").max(30, "Password must be at most 30 characters"),
});

/* Faculty — Sign up. Pills and toggle are <Link>s to the other auth pages. */
export default function FacultySignup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(facultySignupSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  async function onFacultySignupSubmit(data) { //this function is called when the Create account button is clicked
  try {
    const response = await facultySignupAxiosFunction(data); //is se data ko backend me bhej rahe hain
    console.log("Teacher registered", response.data);
  } catch (error) {
    console.log("Signup failed", error);
  }
  } // is function ko frontend ke FacultySignup.jsx component se call kiya jayega jab user signup form submit karega. Ye function backend ke /signup route pe POST request bhejega aur data ko send karega.

  return (
    <>
      {/* Role tabs: each pill routes to that role's login page */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/signup" className="nav-link active">Faculty</Link>
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
            <Link to="/login" className="btn btn-outline-warning">Login</Link>
            <Link to="/signup" className="btn btn-warning">Sign up</Link>
          </div>

          {/* Fields: Bootstrap form-control + form-label, validated with react-hook-form + zod */}
          <form onSubmit={handleSubmit(onFacultySignupSubmit)}>
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
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="••••••" {...register("password")} />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </div>

            {/* Submit button: runs zod validation, then onFacultySignupSubmit */}
            <button type="submit" className="btn btn-warning w-100">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}
