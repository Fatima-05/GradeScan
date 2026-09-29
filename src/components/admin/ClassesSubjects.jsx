/* Classes & Subjects: two add/remove lists (DB later). Buttons are visual only. */
export default function ClassesSubjects() {
  return (
    <>
      <h2 className="mb-4">Classes &amp; Subjects</h2>
      <div className="row g-4">
        {/* Classes list */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Classes</h5>
              {/* Add row: Bootstrap form-control + Button component */}
              <div className="d-flex gap-2 mb-3">
                <input className="form-control" type="text" placeholder="Add class" />
                <button className="btn btn-warning">Add</button>
              </div>
              {/* List: Bootstrap list-group component */}
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  BSE-4A <a href="#remove" className="text-muted">remove</a>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  BSE-4B <a href="#remove" className="text-muted">remove</a>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  BSCS-3A <a href="#remove" className="text-muted">remove</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Subjects list */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Subjects</h5>
              <div className="d-flex gap-2 mb-3">
                <input className="form-control" type="text" placeholder="Add subject" />
                <button className="btn btn-warning">Add</button>
              </div>
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  AI <a href="#remove" className="text-muted">remove</a>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  Operating Systems <a href="#remove" className="text-muted">remove</a>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                  Databases <a href="#remove" className="text-muted">remove</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}