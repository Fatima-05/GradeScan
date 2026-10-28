import { useState, useEffect } from "react";
import { getStudentsAxiosFunction } from "../../service/api";

/* Students: roster fetched from DB. */
export default function Students() {
  const [students, setStudents] = useState([]);
  // is state variable mei students ka data store hoga jo backend se fetch kiya jayega

  async function fetchStudents() {
    try {
      const result = await getStudentsAxiosFunction(); // ye function backend ke /students route pe GET request bhejega aur data ko receive karega
      setStudents(result.data || []); // agar result.data exist karta hai tou usko setStudents mei store karo, warna empty array store karo
    } catch (error) {
      console.log("Failed to fetch students", error);
    }
  }

  useEffect(() => { // ye hook component ke mount hone ke baad call hoga, aur fetchStudents function ko call karega
    fetchStudents(); // ye function backend se students ka data fetch karega aur state variable mei store karega
  }, []);

  return (
    <>
      <h2 className="mb-1">Students</h2>
      <p className="text-muted mb-4">Known students.</p>

      {/* Search: placeholder */}
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
              {students.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted">No students.</td>
                </tr>
              ) : (
                students.map((s, idx) => (
                  <tr key={s._id || idx}>
                    <td>{s.fullName || s.name}</td>
                    <td>{s.registrationNumber || s.regNo || s.regNumber}</td>
                    <td>{s.className || s.class || "-"}</td>
                    <td>
                      <span className="badge bg-secondary">On file</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}