import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { classSectionAxiosFunction, removeClassSectionAxiosFunction, subjectAxiosFunction, removeSubjectAxiosFunction } from "../../service/api";

const classSchema = z.object({
  className: z.string().min(1, "Class name is required").regex(/^[A-Z]{3,4}-\d[A-Z]$/, "Format: BSE-4A"),
});

const subjectSchema = z.object({
  subjectName: z.string().min(1, "Subject name is required").min(2, "Subject name must be at least 2 characters").max(30, "Subject name must be at most 30 characters"),
});

/* Classes & Subjects: two add/remove lists. Each add row is its own validated
   form. The lists are local state so a successful remove drops the item from
   the UI. The DB change is visible in Compass; the UI can't refresh without a
   GET, so a newly added class/subject is NOT appended to the list. */
export default function ClassesSubjects() {
  const { register: registerClass, handleSubmit: handleClassSubmit, formState: { errors: classErrors } } = useForm({
    resolver: zodResolver(classSchema),
    defaultValues: { className: "" },
  });

  const { register: registerSubject, handleSubmit: handleSubjectSubmit, formState: { errors: subjectErrors } } = useForm({
    resolver: zodResolver(subjectSchema),
    defaultValues: { subjectName: "" },
  });

  const [classes, setClasses] = useState(["BSE-4A", "BSE-4B", "BSCS-5C"]);
  const [subjects, setSubjects] = useState(["AI", "Operating Systems", "Web Technologies"]);

  async function onClassSubmit(data) {
    try {
      const response = await classSectionAxiosFunction(data);
      console.log("Class added", response.data);
    } catch (error) {
      console.log("Failed to add class", error);
    }
  }

  async function onClassRemove(className) {
    try {
      const response = await removeClassSectionAxiosFunction({ className: className });
      console.log("Class removed", response.data);
      setClasses((prev) => prev.filter((c) => c !== className));
    } catch (error) {
      console.log("Failed to remove class", error);
    }
  }

  async function onSubjectSubmit(data) {
    try {
      const response = await subjectAxiosFunction(data);
      console.log("Subject added", response.data);
    } catch (error) {
      console.log("Failed to add subject", error);
    }
  }

  async function onSubjectRemove(subjectName) {
    try {
      const response = await removeSubjectAxiosFunction({ subjectName: subjectName });
      console.log("Subject removed", response.data);
      setSubjects((prev) => prev.filter((s) => s !== subjectName));
    } catch (error) {
      console.log("Failed to remove subject", error);
    }
  }

  return (
    <>
      <h2 className="mb-4">Classes &amp; Subjects</h2>
      <div className="row g-4">
        {/* Classes list */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Classes</h5>
              {/* Add row: Bootstrap form-control + Button component */}
              <form onSubmit={handleClassSubmit(onClassSubmit)}>
                <div className="d-flex gap-2 mb-3">
                  <input className="form-control" type="text" placeholder="e.g. BSE-4A" {...registerClass("className")} />
                  <button type="submit" className="btn btn-warning">Add</button>
                </div>
                {classErrors.className && <span className="text-danger d-block mb-3">{classErrors.className.message}</span>}
              </form>
              {/* List: rendered from local state; remove drops the item on success */}
              <ul className="list-group">
                {classes.length === 0 ? (
                  <li className="list-group-item list-group-item-dark">No classes.</li>
                ) : (
                  classes.map((c) => (
                    <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center" key={c}>
                      {c} <button type="button" className="btn btn-link text-muted p-0" onClick={() => onClassRemove(c)}>remove</button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* Subjects list */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Subjects</h5>
              <form onSubmit={handleSubjectSubmit(onSubjectSubmit)}>
                <div className="d-flex gap-2 mb-3">
                  <input className="form-control" type="text" placeholder="Add subject" {...registerSubject("subjectName")} />
                  <button type="submit" className="btn btn-warning">Add</button>
                </div>
                {subjectErrors.subjectName && <span className="text-danger d-block mb-3">{subjectErrors.subjectName.message}</span>}
              </form>
              <ul className="list-group">
                {subjects.length === 0 ? (
                  <li className="list-group-item list-group-item-dark">No subjects.</li>
                ) : (
                  subjects.map((s) => (
                    <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center" key={s}>
                      {s} <button type="button" className="btn btn-link text-muted p-0" onClick={() => onSubjectRemove(s)}>remove</button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
