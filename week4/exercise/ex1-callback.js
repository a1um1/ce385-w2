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

function fetchStudentById(id, callback) {
  if (typeof id !== "string" || id.length === 0) return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
  const find = students.find((s) => s.id === id);
  if (!find) return callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
  setTimeout(() => {
    return callback(null, find);
  }, 300);
}

const tests = ["1", "42", undefined, ""];

for (const [index, value] of tests.entries()) {
  fetchStudentById(value, (err, student) => {
    if (err) {
      console.error(`Test ${index + 1}:`, err.message);
    } else {
      console.log(`Test ${index + 1}:`, student.name);
    }
  });
}

// 1. ถ้าเราไม่ตรวจ Error ก่อนที่จะอ่าน name จาก student จะทำให้เกิดบัค อ่านค่า จาก Undefined

// 2. เราต้อง return callback เพื่อให้ออกจาก function ทันที ไม่งั้นจะเกิด callback ซ้ำ
