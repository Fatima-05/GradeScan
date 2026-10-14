import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const reviewSchema = z.object({
  name1: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  reg1: z.string().min(1, "Reg# is required").regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
  name2: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  reg2: z.string().min(1, "Reg# is required").regex(/^(FA|SP)\d{2}-[A-Z]{2,4}-\d{3}$/, "Format: FA24-BSE-000"),
});

/* Review: correct Name/Reg# when OCR got them wrong, before a result is
   finalised. One form wraps the table (a form can't sit inside a <tr>), so
   both Confirm buttons submit the same validated form. */
export default function Review() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name1: "Ayesha Khan",
      reg1: "FA24-BSE-100",
      name2: "Bilal Ahmed",
      reg2: "FA24-BSE-101",
    },
  });

  function onReviewSubmit(data) {
    console.log("Sheet corrections confirmed", data);
  }

  return (
    <>
      <h2 className="mb-1">Review</h2>
      <p className="text-muted mb-4">Fix any misread names or registration numbers before saving.</p>

      {/* Pending sheets: Bootstrap table with editable Name/Reg# cells */}
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onReviewSubmit)}>
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
                    <input className="form-control" type="text" placeholder="OCR read nothing" {...register("name1")} />
                    {errors.name1 && <span className="text-danger">{errors.name1.message}</span>}
                  </td>
                  <td>
                    <input className="form-control" type="text" placeholder="Not detected" {...register("reg1")} />
                    {errors.reg1 && <span className="text-danger">{errors.reg1.message}</span>}
                  </td>
                  <td>
                    <button type="submit" className="btn btn-warning btn-sm">Confirm</button>
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
                    <input className="form-control" type="text" placeholder="OCR read nothing" {...register("name2")} />
                    {errors.name2 && <span className="text-danger">{errors.name2.message}</span>}
                  </td>
                  <td>
                    <input className="form-control" type="text" placeholder="Not detected" {...register("reg2")} />
                    {errors.reg2 && <span className="text-danger">{errors.reg2.message}</span>}
                  </td>
                  <td>
                    <button type="submit" className="btn btn-warning btn-sm">Confirm</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
