import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quizSchema = z.object({
  title: z.string().min(1, "Quiz title is required").min(3, "Quiz title must be at least 3 characters").max(40, "Quiz title must be at most 40 characters"),
  set: z.enum(["Set-A", "Set-B", "Set-C"]),
  className: z.enum(["BSE-4A", "BSE-4B", "BSCS-3A"]),
  subject: z.enum(["AI", "Operating Systems", "Databases"]),
  negative: z.number({ error: "Negative marking is required" }).min(0, "Negative marking cannot be negative").max(1, "Negative marking must be at most 1"),
  passing: z.number({ error: "Passing % is required" }).min(0, "Passing % cannot be negative").max(100, "Passing % must be at most 100"),
  q1: z.enum(["A", "B", "C", "D"]),
  q2: z.enum(["A", "B", "C", "D"]),
  q3: z.enum(["A", "B", "C", "D"]),
  q4: z.enum(["A", "B", "C", "D"]),
  q5: z.enum(["A", "B", "C", "D"]),
  q6: z.enum(["A", "B", "C", "D"]),
  q7: z.enum(["A", "B", "C", "D"]),
  q8: z.enum(["A", "B", "C", "D"]),
  q9: z.enum(["A", "B", "C", "D"]),
  q10: z.enum(["A", "B", "C", "D"]),
  q11: z.enum(["A", "B", "C", "D"]),
  q12: z.enum(["A", "B", "C", "D"]),
  q13: z.enum(["A", "B", "C", "D"]),
  q14: z.enum(["A", "B", "C", "D"]),
  q15: z.enum(["A", "B", "C", "D"]),
  q16: z.enum(["A", "B", "C", "D"]),
});

/* Quizzes: a creator form + the teacher's quiz cards. The 16 answer-key
   selects are written out one by one (Q1–Q8, Q9–Q16). The form validates
   with react-hook-form + zod; the sheet download is a placeholder for the QR. */
export default function Quizzes() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      set: "Set-A",
      className: "BSE-4A",
      subject: "AI",
      negative: 0.25,
      passing: 40,
      q1: "A", q2: "A", q3: "A", q4: "A",
      q5: "A", q6: "A", q7: "A", q8: "A",
      q9: "A", q10: "A", q11: "A", q12: "A",
      q13: "A", q14: "A", q15: "A", q16: "A",
    },
  });

  function onQuizSubmit(data) {
    console.log("Quiz created", data);
  }

  return (
    <>
      <h2 className="mb-1">Quizzes</h2>
      <p className="text-muted mb-4">Create quizzes and manage their answer keys.</p>

      {/* Create card: Bootstrap form-control + form-select + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(onQuizSubmit)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Quiz title</label>
                <input className="form-control" type="text" placeholder="e.g. AI Quiz" {...register("title")} />
                {errors.title && <span className="text-danger">{errors.title.message}</span>}
              </div>
              <div className="col-md-3">
                <label className="form-label">Set</label>
                <select className="form-select" {...register("set")}>
                  <option>Set-A</option>
                  <option>Set-B</option>
                  <option>Set-C</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Class</label>
                <select className="form-select" {...register("className")}>
                  <option>BSE-4A</option>
                  <option>BSE-4B</option>
                  <option>BSCS-3A</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Subject</label>
                <select className="form-select" {...register("subject")}>
                  <option>AI</option>
                  <option>Operating Systems</option>
                  <option>Databases</option>
                </select>
              </div>
              {/* Grading settings prefill from the admin Grading Policy defaults */}
              <div className="col-md-3">
                <label className="form-label">Negative marking</label>
                <input className="form-control" type="number" step="0.01" {...register("negative", { valueAsNumber: true })} />
                {errors.negative && <span className="text-danger">{errors.negative.message}</span>}
              </div>
              <div className="col-md-3">
                <label className="form-label">Passing %</label>
                <input className="form-control" type="number" {...register("passing", { valueAsNumber: true })} />
                {errors.passing && <span className="text-danger">{errors.passing.message}</span>}
              </div>

              {/* Answer key — Part I (Q1–Q8) */}
              <div className="col-12">
                <label className="form-label">Answer key — Part I (Q1–Q8)</label>
                <div className="row g-2">
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q1")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q2")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q3")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q4")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q5")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q6")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q7")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q8")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Answer key — Part II (Q9–Q16) */}
              <div className="col-12">
                <label className="form-label">Answer key — Part II (Q9–Q16)</label>
                <div className="row g-2">
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q9")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q10")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q11")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q12")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q13")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q14")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q15")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                  <div className="col-3 col-md-2">
                    <select className="form-select" {...register("q16")}>
                      <option>A</option><option>B</option><option>C</option><option>D</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit button: runs zod validation, then onQuizSubmit */}
            <button type="submit" className="btn btn-warning mt-3 px-4">Create quiz</button>
          </form>
        </div>
      </div>

      {/* Quiz list: hard-coded cards */}
      <h4 className="mb-3">Your quizzes</h4>
      <div className="row g-4">
        {/* Quiz 1 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">
                AI Quiz <span className="badge bg-secondary">Set-C</span>
              </h6>
              <small className="text-muted">BSE-4A · AI · 16 questions · 30 min</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">Neg: 0 · 16 questions</small>
                {/* Sheet download: placeholder for the QR sheet */}
                <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
              </div>
            </div>
          </div>
        </div>
        {/* Quiz 2 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title">
                AI Quiz <span className="badge bg-secondary">Set-A</span>
              </h6>
              <small className="text-muted">BSE-4A · AI · 16 questions · 30 min</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">Neg: 0.25 · 16 questions</small>
                <a href="#" className="btn btn-warning btn-sm">Download sheet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
