/* Review: correct Name/Reg# when OCR got them wrong, before a result is
   finalised. Static UI — inputs are uncontrolled (defaultValue) and the
   Confirm buttons are visual only. */
export default function Review() {
  return (
    <>
      <h2 className="mb-1">Review</h2>
      <p className="text-muted mb-4">Fix any misread names or registration numbers before saving.</p>

      {/* Pending sheets: Bootstrap table with editable Name/Reg# cells */}
      <div className="card">
        <div className="card-body">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>File</th>
                <th>Quiz</th>
                <th>Name</th>
                <th>Reg#</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Sheet 1 */}
              <tr>
                <td>
                  sheet_Ayesha_FA24-BSE-100.jpg
                  <small className="text-muted d-block">26 Sep 2026 10:42</small>
                </td>
                <td>AI Quiz (Set-C)</td>
                <td>
                  <input className="form-control" type="text" defaultValue="Ayesha Khan" placeholder="OCR read nothing" />
                </td>
                <td>
                  <input className="form-control" type="text" defaultValue="FA24-BSE-100" placeholder="Not detected" />
                </td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Confirm</button>
                </td>
              </tr>
              {/* Sheet 2 */}
              <tr>
                <td>
                  sheet_Bilal_FA24-BSE-101.jpg
                  <small className="text-muted d-block">26 Sep 2026 10:42</small>
                </td>
                <td>AI Quiz (Set-C)</td>
                <td>
                  <input className="form-control" type="text" defaultValue="Bilal Ahmed" placeholder="OCR read nothing" />
                </td>
                <td>
                  <input className="form-control" type="text" defaultValue="FA24-BSE-101" placeholder="Not detected" />
                </td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Confirm</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}