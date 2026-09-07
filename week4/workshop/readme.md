# Workshop 3
สร้างโฟลเดอร์ ce385-week4 ของตัวเอง แล้วสร้างไฟล์ 4 ไฟล์ตามโจทย์ 4 ข้อถัดไป

ไฟล์	หัวข้อ	ฝึกอะไร
- ex1-callback.js	ระบบตรวจทะเบียน	error-first callback · การจัดการข้อผิดพลาด
- ex2-promise.js	แปลงเป็น Promise	new Promise · then/catch/finally · โซ่ · promisify (โบนัส)
- ex3-async-await.js	รายงานฉบับ async	await ล้วน · try-catch-finally · ลำดับ vs ขนาน
- ex4-combinators.js	เลือกนักสืบ	all / allSettled / any / race ตามสถานการณ์
กติกาทั่วไป: โค้ดทั้งหมดรันด้วย node <ชื่อไฟล์> ต้องไม่ crash · ห้ามใช้ var · ใช้ === · ทุก Promise ต้องมี .catch หรือถูก await ใน try-catch

ทุกข้อมูลจำลองให้หน่วงเวลา 300ms เหมือนกันทั้ง 4 ข้อ — เพื่อให้เทียบเวลา "ตามลำดับ vs ขนาน" ได้จริง ต่อยอดจาก Workshop 2 ได้เลย: ข้อมูลนักศึกษาและ toGrade ใช้ชุดเดิม