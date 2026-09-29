/* Shared helpers for the teacher side */

/* Letter grade: same boundary percentages as the Grading Policy defaults */
export function letterGrade(percent) {
  if (percent >= 90) return "A";
  if (percent >= 85) return "A-";
  if (percent >= 80) return "B+";
  if (percent >= 75) return "B";
  if (percent >= 70) return "B-";
  if (percent >= 65) return "C+";
  if (percent >= 60) return "C";
  if (percent >= 55) return "C-";
  if (percent >= 50) return "D";
  return "F";
}

/* Compare a student's bubble against the key for one question:
   blank -> "–", correct -> "✓", wrong -> "✗" */
export function markFor(answer, key) {
  if (answer == null) return "–";
  return answer === key ? "✓" : "✗";
}

/* One mark cell, colored to the palette: ✓ ochre, ✗ rust, – muted */
export function Mark({ m }) {
  if (m === "✓") return <span style={{ color: "#a8763e", fontWeight: 700 }}>✓</span>;
  if (m === "✗") return <span style={{ color: "#6f1a07", fontWeight: 700 }}>✗</span>;
  return <span className="text-muted">–</span>;
}

/* Small pill showing a letter grade, espresso with ochre text */
export function GradePill({ grade }) {
  return (
    <span className="badge" style={{ background: "#2b2118", color: "#a8763e" }}>
      {grade}
    </span>
  );
}