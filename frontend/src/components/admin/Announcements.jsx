import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementAxiosFunction, deleteAnnouncementAxiosFunction } from "../../service/api";

const announcementSchema = z.object({
  message: z.string().min(1, "Notice is required").min(5, "Notice must be at least 5 characters").max(300, "Notice must be at most 300 characters"),
  audience: z.enum(["everyone", "teachers", "students"]),
});

/* Announcements: compose box + static list. The compose form validates with
   react-hook-form + zod; posting and deleting go to the backend. */
export default function Announcements() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(announcementSchema),
    defaultValues: { message: "", audience: "everyone" },
  });

  async function onAnnouncementSubmit(data) {
    try {
      const response = await announcementAxiosFunction(data);
      console.log("Announcement posted", response.data);
    } catch (error) {
      console.log("Announcement failed", error);
    }
  }

  async function onAnnouncementDelete(message) {
    try {
      const response = await deleteAnnouncementAxiosFunction({ message: message });
      console.log("Announcement deleted", response.data);
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
      {/* Past announcements: Bootstrap grid + Card component */}
      <div className="row g-4">
        {/* Announcement 1 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6 className="card-title">Midterm schedule is now live.</h6>
                <button type="button" className="btn btn-link text-muted p-0" onClick={() => onAnnouncementDelete("Midterm schedule is now live.")}>delete</button>
              </div>
              <small className="text-muted">
                25 Sep 2026 · <span className="badge bg-secondary">Everyone</span>
              </small>
            </div>
          </div>
        </div>
        {/* Announcement 2 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6 className="card-title">GradeScan maintenance Sunday 2 AM.</h6>
                <button type="button" className="btn btn-link text-muted p-0" onClick={() => onAnnouncementDelete("GradeScan maintenance Sunday 2 AM.")}>delete</button>
              </div>
              <small className="text-muted">
                22 Sep 2026 · <span className="badge bg-secondary">Teachers</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
