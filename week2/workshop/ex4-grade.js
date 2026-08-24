function toGrade(score) {
  if (score < 0 || score > 100) {
    console.error("คะแนนต้องอยู่ระหว่าง 0 ถึง 100");
    return null;
  }

  // ต้องเรียงคะแนนจากมากไปน้อย
  // เพราะถ้าเรียงจากน้อยไปมาก จะทำให้เงื่อนไขไม่ถูกต้อง
  // เช่น ถ้า score = 80 จะเข้าเงื่อนไข score >= 75 ก่อน ทำให้ได้เกรด B+ แทนที่จะเป็น A
  if (score >= 80) return "A";
  else if (score >= 75) return "B+";
  else if (score >= 70) return "B";
  else if (score >= 65) return "C+";
  else if (score >= 60) return "C";
  else if (score >= 55) return "D+";
  else if (score >= 50) return "D";
  else return "F";
}

const testCases = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

for (const score of testCases) {
  const grade = toGrade(score);
  if (grade !== null) {
    console.log(`คะแนน: ${score} → เกรด: ${grade}`);
  }
}
