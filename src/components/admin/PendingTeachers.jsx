/* Pending Teachers: static list for now (DB later). Approve/Reject are visual only this phase. */
const pendingTeachers = [
  { name: "Ali Raza", email: "ali.raza@school.edu", subject: "Physics", initial: "AR" },
  { name: "Sara Ahmed", email: "sara.ahmed@school.edu", subject: "AI", initial: "SA" },
  { name: "Hamza Khan", email: "hamza.khan@school.edu", subject: "Operating Systems", initial: "HK" },
];

export default function PendingTeachers() {
  return (
    <>
      <h2 className="mb-4">Pending Teacher Signups</h2>
      {/* Teacher cards: Bootstrap grid (row/col-lg-4) + Card component */}
      <div className="row g-4">
        {pendingTeachers.map((t) => (
          <div className="col-lg-4" key={t.email}>
            <div className="card h-100">
              <div className="card-body">
                {/* Avatar: Bootstrap rounded-circle utility */}
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center me-3"
                    style={{ width: "44px", height: "44px" }}
                  >
                    <strong>{t.initial}</strong>
                  </div>
                  <div>
                    <h6 className="mb-0">{t.name}</h6>
                    <small className="text-muted">{t.email}</small>
                  </div>
                </div>
                <span className="badge bg-secondary mb-3">{t.subject}</span>
                {/* Buttons: Bootstrap Button component, one per card */}
                <div className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm flex-fill">Approve</button>
                  <button className="btn btn-outline-warning btn-sm flex-fill">Reject</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}