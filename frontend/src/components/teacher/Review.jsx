import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const rowSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  reg: z.string().min(1, "Reg# is required").regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
});

/* Review: correct Name/Reg# when OCR got them wrong, before a result is
   finalised. Each pending sheet is its own card with its own form, so
   Confirming one student submits and validates only that row — fixing the
   earlier behaviour where one Confirm logged every student in the table.
   The list is array-driven: today the rows are hardcoded defaults, and the
   only thing that changes later (once the read is allowed) is where `rows`
   comes from — this component code stays the same. */
const initialRows = [
  { id: "s1", file: "sheet_Ayesha_FA24-BSE-100.jpg", date: "26 Sep 2026 10:42", quiz: "AI Quiz (Set-C)", name: "Ayesha Khan", reg: "FA24-BSE-100" },
  { id: "s2", file: "sheet_Bilal_FA24-BSE-101.jpg", date: "26 Sep 2026 10:42", quiz: "AI Quiz (Set-C)", name: "Bilal Ahmed", reg: "FA24-BSE-101" },
]; //today these are hardcoded defaults; later they will come from the upload→review pipeline

/* One row = one form = one Confirm. Its own useForm instance means validation
   and submit are isolated to this student, so another row's bad OCR can't
   block this one, and Confirming here never touches the other row's data. */
   
function ReviewRow({ sheet, onConfirm }) { //this component is for reviewing a single sheet, with its own form and validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(rowSchema),
    defaultValues: { name: sheet.name, reg: sheet.reg },
  });

  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* Read-only header: file name and quiz, same info the old table row showed */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="fw-semibold">{sheet.file}</span>
            <small className="text-muted d-block">{sheet.date}</small>
          </div>
          <span className="text-muted">{sheet.quiz}</span>
        </div>

        <form onSubmit={handleSubmit((data) => onConfirm(sheet.id, data))} className="row g-2 align-items-end">
          <div className="col-md-5">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" placeholder="OCR read nothing" {...register("name")} />
            {errors.name && <span className="text-danger d-block mt-1">{errors.name.message}</span>}
          </div>
          <div className="col-md-5">
            <label className="form-label">Reg#</label>
            <input className="form-control" type="text" placeholder="Not detected" {...register("reg")} />
            {errors.reg && <span className="text-danger d-block mt-1">{errors.reg.message}</span>}
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-warning">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Review() {
  const [rows, setRows] = useState(initialRows);

  function handleConfirm(sheetId, data) {
    // Today this only updates local state: the real write is part of the
    // upload→review pipeline, which is still mocked (no sheet model/endpoint
    // yet). It logs just the one confirmed row and drops it from the pending
    // list, so each Confirm visibly affects only its own student.
    console.log("Sheet corrections confirmed", { sheetId, ...data });
    setRows((prev) => prev.filter((r) => r.id !== sheetId));
  }

  return (
    <>
      <h2 className="mb-1">Review</h2>
      <p className="text-muted mb-4">Fix any misread names or registration numbers before saving.</p>

      {rows.length === 0 ? (
        <div className="alert alert-success mb-0">No pending sheets — all confirmed.</div>
      ) : (
        rows.map((sheet) => (
          <ReviewRow key={sheet.id} sheet={sheet} onConfirm={handleConfirm} />
        ))
      )}
    </>
  );
}
