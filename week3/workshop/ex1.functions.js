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

function isValidScore(score) {
  // เช็คจาก type ของตัวแปรว่าเป็นเลขไหม
  return typeof score === "number";
}

function toGrade(score) {
  return grading_scores.find((rule) => score >= rule.minScore)?.grade || "F";
}

function calculateWorkshopScore(raw, full = 60, weight = 20) {
  return (raw / full) * weight;
}

function calculateTotal(workshop, attendance, project, midterm, final) {
  return [calculateWorkshopScore(workshop), attendance, project, midterm, final].reduce(
    (base, score) => {
      if (isValidScore(score)) {
        return base + score;
      }
      return base;
    },
    0,
  );
}

// Part 2 - Test
const students = [
  {
    id: "6501",
    name: "Somchai",
    workshop: 30,
    attendance: 10,
    project: 20,
    final: 15,
  },

  {
    id: "6502",
    name: "Somying",
    workshop: 29,
    attendance: 8,
    project: 20,
    final: 24,
  },

  {
    id: "6502",
    name: "Somying",
    workshop: 23,
    attendance: 4,
    project: 20,
    final: 21,
  },
];

const calculatedScore = students.map((student) => {
  const totalScore = calculateTotal(
    student.workshop,
    student.attendance,
    student.project,
    student.final,
  );
  const grade = toGrade(totalScore);
  return {
    ...student,
    totalScore,
    grade,
  };
});

console.log("รายงานคะแนน");
console.table(calculatedScore);

// Part 3 - Edge case test
console.log("A: calculateWorkshopScore(48) : ", calculateWorkshopScore(48));
console.log("B: calculateWorkshopScore(48, 60, 20) : ", calculateWorkshopScore(48, 60, 20));
// เหตุผลที่ case A และ B ได้ผลลัพธ์เหมือนกัน เพราะ A มี default parameter ที่มีค่าเท่ากันกับ  B

console.log(
  "C: calculateWorkshopScore(48, undefined, 25) : ",
  calculateWorkshopScore(48, undefined, 25),
);
// Case C จะมีผลลัพธ์ที่ต่างออกไป เพราะ parameter ตัวสุดท้ายมันต่างกัน
