import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementAxiosFunction, deleteAnnouncementAxiosFunction } from "../../service/api";

const announcementSchema = z.object({
  message: z.string().min(1, "Notice is required").min(5, "Notice must be at least 5 characters").max(300, "Notice must be at most 300 characters"),
  audience: z.enum(["everyone", "teachers", "students"]),
});

const initialAnnouncements = [ 
  { message: "Midterm schedule is now live.", date: "25 Sep 2026", audience: "Everyone" },
  { message: "GradeScan maintenance Sunday 2 AM.", date: "22 Sep 2026", audience: "Teachers" },
]; // Mock data for initial announcements; in a real app, this would come from a GET request to the backend

/* Announcements: compose box + list. The compose form validates with
   react-hook-form + zod; posting and deleting go to the backend. The past-
   announcements list is local state so a successful delete removes the card
   from the UI. The DB change is visible in Compass; the UI can't refresh
   without a GET, so a newly posted announcement is NOT added to the list. */
export default function Announcements() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(announcementSchema),
    defaultValues: { message: "", audience: "everyone" },
  });

  const [announcements, setAnnouncements] = useState(initialAnnouncements); 
  //this state holds the list of past announcements; in a real app, this would come from a GET request to the backend

  async function onAnnouncementSubmit(data) {
    try {
      const response = await announcementAxiosFunction(data); //is se data ko backend me bhej rahe hain
      console.log("Announcement posted", response.data);
    } catch (error) {
      console.log("Announcement failed", error);
    }
  }

  async function onAnnouncementDelete(message) {
    try {
      const response = await deleteAnnouncementAxiosFunction({ message: message }); //is se message ko backend me bhej rahe hain jahan isay match karke delete karna hai
      console.log("Announcement deleted", response.data);
      setAnnouncements((prev) => prev.filter((a) => a.message !== message)); //is se UI se remove kar rahe hain through filter function, jo message ko match karke remove kar deta hai
    } catch (error) {
      console.log("Delete failed", error);
    }
  }

  return (
    <>
      <h2 className="mb-4">Announcements</h2>
      {/* Compose box: Bootstrap form-control + form-select + Button component */}
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit(onAnnouncementSubmit)}>
            <textarea className="form-control mb-2" rows="3" placeholder="Write a notice…" {...register("message")}></textarea>
            {errors.message && <span className="text-danger d-block mb-2">{errors.message.message}</span>}
            <div className="d-flex gap-2">
              <select className="form-select" {...register("audience")}>
                <option value="everyone">Send to everyone</option>
                <option value="teachers">Teachers only</option>
                <option value="students">Students only</option>
              </select>
              <button type="submit" className="btn btn-warning px-4">Post</button>
            </div>
          </form>
        </div>
      </div>
      {/* Past announcements: rendered from local state; delete removes on success */}
      {announcements.length === 0 ? (
        <div className="alert alert-success">No announcements.</div>
      ) : (
        <div className="row g-4">
          {announcements.map((a) => (
            <div className="col-md-6" key={a.message}>
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">{a.message}</h6>
                    <button type="button" className="btn btn-link text-muted p-0" onClick={() => onAnnouncementDelete(a.message)}>delete</button>
                  </div>
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
