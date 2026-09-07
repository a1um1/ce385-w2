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

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(
        ...args,
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        },
      );
    });
  };
}
function fetchStudentById(id, callback) {
  if (typeof id !== "string" || id.length === 0) return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
  const find = students.find((s) => s.id === id);
  if (!find) return callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
  setTimeout(() => {
    return callback(null, find);
  }, 300);
}

const fetchStudentByIdAsync = promisify(fetchStudentById);

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
