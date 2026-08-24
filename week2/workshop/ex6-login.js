// Part 1

const username = "admin",
  password = "ce385pass";

function login(inputUser, inputPass, role, isActive, age) {
  if (!(inputUser === username && inputPass === password)) return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";

  if (isActive === false) return "บัญชีนี้ถูกระงับการใช้งาน";

  if (age < 18) return "อายุไม่ถึงเกณฑ์";

  if (role === "อาจารย์") return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";

  if (role === "นักศึกษา") return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ใช้งาน)";
}

// Part 2
const testCase = [
  {
    name: "Case สำเร็จ (อาจารย์)",
    inputUser: "admin",
    inputPass: "ce385pass",
    role: "อาจารย์",
    isActive: true,
    age: 30,
  },
  {
    name: "Case สำเร็จ (นักศึกษา)",
    inputUser: "admin",
    inputPass: "ce385pass",
    role: "นักศึกษา",
    isActive: true,
    age: 20,
  },
  {
    name: "Case รหัสผ่านผิด",
    inputUser: "admin",
    inputPass: "password",
    role: "อาจารย์",
    isActive: true,
    age: 30,
  },
  {
    name: "Case ชื่อผู้ใช้ผิด",
    inputUser: "user",
    inputPass: "ce385pass",
    role: "อาจารย์",
    isActive: true,
    age: 30,
  },
  {
    name: "บัญชีถูกระงับการใช้งาน",
    inputUser: "admin",
    inputPass: "ce385pass",
    role: "อาจารย์",
    isActive: false,
    age: 30,
  },
  {
    name: "อายุไม่ถึงเกณฑ์",
    inputUser: "admin",
    inputPass: "ce385pass",
    role: "อาจารย์",
    isActive: false,
    age: 17,
  },
];

for (const test of testCase) {
  console.log(`===== ${test.name} =====`);
  const result = login(test.inputUser, test.inputPass, test.role, test.isActive, test.age);
  console.log(result);
  console.log("========================\n");
}

// Part 3
// 1. ทำไมต้องตรวจ username/password ก่อน ตรวจ role
// เราต้องรู้ว่า User ที่ Login เข้ามาเป็นใครก่อน ถึงจะสามารถตรวจสอบ Role ได้

// 2. ถ้าย้ายการตรวจ "อายุไม่ถึงเกณฑ์" ขึ้นไปเป็นข้อแรก จะเกิดปัญหาอะไร (คิดในแง่ความปลอดภัย: เราจะบอกอะไรกับคนที่ยังไม่ได้พิสูจน์ตัวตน)
// ถ้าข้อมูลอายุอยู่ในฐานข้อมูล แปลว่า คนที่ยังไม่ได้พิสูจน์ตัวตนก็สามารถรู้ได้ว่าอายุเท่าไหร่
