import { approveTeacherAxiosFunction, declineTeacherAxiosFunction } from "../../service/api";

/* Pending Teachers: static cards. Approve/Reject call the backend. */
export default function PendingTeachers() {
  async function onTeacherApprove(email) {
    try {
      const response = await approveTeacherAxiosFunction({ email: email });
      console.log("Teacher approved", response.data);
    } catch (error) {
      console.log("Approve failed", error);
    }
  }

  async function onTeacherDecline(email) {
    try {
      const response = await declineTeacherAxiosFunction({ email: email });
      console.log("Teacher declined", response.data);
    } catch (error) {
      console.log("Decline failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-4">Pending Teacher Signups</h2>
      {/* Teacher cards: Bootstrap grid (row/col-lg-4) + Card component */}
      <div className="row g-4">
        {/* Teacher 1 — Ali Raza */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              {/* Avatar: Bootstrap rounded-circle utility */}
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                  style={{ width: "44px", height: "44px" }}
                >
                  <strong>AR</strong>
                </div>
                <div>
                  <h6 className="mb-0">Ali Raza</h6>
                  <small className="text-muted">ali.raza@school.edu</small>
                </div>
              </div>
              <span className="badge bg-secondary mb-3">Physics</span>
              {/* Buttons: Bootstrap Button component, one per card */}
              <div className="d-flex gap-2">
                <button className="btn btn-warning btn-sm flex-fill" onClick={() => onTeacherApprove("ali.raza@school.edu")}>Approve</button>
                <button className="btn btn-outline-warning btn-sm flex-fill" onClick={() => onTeacherDecline("ali.raza@school.edu")}>Reject</button>
              </div>
            </div>
          </div>
        </div>
        {/* Teacher 2 — Sara Ahmed */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                  style={{ width: "44px", height: "44px" }}
                >
                  <strong>SA</strong>
                </div>
                <div>
                  <h6 className="mb-0">Sara Ahmed</h6>
                  <small className="text-muted">sara.ahmed@school.edu</small>
                </div>
              </div>
              <span className="badge bg-secondary mb-3">AI</span>
              <div className="d-flex gap-2">
                <button className="btn btn-warning btn-sm flex-fill" onClick={() => onTeacherApprove("sara.ahmed@school.edu")}>Approve</button>
                <button className="btn btn-outline-warning btn-sm flex-fill" onClick={() => onTeacherDecline("sara.ahmed@school.edu")}>Reject</button>
              </div>
            </div>
          </div>
        </div>
        {/* Teacher 3 — Hamza Khan */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                  style={{ width: "44px", height: "44px" }}
                >
                  <strong>HK</strong>
                </div>
                <div>
                  <h6 className="mb-0">Hamza Khan</h6>
                  <small className="text-muted">hamza.khan@school.edu</small>
                </div>
              </div>
              <span className="badge bg-secondary mb-3">Operating Systems</span>
              <div className="d-flex gap-2">
                <button className="btn btn-warning btn-sm flex-fill" onClick={() => onTeacherApprove("hamza.khan@school.edu")}>Approve</button>
                <button className="btn btn-outline-warning btn-sm flex-fill" onClick={() => onTeacherDecline("hamza.khan@school.edu")}>Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}