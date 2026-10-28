import { useState, useEffect } from "react";
import {
  getAnnouncementsAxiosFunction,
  getQuizzesAxiosFunction,
  getStudentsAxiosFunction,
  getTeacherRegradesAxiosFunction,
} from "../../service/api";

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState([]); // is state variable mei announcements ka data store hoga jo backend se fetch kiya jayega

  const [stats, setStats] = useState({ // is state variable mei dashboard ke stats ka data store hoga jo backend se fetch kiya jayega

    quizzes: 0,
    sheetsGraded: 0,
    students: 0,
    pendingRegrades: 0,
  }); // ye state variable dashboard ke stats ko store karega, jisme quizzes, sheets graded, students aur pending regrades ka count hoga

  async function fetchAnnouncements() { // ye function backend se announcements ka data fetch karega aur state variable mei store karega

    try {
      const result = await getAnnouncementsAxiosFunction(); // ye function backend ke /announcements route pe GET request bhejega aur data ko receive karega

      const returnedProductData = result.data || []; // agar result.data exist karta hai tou usko returnedProductData mei store karo, warna empty array store karo

      const filtered = returnedProductData.filter(
        (a) => a.audience === "everyone" || a.audience === "teachers" || a.audience === "Everyone" || a.audience === "Teachers"
      );// ye line sirf un announcements ko filter karegi jinka audience "everyone" ya "teachers" hai, aur unko filtered variable mei store karegi

      setAnnouncements(filtered); // ye line announcements state variable ko update karegi, jisme filtered announcements ka data store hoga

    } catch (error) {
      console.log("Failed to fetch announcements", error);
    }
  }

  useEffect(() => { // ye hook component ke mount hone ke baad call hoga, aur fetchAnnouncements function ko call karega
    async function loadStats() { // ye function backend se dashboard ke stats ka data fetch karega aur state variable mei store karega
      try {
        const [quizRes, studentRes, regradeRes] = await Promise.all([ //  ye line backend ke /quizzes, /students aur /regrades/teacher routes pe GET requests bhejega aur unke responses ko receive karega

          getQuizzesAxiosFunction(),
          getStudentsAxiosFunction(),
          getTeacherRegradesAxiosFunction(),
        ]);

        setStats({
          quizzes: (quizRes.data || []).length, // agar quizRes.data exist karta hai tou uska length setStats mei store karo, warna 0 store karo

          sheetsGraded: 0, // ye line sheets graded ka count 0 set karegi, kyunki abhi backend se sheets graded ka data fetch nahi kar rahe hain

          students: (studentRes.data || []).length, // agar studentRes.data exist karta hai tou uska length setStats mei store karo, warna 0 store karo

          pendingRegrades: (regradeRes.data || []).filter(
            (r) => (r.status || "pending") === "pending"
          ).length, // ye line sirf pending regrades ko filter karegi aur unka length setStats mei store karegi, warna 0 store karo
        });
      } catch (error) {
        console.log("Failed to fetch dashboard stats", error);
      }
    }

    fetchAnnouncements(); // ye function backend se announcements ka data fetch karega aur state variable mei store karega
    loadStats(); // ye function backend se dashboard ke stats ka data fetch karega aur state variable mei store karega
  }, []); // ye empty dependency array ka matlab hai ki ye effect sirf component ke mount hone ke baad run hoga, aur kabhi bhi re-run nahi hoga

  return (
    <>
      <h2 className="mb-1">Dashboard</h2>
      <p className="text-muted mb-4">Logged in as faculty · Pending approval for full access.</p>

      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.quizzes}</h1>
              <p className="card-title mb-0">My quizzes</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.sheetsGraded}</h1>
              <p className="card-title mb-0">Sheets graded</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.students}</h1>
              <p className="card-title mb-0">Students</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.pendingRegrades}</h1>
              <p className="card-title mb-0">Pending regrades</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mb-3">Announcements</h4>
      {announcements.length === 0 ? (
        <div className="alert alert-success">No announcements.</div>
      ) : (
        <div className="row g-4">
          {announcements.map((a) => (
            <div className="col-md-6" key={a._id || a.message}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title mb-1">{a.message}</h6>
                  <small className="text-muted">
                    {a.date} · <span className="badge bg-secondary">{a.audience}</span>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}