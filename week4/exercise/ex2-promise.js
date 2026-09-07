const students = [
  {
    id: "1",
    name: "A",
    major: "CE",
    score: 80,
  },
  {
    id: "2",
    name: "B",
    major: "CE",
    score: 79,
  },
  {
    id: "3",
    name: "C",
    major: "CE",
    score: 49,
  },
  {
    id: "4",
    name: "D",
    major: "CE",
    score: 64,
  },
];

const grading_scores = [
  {
    grade: "A",
    minScore: 80,
  },
  {
    grade: "B+",
    minScore: 75,
  },
  {
    grade: "B",
    minScore: 70,
  },
  {
    grade: "C+",
    minScore: 65,
  },
  {
    grade: "C",
    minScore: 60,
  },
  {
    grade: "D+",
    minScore: 55,
  },
  {
    grade: "D",
    minScore: 50,
  },
];

function toGrade(score) {
  return grading_scores.find((rule) => score >= rule.minScore)?.grade || "F";
}

function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || id.length === 0) return reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    const find = students.find((s) => s.id === id);
    if (!find) return reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    setTimeout(() => {
      return resolve(find);
    }, 300);
  });
}

const tests = ["1", "42", undefined, ""];

for (const [index, value] of tests.entries()) {
  fetchStudentByIdAsync(value)
    .then((student) => {
      const grade = toGrade(student.score);
      return { name: student.name, grade };
    })
    .then(({ name, grade }) => {
      return `Test ${index + 1}: นักศึกษา ${name} ได้เกรด ${grade}`;
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.error(`Test ${index + 1}:`, err.message);
    })
    .finally(() => {
      console.log(`Test ${index + 1}: Done`);
    });
}
