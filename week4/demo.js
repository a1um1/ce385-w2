const STUDENTS = [
  {
    id: "6501",
    name: "John Doe",
    score: 79,
  },
  {
    id: "6502",
    name: "Jane Smith",
    score: 85,
  },
];

function fetchStudentByID(id, callback) {
  setTimeout(() => {
    const student = STUDENTS.find((s) => s.id === id);
    callback(student);
  }, 400);
}

fetchStudentByID("6501", (student) => {
  console.log("ได้ข้อมูล", student.name);
});

console.log("บรรทัดนี้ได้ข้อมูล");
