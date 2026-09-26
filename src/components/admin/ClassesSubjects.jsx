/* Classes & Subjects: two add/remove lists (DB later). Buttons are visual only. */
const classes = ["BSE-4A", "BSE-4B", "BSCS-3A"];
const subjects = ["AI", "Operating Systems", "Databases"];

/* Small reusable list block: presentational, receives items + labels via props */
function ItemList({ title, items, placeholder }) {
  return (
    <div className="col-lg-6">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          {/* Add row: Bootstrap form-control + Button component */}
          <div className="d-flex gap-2 mb-3">
            <input className="form-control" type="text" placeholder={placeholder} />
            <button className="btn btn-warning">Add</button>
          </div>
          {/* List: Bootstrap list-group component */}
          <ul className="list-group">
            {items.map((it) => (
              <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center" key={it}>
                {it}
                <a href="#remove" className="text-muted">remove</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ClassesSubjects() {
  return (
    <>
      <h2 className="mb-4">Classes & Subjects</h2>
      <div className="row g-4">
        <ItemList title="Classes" items={classes} placeholder="Add class" />
        <ItemList title="Subjects" items={subjects} placeholder="Add subject" />
      </div>
    </>
  );
}