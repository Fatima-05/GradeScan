/* Mock data for the teacher side — seeded to mirror public/db.json
   (quizzes hold the answer key, students are keyed by Reg#, results hold
   the student's bubbles per part). All dummy; DB in a later phase. */

export const gradingDefaults = { negativeMarking: 0.25, passing: 40 };

export const classes = ["BSE-4A", "BSE-4B"];

export const subjects = ["Artificial Intelligence", "Operating Systems", "Data Structures"];

export const quizzes = [
  {
    id: "AIQ-SETC",
    title: "AI Quiz",
    set: "Set-C",
    className: "BSE-4A",
    subject: "Artificial Intelligence",
    time: "30 min",
    marksPerQuestion: 1,
    negativeMarking: 0,
    part1: ["D", "A", "B", "A", "D", "A", "A", "B"],
    part2: ["C", "D", "D", "D", "C", "C", "C", "B"],
  },
  {
    id: "AIQ-SETA",
    title: "AI Quiz",
    set: "Set-A",
    className: "BSE-4A",
    subject: "Artificial Intelligence",
    time: "30 min",
    marksPerQuestion: 1,
    negativeMarking: 0.25,
    part1: ["A", "C", "C", "B", "D", "A", "B", "D"],
    part2: ["B", "A", "D", "C", "A", "D", "C", "B"],
  },
];

export const students = [
  { id: "S001", name: "Ayesha Khan", regNo: "FA24-BSE-100", className: "BSE-4A" },
  { id: "S002", name: "Bilal Ahmed", regNo: "FA24-BSE-101", className: "BSE-4A" },
  { id: "S003", name: "Ansa Irshad", regNo: "FA24-BSE-102", className: "BSE-4A" },
];

/* Results store one entry per graded sheet. part1/part2 are the student's
   bubbles in order (null = blank); matched against the quiz key to grade. */
export const results = [
  {
    id: "R-seed-1",
    quizId: "AIQ-SETC",
    studentName: "Ayesha Khan",
    regNo: "FA24-BSE-100",
    part1: ["D", "A", "B", "A", "D", "A", "A", "B"],
    part2: ["C", "D", "D", "D", "C", "C", "B", "B"],
    flags: [],
    source: "upload",
    gradedAt: "22 May 2026",
  },
  {
    id: "R-seed-2",
    quizId: "AIQ-SETC",
    studentName: "Bilal Ahmed",
    regNo: "FA24-BSE-101",
    part1: ["D", "A", "C", "A", "D", "B", "A", "B"],
    part2: ["C", "D", "A", "D", "C", "C", "C", null],
    flags: [],
    source: "upload",
    gradedAt: "22 May 2026",
  },
  {
    id: "R-seed-3",
    quizId: "AIQ-SETA",
    studentName: "Ansa Irshad",
    regNo: "FA24-BSE-102",
    part1: ["A", "C", "B", "B", "D", "A", "B", "D"],
    part2: ["B", "A", "D", "C", "A", "D", "C", "B"],
    flags: [],
    source: "batch",
    gradedAt: "23 May 2026",
  },
];

export const announcements = [
  { text: "Midterm schedule is now live.", date: "25 Sep 2026", audience: "Everyone" },
  { text: "GradeScan maintenance Sunday 2 AM.", date: "22 Sep 2026", audience: "Teachers" },
  { text: "Please collect answer sheets after the lab.", date: "20 Sep 2026", audience: "Everyone" },
];

/* Regrade requests submitted by students against this teacher's quizzes */
export const initialRequests = [
  {
    id: 1,
    quizId: "AIQ-SETC",
    student: "Ayesha Khan",
    question: 4,
    reason: "The OMR may have misread my bubble — I marked D.",
    status: "Pending",
    date: "24 Sep 2026",
  },
  {
    id: 2,
    quizId: "AIQ-SETA",
    student: "Ansa Irshad",
    question: 3,
    reason: "The answer key for Q3 looks wrong.",
    status: "Pending",
    date: "25 Sep 2026",
  },
];

/* Sheets scanned but not yet confirmed in Review */
export const pendingSheets = [
  { id: "P1", quizId: "AIQ-SETC", name: "", regNo: "", fileName: "sheet_042.jpg", scannedAt: "26 Sep 2026 09:14" },
  { id: "P2", quizId: "AIQ-SETC", name: "Muhammad Usman", regNo: "FA24-BSE-105", fileName: "sheet_043.jpg", scannedAt: "26 Sep 2026 09:17" },
];