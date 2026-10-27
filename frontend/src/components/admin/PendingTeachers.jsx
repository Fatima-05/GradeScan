import { useState } from "react";
import { approveTeacherAxiosFunction, declineTeacherAxiosFunction } from "../../service/api";

const initialTeachers = [
  { name: "Ali Raza",  email: "ali.raza@school.edu",  subject: "Physics",           initials: "AR" },
  { name: "Sara Ahmed", email: "sara.ahmed@school.edu", subject: "AI",                initials: "SA" },
  { name: "Hamza Khan", email: "hamza.khan@school.edu", subject: "Operating Systems", initials: "HK" },
];
// Mock data for pending teachers; in a real app, this would come from a GET request to the backend

/* Pending Teachers: cards are local state so Approve/Reject removes the card
   from the UI after the write succeeds. The DB change is visible in Compass;
   the UI can't refresh from the DB without a GET. */
export default function PendingTeachers() {
  const [teachers, setTeachers] = useState(initialTeachers); //this state holds the list of pending teachers

  async function onTeacherApprove(email) { //this function is called when the Approve button is clicked
    try {
      const response = await approveTeacherAxiosFunction({ email: email }); //is se email ko backend me bhej rahe hain jahan isay match karke approve karna hai
      console.log("Teacher approved", response.data);
      setTeachers((prev) => prev.filter((t) => t.email !== email)); //is se UI se remove kar rahe hain through filter function, jo email ko match karke remove kar deta hai
    } catch (error) {
      console.log("Approve failed", error);
    }
  }

  async function onTeacherDecline(email) { //this function is called when the Reject button is clicked
    try {
      const response = await declineTeacherAxiosFunction({ email: email }); //is se email ko backend me bhej rahe hain jahan isay match karke decline karna hai
      console.log("Teacher declined", response.data);
      setTeachers((prev) => prev.filter((t) => t.email !== email)); //is se UI se remove kar rahe hain through filter function, jo email ko match karke remove kar deta hai
    } catch (error) {
      console.log("Decline failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-4">Pending Teacher Signups</h2>
      {teachers.length === 0 ? (
        <div className="alert alert-success">No pending teachers — all reviewed.</div>
      ) : (
        <div className="row g-4">
          {teachers.map((t) => (
            <div className="col-lg-4" key={t.email}>
              <div className="card h-100">
                <div className="card-body">
                  {/* Avatar: Bootstrap rounded-circle utility */}
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                      style={{ width: "44px", height: "44px" }}
                    >
                      <strong>{t.initials}</strong>
                    </div>
                    <div>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.email}</small>
                    </div>
                  </div>
                  <span className="badge bg-secondary mb-3">{t.subject}</span>
                  {/* Buttons: one per card, send this teacher's email */}
                  <div className="d-flex gap-2">
                    <button className="btn btn-warning btn-sm flex-fill" onClick={() => onTeacherApprove(t.email)}>Approve</button>
                    <button className="btn btn-outline-warning btn-sm flex-fill" onClick={() => onTeacherDecline(t.email)}>Reject</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
