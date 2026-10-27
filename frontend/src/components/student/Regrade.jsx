import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { regradeAxiosFunction } from "../../service/api";

const regradeSchema = z.object({
  registrationNumber: z.string().min(1, "Registration number is required").regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
  quiz: z.enum(["AI Quiz (Set-C)", "OS Quiz (Set-A)", "DS Quiz (Set-A)"]),
  questionNumber: z.number({ error: "Question number is required" }).int("Question number must be a whole number").min(1, "Question number must be at least 1").max(18, "Question number must be at most 18"),
  reason: z.string().min(1, "Reason is required").min(10, "Reason must be at least 10 characters").max(200, "Reason must be at most 200 characters"),
});

/* Regrade Request (student side): a form to flag a question, plus the status
   of past requests. The form validates with react-hook-form + zod. */
export default function Regrade() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(regradeSchema),
    defaultValues: { registrationNumber: "", quiz: "AI Quiz (Set-C)", questionNumber: undefined, reason: "" },
  });

  async function onRegradeSubmit(data) { //this function is called when the Send request button is clicked
    try {
      const response = await regradeAxiosFunction(data); //is se data ko backend me bhej rahe hain
      console.log("Regrade request sent", response.data);
    } catch (error) {
      console.log("Regrade failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-1">Regrade Request</h2>
      <p className="text-muted mb-4">Ask your teacher to re-check an answer.</p>

      {/* Request form: Bootstrap form-select + form-control + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(onRegradeSubmit)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Quiz</label>
                <select className="form-select" {...register("quiz")}>
                  <option>AI Quiz (Set-C)</option>
                  <option>OS Quiz (Set-A)</option>
                  <option>DS Quiz (Set-A)</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Registration number</label>
                <input className="form-control" placeholder="e.g. FA24-BSE-000" {...register("registrationNumber")} />
                {errors.registrationNumber && <span className="text-danger">{errors.registrationNumber.message}</span>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Question number</label>
                <input className="form-control" type="number" placeholder="e.g. 15" {...register("questionNumber", { valueAsNumber: true })} />
                {errors.questionNumber && <span className="text-danger">{errors.questionNumber.message}</span>}
              </div>
              <div className="col-12">
                <label className="form-label">Reason</label>
                <textarea className="form-control" rows="3" placeholder="Explain what went wrong…" {...register("reason")}></textarea>
                {errors.reason && <span className="text-danger">{errors.reason.message}</span>}
              </div>
            </div>
            {/* Submit button: runs zod validation, then onRegradeSubmit */}
            <button type="submit" className="btn btn-warning mt-3 px-4">Send request</button>
          </form>
        </div>
      </div>

      {/* Request status: the teacher approves or rejects later */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Request status</h4>
        <span className="badge bg-secondary">2 total</span>
      </div>
      {/* Newest request — still pending */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-C) — Q15</h6>
              <p className="mb-1 text-muted">I think the scanner missed the bubble.</p>
              <small className="text-muted">Sent 20 Sep 2026</small>
            </div>
            <span className="badge text-white" style={{ background: "#a8763e" }}>Pending</span>
          </div>
        </div>
      </div>
      {/* Earlier request — already decided by the teacher */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-A) — Q3</h6>
              <p className="mb-1 text-muted">The scanner may have skipped my bubble.</p>
              <small className="text-muted">Sent 12 Sep 2026</small>
            </div>
            <span className="badge text-white" style={{ background: "#6f1a07" }}>Approved</span>
          </div>
        </div>
      </div>
    </>
  );
}
