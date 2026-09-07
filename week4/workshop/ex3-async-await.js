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

async function reportSequential() {
  const startTime = Date.now();
  for (const student of students) {
    const data = await fetchStudentByIdAsync(student.id);
    console.log(`นักศึกษา ${data.name} ได้เกรด ${toGrade(data.score)}`);
  }
  const endTime = Date.now();
  console.log(`ใช้เวลา ${endTime - startTime} ms`);
}

async function reportParallel() {
  const startTime = Date.now();

  const promises = students.map(async (student) => {
    const data = await fetchStudentByIdAsync(student.id);
    console.log(`นักศึกษา ${data.name} ได้เกรด ${toGrade(data.score)}`);
  });
  await Promise.all(promises);

  const endTime = Date.now();
  console.log(`ใช้เวลา ${endTime - startTime} ms`);
}

async function safeReport(id) {
  try {
    const find = await fetchStudentByIdAsync(id);
    console.log(`พบข้อมูล: ${find.name} (เกรด ${toGrade(find.score)})`);
  } catch (err) {
    console.error(`ตรวจไม่พบ: ${err.message}`);
  } finally {
    console.log(`-- จบการตรวจสอบ ${id} --`);
  }
}

const tests = ["1", "2", "3", "4", "42", undefined, ""];

for (const value of tests) {
  safeReport(value);
}

async function main() {
  console.log("=== Sequential ===");
  await reportSequential();

  console.log("=== Parallel ===");
  await reportParallel();
}
main();

// 1. ต้อง try catch ครอบ function promise เพื่อ handle error ไม่งั้นจะทำให้ process crash

// 2. ถ้าลืม await หน้า promise.all จะทำให้ function reportParallelWithoutAwait ทำงานไม่เสร็จสมบูรณ์
// เพราะ process จะจบก่อนที่ promise.all จะ resolve

async function reportParallelWithoutAwait() {
  const startTime = Date.now();

  const promises = students.map(async (student) => {
    const data = await fetchStudentByIdAsync(student.id);
    console.log(`นักศึกษา ${data.name} ได้เกรด ${toGrade(data.score)}`);
  });
  Promise.all(promises); // ลิืม

  const endTime = Date.now();
  console.log(`ใช้เวลา ${endTime - startTime} ms`);
}
