const students = [
  {
    id: "6501",
    name: "Somchai",
    score: 78,
  },

  {
    id: "6502",
    name: "Somying",
    score: 91,
  },

  {
    id: "6503",
    name: "Manee",
    score: 45,
  },
  {
    id: "6504",
    name: "Piti",
    score: 66,
  },
];

function toGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}

const scores = [78, 91, 45, 66];
const grades = scores.map((score) => toGrade(score));
console.log("scores :", scores); // <- Original
console.log("grades :", grades);

const summary = students.map((student) => ({
  id: student.id,
  name: student.name,
  grade: toGrade(student.score),
}));
console.log("");
console.log("Summary");
console.log(summary);

const forgot = scores.map((score) => {
  toGrade(score);
});
console.log("");
console.log("Forgot to return", forgot);
