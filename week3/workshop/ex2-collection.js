import { students } from "./students.mock.js";

const passThreshold = 50;

function findById(students, id) {
  return students.find((student) => student.id === id);
}

function findByMajor(students, major) {
  // filter by major
  return students.filter((student) => student.major === major);
}

function hasFailingStudent(students) {
  // return boolen if there a student score less than 50
  // using some method
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  return students.some((student) => student.score < passThreshold);
}

function getEmail(students, id) {
  return findById(students, id)?.contact?.email || "ไม่พบข้อมูลติดต่อ";
}

// Part 2 - Test
console.log("findById(students, 1)", findById(students, 1));
console.log('findByMajor(students, "CE")', findByMajor(students, "CE"));
console.log("hasFailingStudent(students)", hasFailingStudent(students));
console.log("getEmail(students, 1)", getEmail(students, 1));

// Unknown Case
console.log("findById(students, 9999)", findById(students, 9999));
console.log("getEmail(students, 9999)", getEmail(students, 9999));

// No Email
console.log("findById(students, 7)", findById(students, 7));
console.log("getEmail(students, 7)", getEmail(students, 7));
