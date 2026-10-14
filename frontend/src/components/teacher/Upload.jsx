import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const uploadSchema = z.object({
  sheetPhoto: z.any().refine((files) => files && files.length > 0, "Sheet photo is required"),
});

/* Upload: single-sheet scan. Mirror of the repo's Upload tab — choose a photo,
   the app aligns (corner marks), decodes the QR key, reads Name/Reg via OCR,
   then reads the bubbles. The form validates that a photo was chosen. */
export default function Upload() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(uploadSchema),
    defaultValues: { sheetPhoto: undefined },
  });

  function onUploadSubmit(data) {
    console.log("Sheet uploaded for scanning", data);
  }

  return (
    <>
      <h2 className="mb-1">Upload &amp; Scan</h2>
      <p className="text-muted mb-4">Grade a single scanned answer sheet.</p>

      <div className="card mb-4">
        <div className="card-body">
          {/* File: Bootstrap form-control; Generate is a placeholder */}
          <form onSubmit={handleSubmit(onUploadSubmit)}>
            <label className="form-label">Sheet photo</label>
            <input className="form-control mb-3" type="file" accept="image/*" {...register("sheetPhoto")} />
            {errors.sheetPhoto && <span className="text-danger d-block mb-3">{errors.sheetPhoto.message}</span>}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-warning px-4">Scan &amp; grade</button>
              <a href="#" className="btn btn-outline-warning">Generate blank sheet</a>
            </div>
          </form>
        </div>
      </div>

      {/* Pipeline status: the four steps, all shown with done ticks */}
      <div className="card mb-4">
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
              Alignment — corner registration marks
            </li>
            <li className="mb-1">
              <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
              QR decode — answer key from the sheet
            </li>
            <li className="mb-1">
              <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
              OCR — student name and Reg#
            </li>
            <li className="mb-1">
              <i className="bi bi-check-circle-fill me-2" style={{ color: "#a8763e" }}></i>
              Bubble grid — Part I + Part II
            </li>
          </ul>
          <div className="alert alert-success text-center mt-3 mb-0" role="alert">
            Sheet graded — check <strong>Review</strong> to confirm the name, then <strong>Results</strong>.
          </div>
        </div>
      </div>
    </>
  );
}
