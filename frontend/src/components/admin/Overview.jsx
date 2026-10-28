import { useEffect, useState } from "react";
import {
  getAnnouncementsAxiosFunction,
  getClassSectionsAxiosFunction,
  getPendingTeachersAxiosFunction,
  getSubjectsAxiosFunction,
} from "../../service/api";

export default function Overview() {
  const [stats, setStats] = useState({
    classes: 0,
    subjects: 0,
    pendingTeachers: 0,
    announcements: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const [classRes, subjectRes, teacherRes, announcementRes] = await Promise.all([
          getClassSectionsAxiosFunction(),
          getSubjectsAxiosFunction(),
          getPendingTeachersAxiosFunction(),
          getAnnouncementsAxiosFunction(),
        ]);

        setStats({
          classes: (classRes.data || []).length,
          subjects: (subjectRes.data || []).length,
          pendingTeachers: (teacherRes.data || []).length,
          announcements: (announcementRes.data || []).length,
        });
      } catch (error) {
        console.log("Failed to load overview stats", error);
      }
    }

    loadStats();
  }, []);

  return (
    <>
      <h2 className="mb-4">Overview</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.classes}</h1>
              <p className="card-title mb-0">Classes</p>
              <small className="text-muted">from database</small>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.subjects}</h1>
              <p className="card-title mb-0">Subjects</p>
              <small className="text-muted">from database</small>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.pendingTeachers}</h1>
              <p className="card-title mb-0">Pending teachers</p>
              <small className="text-muted">awaiting review</small>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="display-6 mb-1">{stats.announcements}</h1>
              <p className="card-title mb-0">Announcements</p>
              <small className="text-muted">posted</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}