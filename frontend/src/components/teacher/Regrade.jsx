import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { regradeDecisionAxiosFunction, getTeacherRegradesAxiosFunction } from "../../service/api";

export default function Regrade() {
  const { setError, clearErrors, formState: { errors } } = useForm(); // react-hook-form ka use karke form validation aur error handling kar rahe hain
  const [regrades, setRegrades] = useState([]); // is state variable mei regrades ka data store hoga jo backend se fetch kiya jayega
  const [noteMap, setNoteMap] = useState({}); // is state variable mei har regrade request ke liye note ka data store hoga, jise user textarea mei type karega
  const [errorMap, setErrorMap] = useState({}); // is state variable mei har regrade request ke liye error message ka data store hoga, jise user ko dikhaya jayega agar note validation fail hota hai

  async function fetchRegrades() { // ye function backend se regrades ka data fetch karega aur state variable mei store karega
    try {
      const result = await getTeacherRegradesAxiosFunction(); // ye function backend ke /regrades/teacher route pe GET request bhejega aur data ko receive karega
      const pendingOnly = (result.data || []).filter((r) => (r.status || "pending") === "pending"); // ye line sirf pending regrades ko filter karegi aur unko state variable mei store karegi
      setRegrades(pendingOnly); // agar result.data exist karta hai tou usko setRegrades mei store karo, warna empty array store karo
    } catch (error) {
      console.log("Failed to fetch regrades", error);
    }
  }

  useEffect(() => { // ye hook component ke mount hone ke baad call hoga, aur fetchRegrades function ko call karega
    fetchRegrades(); // ye function backend se regrades ka data fetch karega aur state variable mei store karega
  }, []); // ye empty dependency array ka matlab hai ki ye effect sirf component ke mount hone ke baad run hoga, aur kabhi bhi re-run nahi hoga

  function handleNoteChange(id, value) { // ye function textarea ke onChange event ke liye hai, jisme user note type karega. Ye function noteMap state variable ko update karega aur errorMap state variable se error message ko remove karega
    setNoteMap((prev) => ({ ...prev, [id]: value })); // ye line noteMap state variable ko update karegi, jisme id ke corresponding value ko set karegi
    setErrorMap((prev) => { // ye line errorMap state variable ko update karegi, jisme id ke corresponding error message ko remove karegi
      const next = { ...prev };
      delete next[id];
      return next;
    }); // ye line clearErrors function ko call karegi, jisse react-hook-form ke errors state variable se error message remove ho jayega
  }

  async function onRegradeDecision(status, id) {
    const note = (noteMap[id] || "").trim(); // ye line noteMap state variable se id ke corresponding note ko fetch karegi aur usko trim karegi, jisse whitespace remove ho jayega

    if (status === "rejected" && note.length < 15) { // agar status rejected hai aur note ki length 15 characters se kam hai, tou error message set karega aur function return karega
      setErrorMap((prev) => ({
        ...prev,
        [id]: "Add a note with at least 15 characters.",
      })); // ye line setError function ko call karegi, jisse react-hook-form ke errors state variable mei error message set ho jayega
      return;
    }

    clearErrors();

    try {
      const response = await regradeDecisionAxiosFunction({
        id,
        status,
        teacherNote: note,
      }); // ye function backend ke /regrades/decision route pe POST request bhejega aur data ko send karega. Ye function regrade decision ko backend pe update karega aur response ko receive karega

      console.log("Regrade " + status, response.data);

      setRegrades((prev) => prev.filter((r) => r._id !== id)); // ye line regrades state variable ko update karegi, jisme id ke corresponding regrade request ko remove karegi
      setNoteMap((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      }); // ye line noteMap state variable ko update karegi, jisme id ke corresponding note ko remove karegi
      setErrorMap((prev) => {
        const next = { ...prev }; // ye line errorMap state variable ko update karegi, jisme id ke corresponding error message ko remove karegi
        delete next[id]; // ye line clearErrors function ko call karegi, jisse react-hook-form ke errors state variable se error message remove ho jayega
        return next;
      });
    } catch (error) {
      console.log("Regrade decision failed", error); 
    }
  }

  return (
    <>
      <h2 className="mb-1">Regrade Requests</h2>
      <p className="text-muted mb-4">Students flagged a question — review and decide.</p>

      {regrades.length === 0 ? (
        <div className="alert alert-success">No regrade requests.</div>
      ) : (
        regrades.map((r, idx) => (
          <div className="card mb-2" key={r._id || idx}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">{r.quiz || r.quizName} — Q{r.questionNumber || r.question}</h6>
                  <p className="mb-1">
                    <strong>{r.studentName || r.fullName}</strong> · <span className="text-muted">{r.date || ""}</span>
                  </p>
                  <p className="mb-2 text-muted">{r.reason || r.reasonText}</p>

                  <textarea
                    className="form-control mb-2"
                    rows="2"
                    placeholder="Add a note for the student…"
                    value={noteMap[r._id] || ""}
                    onChange={(e) => handleNoteChange(r._id, e.target.value)}
                  />

                  {errorMap[r._id] && (
                    <span className="text-danger d-block mt-1 mb-2">{errorMap[r._id]}</span>
                  )}

                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => onRegradeDecision("approved", r._id)}>Approve</button>
                    <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => onRegradeDecision("rejected", r._id)}>Reject</button>
                  </div>
                </div>
                <span className="badge text-white" style={{ background: "#a8763e" }}>{r.status || "Pending"}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}