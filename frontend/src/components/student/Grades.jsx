import { useEffect, useState } from "react";
import { getMyGradesAxiosFunction } from "../../service/api";

/* My Grades: results come from the logged-in student's token (the backend
   filters by registrationNumber). Hard-coded numbers are gone. */
function QuestionBadges({ answers }) {
  const sorted = [...(answers || [])].sort((a, b) => a.questionNumber - b.questionNumber);
  const symbols = { correct: "✓", wrong: "✗", blank: "–" };
  const styles = {
    correct: "bg-success bg-opacity-25 text-dark",
    wrong: "bg-danger bg-opacity-50 text-dark",
    blank: "bg-secondary bg-opacity-25 text-dark",
  };

  function badges(list) {
    return list.map((a, i) => (
      <span key={i} className={`badge ${styles[a.status] || styles.blank}`}>
        Q{a.questionNumber} {symbols[a.status] || "–"}
      </span>
    ));
  }

  return (
    <>
      <small className="text-muted d-block mb-1">Part I (Q1–Q8)</small>
      <div className="d-flex flex-wrap gap-1 mb-2">{badges(sorted.filter((a) => a.questionNumber <= 8))}</div>
      <small className="text-muted d-block mb-1">Part II (Q9–Q16)</small>
      <div className="d-flex flex-wrap gap-1">{badges(sorted.filter((a) => a.questionNumber > 8))}</div>
    </>
  );
}

export default function Grades() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const registrationNumber = localStorage.getItem("registrationNumber") || "your account";

  useEffect(() => {
    async function fetchGrades() {
      try {
        const response = await getMyGradesAxiosFunction();
        setResults(response.data || []);
      } catch (error) {
        console.log("Failed to fetch grades", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGrades();
  }, []);

  const grouped = results.reduce((acc, result) => {
    const subject = result.subject || "Other";
    if (!acc[subject]) acc[subject] = [];
    acc[subject].push(result);
    return acc;
  }, {});

  return (
    <>
      <h2 className="mb-1">My Grades</h2>
      <p className="text-muted mb-4">{registrationNumber}</p>

      {loading ? (
        <div className="alert alert-secondary">Loading grades…</div>
      ) : results.length === 0 ? (
        <div className="alert alert-success">No grades yet.</div>
      ) : (
        Object.entries(grouped).map(([subject, items]) => (
          <div key={subject}>
            <h4 className="mb-3">
              {subject} <span className="badge bg-secondary ms-1">{items.length} graded</span>
            </h4>
            {items.map((result) => (
              <div className="card mb-4" key={result._id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">
                      {result.quizTitle} <span className="badge bg-secondary">{result.set}</span>
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <span className="text-muted">{result.correctCount}✓ · {result.wrongCount}✗ · {result.blankCount}–</span>
                      <span className="fw-bold">{result.score}/{result.maxQuestions || 16}</span>
                      <span className="text-muted">{result.percentage}%</span>
                      <span className="badge bg-warning text-dark">{result.grade}</span>
                    </div>
                  </div>
                  <QuestionBadges answers={result.answers} />
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      <small className="text-muted">
        <span className="fw-bold">Legend:</span> ✓ correct · ✗ wrong · – blank
      </small>
    </>
  );
}
