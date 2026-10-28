import { useState, useEffect } from "react";
import { approveTeacherAxiosFunction, declineTeacherAxiosFunction, getPendingTeachersAxiosFunction } from "../../service/api";

/* Pending Teachers: fetched from DB, approve/reject remove card. */
export default function PendingTeachers() {
  const [teachers, setTeachers] = useState([]);

  async function fetchTeachers() {
    try {
      const result = await getPendingTeachersAxiosFunction();
      setTeachers(result.data || []);
    } catch (error) {
      console.log("Failed to fetch pending teachers", error);
    }
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  async function onTeacherApprove(email) { //this function is called when the Approve button is clicked
    try {
      const response = await approveTeacherAxiosFunction({ email: email }); //is se email ko backend me bhej rahe hain jahan isay match karke approve karna hai
      console.log("Teacher approved", response.data);
      setTeachers((prev) => prev.filter((t) => t.email !== email)); //is se UI se remove kar rahe hain through filter function
    } catch (error) {
      console.log("Approve failed", error);
    }
  }

  async function onTeacherDecline(email) { //this function is called when the Reject button is clicked
    try {
      const response = await declineTeacherAxiosFunction({ email: email }); //is se email ko backend me bhej rahe hain jahan isay match karke decline karna hai
      console.log("Teacher declined", response.data);
      setTeachers((prev) => prev.filter((t) => t.email !== email)); //is se UI se remove kar rahe hain through filter function
    } catch (error) {
      console.log("Decline failed", error);
    }
  }

  function getInitials(name) {
    if (!name) return "NA";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  return (
    <>
      <h2 className="mb-4">Pending Teacher Signups</h2>
      {teachers.length === 0 ? (
        <div className="alert alert-success">No pending teachers — all reviewed.</div>
      ) : (
        <div className="row g-4">
          {teachers.map((t) => (
            <div className="col-lg-4" key={t._id || t.email}>
              <div className="card h-100">
                <div className="card-body">
                  {/* Avatar: Bootstrap rounded-circle utility */}
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                      style={{ width: "44px", height: "44px" }}
                    >
                      <strong>{getInitials(t.fullName || t.name)}</strong>
                    </div>
                    <div>
                      <h6 className="mb-0">{t.fullName || t.name}</h6>
                      <small className="text-muted">{t.email}</small>
                    </div>
                  </div>
                  <span className="badge bg-secondary mb-3">{t.subject || "Pending"}</span>
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
