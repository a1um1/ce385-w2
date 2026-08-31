import { students } from "./students.mock.js";
import { grading_scores } from "./grading.mock.js";

const passThreshold = 50;

function toGrade(score) {
  return grading_scores.find((rule) => score >= rule.minScore)?.grade || "F";
}

function getNames(students) {
  return students.map((student) => student.name);
}

function getPassedStudents(students) {
  return students.filter((student) => student >= passThreshold);
}

function getTotalScore(students) {
  return students.reduce((base, student) => {
    return base + (student?.score || 0);
  }, 0);
}

function getAverageScore(students) {
  // SHOULDN'T DIVIDE BY 0 !!!!
  if (students.length === 0) return 0;
  return getTotalScore(students) / students.length;
}

function countByGrade(students) {
  return students.reduce((base, student) => {
    const grade = toGrade(student.score); // คำนวนเกรด

    base[grade] ||= 0; // Logical Or Assignment
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment

    base[grade]++; // Increment by 1
    return base;
  }, {});
}

function getTopStudent(students) {
  return students.reduce((base, student) => {
    // เช็คว่า ถ้า ฐานมีคะแนนเยอะกว่า นักเรียนให้ return ฐาน
    if (base?.score && base?.score > student?.score) return base;

    // แต่ถ้านักเรียนเยอะกว่า ให้เปลี่ยนเป็นนักเรียน
    return student;
  }, undefined);
}

// Part 2 - Testing
// ส่วนที่ 2 — ท่อข้อมูลต่อกัน เขียนคำสั่ง บรรทัดเดียว หาคะแนนเฉลี่ยของนักศึกษาสาขา CE ที่สอบผ่าน โดยต่อ filter → map → reduce

console.log(`getNames(students)`, getNames(students));
console.log(`getPassedStudents(students)`, getPassedStudents(students));
console.log(`getTotalScore(students)`, getTotalScore(students));
console.log(`getAverageScore(students)`, getAverageScore(students));
console.log(`countByGrade(students)`, countByGrade(students));
console.log(`getTopStudent(students)`, getTopStudent(students));

const filtered_average_score = students
  .filter((student) => student.major === "CE")
  .map((student) => student.score)
  .reduce((base, score, _index, array) => base + score / array.length, 0);

console.log("Average score of CE student :", filtered_average_score);

// Part 3 - Edge Case

console.log(`getNames([])`, getNames([]));
console.log(`getPassedStudents([])`, getPassedStudents([]));
console.log(`getTotalScore([])`, getTotalScore([]));
console.log(`getAverageScore([])`, getAverageScore([]));
console.log(`countByGrade([])`, countByGrade([]));
console.log(`getTopStudent([])`, getTopStudent([]));
