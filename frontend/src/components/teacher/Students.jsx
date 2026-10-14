/* Students: roster of everyone whose Reg# has appeared on a graded sheet.
   This is the same data that later gates student self-signup. */
export default function Students() {
  return (
    <>
      <h2 className="mb-1">Students</h2>
      <p className="text-muted mb-4">Known students — discovered from graded sheets.</p>

      {/* Search: placeholder — filters when a DB is attached */}
      <div className="mb-3" style={{ maxWidth: "320px" }}>
        <input className="form-control" type="search" placeholder="Search name or Reg#…" />
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Reg#</th>
                <th>Class</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Student 1 */}
              <tr>
                <td>Ayesha Khan</td>
                <td>FA24-BSE-100</td>
                <td>BSE-4A</td>
                <td>
                  <span className="badge bg-secondary">On file</span>
                </td>
              </tr>
              {/* Student 2 */}
              <tr>
                <td>Bilal Ahmed</td>
                <td>FA24-BSE-101</td>
                <td>BSE-4A</td>
                <td>
                  <span className="badge bg-secondary">On file</span>
                </td>
              </tr>
              {/* Student 3 */}
              <tr>
                <td>Ansa Irshad</td>
                <td>FA24-BSE-102</td>
                <td>BSE-4A</td>
                <td>
                  <span className="badge bg-secondary">On file</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}