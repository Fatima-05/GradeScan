import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { regradeAxiosFunction, getStudentRegradesAxiosFunction, getQuizzesAxiosFunction } from "../../service/api";

const regradeSchema = z.object({
  registrationNumber: z.string().min(1, "Registration number is required").regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
  quiz: z.string().min(1, "Select a quiz"),
  questionNumber: z.number({ error: "Question number is required" }).int("Question number must be a whole number").min(1, "Question number must be at least 1").max(16, "Question number must be at most 16"),
  reason: z.string().min(1, "Reason is required").min(10, "Reason must be at least 10 characters").max(200, "Reason must be at most 200 characters"),
});

export default function Regrade() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(regradeSchema),
    defaultValues: { registrationNumber: "", quiz: "", questionNumber: undefined, reason: "" },
  }); 

  const [requests, setRequests] = useState([]); // is state variable mei student ke regrade requests ka data store hoga jo backend se fetch kiya jayega
  const [quizzes, setQuizzes] = useState([]); // is state variable mei quizzes ka data store hoga jo backend se fetch kiya jayega

  async function loadStudentRegrades() { // ye function backend se student ke regrade requests ka data fetch karega aur state variable mei store karega
    try {
      const result = await getStudentRegradesAxiosFunction(); // ye function backend ke /regrades/student route pe GET request bhejega aur data ko receive karega

      setRequests(result.data || []); // agar result.data exist karta hai tou usko setRequests mei store karo, warna empty array store karo

    } catch (error) {
      console.log("Failed to fetch student regrades", error);
    }
  }

  async function loadQuizzes() { // ye function backend se quizzes ka data fetch karega taake dropdown hard-coded na ho
    try {
      const result = await getQuizzesAxiosFunction();
      const quizData = result.data || [];

      setQuizzes(quizData);

      if (quizData.length > 0) { // pehli quiz ko default selection banao
        reset({
          registrationNumber: "",
          quiz: `${quizData[0].title} (${quizData[0].set})`,
          questionNumber: undefined,
          reason: "",
        });
      }
    } catch (error) {
      console.log("Failed to fetch quizzes", error);
    }
  }

  useEffect(() => { // ye hook component ke mount hone ke baad call hoga, aur regrades aur quizzes fetch karega
    loadStudentRegrades();
    loadQuizzes();
  }, []); // ye empty dependency array ka matlab hai ki ye effect sirf component ke mount hone ke baad run hoga, aur kabhi bhi re-run nahi hoga

  async function onRegradeSubmit(data) { // ye function form ke onSubmit event ke liye hai, jisme user regrade request bhejega. Ye function regrade request ko backend pe send karega aur response ko receive karega

    try {
      const response = await regradeAxiosFunction(data); // ye function backend ke /regrades route pe POST request bhejega aur data ko send karega. Ye function regrade request ko backend pe create karega aur response ko receive karega

      console.log("Regrade request sent", response.data);
      reset({
        registrationNumber: "",
        quiz: quizzes.length > 0 ? `${quizzes[0].title} (${quizzes[0].set})` : "",
        questionNumber: undefined,
        reason: "",
      });
      await loadStudentRegrades(); // ye line loadStudentRegrades function ko call karegi, jisse student ke regrade requests ka data backend se fetch hoga aur state variable mei store hoga
      
    } catch (error) {
      console.log("Regrade failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-1">Regrade Request</h2>
      <p className="text-muted mb-4">Ask your teacher to re-check an answer.</p>

      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(onRegradeSubmit)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Quiz</label>
                <select className="form-select" {...register("quiz")} disabled={quizzes.length === 0}>
                  {quizzes.length === 0 ? (
                    <option value="">No quizzes available</option>
                  ) : (
                    quizzes.map((q) => (
                      <option key={q._id || `${q.title}-${q.set}`} value={`${q.title} (${q.set})`}>
                        {q.title} ({q.set})
                      </option>
                    ))
                  )}
                </select>
                {errors.quiz && <span className="text-danger">{errors.quiz.message}</span>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Registration number</label>
                <input className="form-control" placeholder="e.g. FA24-BSE-000" {...register("registrationNumber")} />
                {errors.registrationNumber && <span className="text-danger">{errors.registrationNumber.message}</span>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Question number</label>
                <input className="form-control" type="number" min="1" max="16" placeholder="e.g. 15" {...register("questionNumber", { valueAsNumber: true })} />
                {errors.questionNumber && <span className="text-danger">{errors.questionNumber.message}</span>}
              </div>

              <div className="col-12">
                <label className="form-label">Reason</label>
                <textarea className="form-control" rows="3" placeholder="Explain what went wrong…" {...register("reason")}></textarea>
                {errors.reason && <span className="text-danger">{errors.reason.message}</span>}
              </div>
            </div>

            <button type="submit" className="btn btn-warning mt-3 px-4">Send request</button>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Request status</h4>
        <span className="badge bg-secondary">{requests.length} total</span>
      </div>

      {requests.length === 0 ? (
        <div className="alert alert-success">No regrade requests.</div>
      ) : (
        requests.map((r, idx) => (
          <div className="card mb-2" key={r._id || idx}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">{r.quiz || "Unknown Quiz"} — Q{r.questionNumber || "?"}</h6>
                  <p className="mb-1 text-muted">{r.reason || "No reason provided"}</p>
                  <small className="text-muted">
                    {r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "Sent recently"}
                  </small>
                </div>

                <span
                  className="badge text-white"
                  style={{
                    background:
                      r.status === "approved"
                        ? "#6f1a07"
                        : r.status === "rejected"
                          ? "#a8763e"
                          : "#a8763e",
                  }}
                >
                  {r.status || "Pending"}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
