const STUDENTS = [
  {
    id: "6501",
    name: "John Doe",
    score: 79,
  },
];

function fetchStudentByID(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(STUDENTS.find((s) => s.id === id));
    }, 400);
  });
}

fetchStudentByID("6501")
  .then((student) => {
    console.log("#1 นักศึกษา", student.name);
    return student.score;
  })
  .then((score) => {
    console.log("#2 คะแนน", score);
    return score >= 60 ? "B" : "F";
  })
  .then((grade) => {
    console.log("#3 เกรด", grade);
  });
