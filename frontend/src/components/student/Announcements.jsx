import { useState, useEffect } from "react";
import { getAnnouncementsAxiosFunction } from "../../service/api";

/* Announcements (student side): read-only cards. */
export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  async function fetchAnnouncements() {
    try {
      const result = await getAnnouncementsAxiosFunction();
      const returnedProductData = result.data || [];
      // show announcements for everyone and students
      const filtered = returnedProductData.filter(
        (a) => a.audience === "everyone" || a.audience === "students" || a.audience === "Everyone" || a.audience === "Students"
      ); // ye line sirf un announcements ko filter karegi jinka audience "everyone" ya "students" hai, aur unko filtered variable mei store karegi

      setAnnouncements(filtered); // ye line announcements state variable ko update karegi, jisme filtered announcements ka data store hoga

    } catch (error) {
      console.log("Failed to fetch announcements", error);
    }
  }

  useEffect(() => {
    fetchAnnouncements(); // ye hook component ke mount hone ke baad call hoga, aur fetchAnnouncements function ko call karega
  }, []);

  return (
    <>
      <h2 className="mb-1">Announcements</h2>
      <p className="text-muted mb-4">Read-only — posted by your teachers.</p>

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