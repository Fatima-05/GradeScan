/* Regrade: queue of student-submitted requests for this teacher's quizzes.
   The note for the student is written before deciding (visual only), and
   processed requests show no note box. Static UI — statuses are hard-coded. */
import { useForm } from "react-hook-form";
import { regradeDecisionAxiosFunction } from "../../service/api";

export default function Regrade() {
  const { register, getValues, setError, clearErrors, formState: { errors } } = useForm({ defaultValues: { teacherNote: "" } });

  async function onRegradeDecision(status) { //this function is called when the Approve or Reject button is clicked
    if (status === "rejected") { //if the teacher is rejecting the request, check that a note has been added
      const note = (getValues("teacherNote") || "").trim(); //get the value of the teacherNote field and trim whitespace
      if (note.length < 15) { //if the note is less than 15 characters, set an error on the teacherNote field
        setError("teacherNote", { type: "manual", message: "Add a note with at least 15 characters." });
        return;
      }
    }
    clearErrors("teacherNote"); //clear any existing errors on the teacherNote field
    try {
      const response = await regradeDecisionAxiosFunction({ //is se data ko backend me bhej rahe hain
        quiz: "AI Quiz (Set-C)",
        questionNumber: 6,
        status: status,
        teacherNote: getValues("teacherNote"),
      }); //send the quiz, question number, status, and teacher note to the backend
      console.log("Regrade " + status, response.data);
    } catch (error) {
      console.log("Regrade decision failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-1">Regrade Requests</h2>
      <p className="text-muted mb-4">Students flagged a question — review and decide.</p>

      {/* Request 1 — still pending */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-C) — Q6</h6>
              <p className="mb-1">
                <strong>Ayesha Khan</strong> · <span className="text-muted">27 Sep 2026</span>
              </p>
              <p className="mb-2 text-muted">aik mark se grade change ho raha hai plis</p>
              {/* The note is written first, then Approve/Reject */}
              <textarea className="form-control mb-2" rows="2" placeholder="Add a note for the student…" {...register("teacherNote")}></textarea>
              {errors.teacherNote && <span className="text-danger d-block mt-1 mb-2">{errors.teacherNote.message}</span>}
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-warning btn-sm" onClick={() => onRegradeDecision("approved")}>Approve</button>
                <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => onRegradeDecision("rejected")}>Reject</button>
              </div>
            </div>
            <span className="badge text-white" style={{ background: "#a8763e" }}>Pending</span>
          </div>
        </div>
      </div>

      {/* Request 2 — already processed: no note box is shown */}
      <div className="card mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">AI Quiz (Set-A) — Q3</h6>
              <p className="mb-1">
                <strong>Ansa Irshad</strong> · <span className="text-muted">24 Sep 2026</span>
              </p>
              <p className="mb-2 text-muted">The scanner may have skipped my bubble.</p>
            </div>
            <span className="badge text-white" style={{ background: "#6f1a07" }}>Approved</span>
          </div>
        </div>
      </div>
    </>
  );
}