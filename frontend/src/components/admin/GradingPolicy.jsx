import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gradingPolicyAxiosFunction, getGradingPolicyAxiosFunction } from "../../service/api";

const gradingPolicySchema = z.object({
  negative: z.number({ error: "Negative marking is required" }).min(0, "Negative marking cannot be negative").max(1, "Negative marking must be at most 1"),
  passing: z.number({ error: "Passing percentage is required" }).min(0, "Passing percentage cannot be negative").max(100, "Passing percentage must be at most 100"),
  gradeA: z.number({ error: "Grade A is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeAm: z.number({ error: "Grade A- is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeBp: z.number({ error: "Grade B+ is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeB: z.number({ error: "Grade B is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeBm: z.number({ error: "Grade B- is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeCp: z.number({ error: "Grade C+ is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeC: z.number({ error: "Grade C is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeCm: z.number({ error: "Grade C- is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
  gradeD: z.number({ error: "Grade D is required" }).min(0, "Minimum is 0").max(100, "Maximum is 100"),
});

/* Grading Policy: editable defaults fetched from DB. */
export default function GradingPolicy() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(gradingPolicySchema),
    defaultValues: {
      negative: 0.25,
      passing: 40,
      gradeA: 90,
      gradeAm: 85,
      gradeBp: 80,
      gradeB: 75,
      gradeBm: 70,
      gradeCp: 65,
      gradeC: 60,
      gradeCm: 55,
      gradeD: 50,
    },
  });

  async function fetchPolicy() {
    try {
      const result = await getGradingPolicyAxiosFunction();
      if (result.data) {
        reset({
          negative: result.data.negative ?? 0.25,
          passing: result.data.passing ?? 40,
          gradeA: result.data.gradeA ?? 90,
          gradeAm: result.data.gradeAm ?? 85,
          gradeBp: result.data.gradeBp ?? 80,
          gradeB: result.data.gradeB ?? 75,
          gradeBm: result.data.gradeBm ?? 70,
          gradeCp: result.data.gradeCp ?? 65,
          gradeC: result.data.gradeC ?? 60,
          gradeCm: result.data.gradeCm ?? 55,
          gradeD: result.data.gradeD ?? 50,
        });
      }
    } catch (error) {
      console.log("Failed to fetch grading policy", error);
    }
  }

  useEffect(() => {
    fetchPolicy();
  }, []);

  async function onGradingPolicySubmit(data) { //this function is called when the Save defaults button is clicked
    try {
      const response = await gradingPolicyAxiosFunction(data); //is se data ko backend me bhej rahe hain
      console.log("Grading policy saved", response.data);
    } catch (error) {
      console.log("Grading policy failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-4">Grading Policy Defaults</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onGradingPolicySubmit)}>
            {/* Fields: Bootstrap grid so the card fills the content area instead of a narrow column */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Negative marking per wrong answer</label>
                <input className="form-control" type="number" step="0.01" {...register("negative", { valueAsNumber: true })} />
                {errors.negative && <span className="text-danger">{errors.negative.message}</span>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Passing percentage</label>
                <input className="form-control" type="number" {...register("passing", { valueAsNumber: true })} />
                {errors.passing && <span className="text-danger">{errors.passing.message}</span>}
              </div>
            </div>
            <div className="mb-4">
              {/* Label for each grade, one number input below it */}
              <label className="form-label">Grade boundaries — minimum % for each grade</label>
              <div className="row row-cols-lg-3 row-cols-md-2 g-3">
                {/* A */}
                <div className="col">
                  <label className="form-label mb-1 small">A</label>
                  <input className="form-control" type="number" {...register("gradeA", { valueAsNumber: true })} />
                  {errors.gradeA && <span className="text-danger">{errors.gradeA.message}</span>}
                </div>
                {/* A- */}
                <div className="col">
                  <label className="form-label mb-1 small">A-</label>
                  <input className="form-control" type="number" {...register("gradeAm", { valueAsNumber: true })} />
                  {errors.gradeAm && <span className="text-danger">{errors.gradeAm.message}</span>}
                </div>
                {/* B+ */}
                <div className="col">
                  <label className="form-label mb-1 small">B+</label>
                  <input className="form-control" type="number" {...register("gradeBp", { valueAsNumber: true })} />
                  {errors.gradeBp && <span className="text-danger">{errors.gradeBp.message}</span>}
                </div>
                {/* B */}
                <div className="col">
                  <label className="form-label mb-1 small">B</label>
                  <input className="form-control" type="number" {...register("gradeB", { valueAsNumber: true })} />
                  {errors.gradeB && <span className="text-danger">{errors.gradeB.message}</span>}
                </div>
                {/* B- */}
                <div className="col">
                  <label className="form-label mb-1 small">B-</label>
                  <input className="form-control" type="number" {...register("gradeBm", { valueAsNumber: true })} />
                  {errors.gradeBm && <span className="text-danger">{errors.gradeBm.message}</span>}
                </div>
                {/* C+ */}
                <div className="col">
                  <label className="form-label mb-1 small">C+</label>
                  <input className="form-control" type="number" {...register("gradeCp", { valueAsNumber: true })} />
                  {errors.gradeCp && <span className="text-danger">{errors.gradeCp.message}</span>}
                </div>
                {/* C */}
                <div className="col">
                  <label className="form-label mb-1 small">C</label>
                  <input className="form-control" type="number" {...register("gradeC", { valueAsNumber: true })} />
                  {errors.gradeC && <span className="text-danger">{errors.gradeC.message}</span>}
                </div>
                {/* C- */}
                <div className="col">
                  <label className="form-label mb-1 small">C-</label>
                  <input className="form-control" type="number" {...register("gradeCm", { valueAsNumber: true })} />
                  {errors.gradeCm && <span className="text-danger">{errors.gradeCm.message}</span>}
                </div>
                {/* D */}
                <div className="col">
                  <label className="form-label mb-1 small">D</label>
                  <input className="form-control" type="number" {...register("gradeD", { valueAsNumber: true })} />
                  {errors.gradeD && <span className="text-danger">{errors.gradeD.message}</span>}
                </div>
              </div>
              <small className="text-muted">A score below D is an F.</small>
            </div>
            {/* Submit button: runs zod validation, then onGradingPolicySubmit */}
            <button type="submit" className="btn btn-warning">Save defaults</button>
          </form>
        </div>
      </div>
    </>
  );
}
