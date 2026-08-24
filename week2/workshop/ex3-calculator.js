// Part 1
const workshopRaw = 48,
  attendance = 9,
  project = 17,
  midterm = 15,
  final = 24;

const maximumScore = 100;

// Part 2
const calculatedWorkshopScore = (workshopRaw / 60) * 20;
const totalScore = calculatedWorkshopScore + attendance + project + midterm + final;
const percentage = (totalScore / maximumScore) * 100;

const remainScoreUntil80 = 80 - totalScore;

console.log(`คะแนน Workshop ดิบ: ${workshopRaw} คะแนน`);
console.log(`คะแนน Workshop ที่คำนวณได้: ${calculatedWorkshopScore} คะแนน`);
console.log(`คะแนน Attendance: ${attendance} คะแนน`);
console.log(`คะแนน Project: ${project} คะแนน`);
console.log(`คะแนน Midterm: ${midterm} คะแนน`);
console.log(`คะแนน Final: ${final} คะแนน`);
console.log(`คะแนนรวม: ${totalScore} คะแนน`);
console.log(`เปอร์เซ็นต์: ${percentage.toFixed(2)}%`);
console.log(`คะแนนที่เหลือจนถึง 80: ${remainScoreUntil80} คะแนน`);
