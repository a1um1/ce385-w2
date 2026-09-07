const wait = (ms, value, willFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value)), ms);
  });

const runTestPromiseAll = async (prefix, tests) => {
  try {
    const promises = await Promise.all(
      tests.map(async (test) => wait(test.time, test.name, test.willFail)),
    );
    console.log(`${prefix} ผลลัพธ์:`, promises);
    return promises;
  } catch (err) {
    console.error(`${prefix} เกิดข้อผิดพลาด:`, err.message);
  }
};

const runTestPromiseAllSettled = async (prefix, tests) => {
  try {
    const promises = await Promise.allSettled(
      tests.map(async (test) => wait(test.time, test.name, test.willFail)),
    );
    console.log(`${prefix} ผลลัพธ์:`, promises);
    return promises;
  } catch (err) {
    console.error(`${prefix} เกิดข้อผิดพลาด:`, err.message);
  }
};

const runTestPromiseAny = async (prefix, tests) => {
  try {
    const promises = await Promise.any(
      tests.map(async (test) => wait(test.time, test.name, test.willFail)),
    );
    console.log(`${prefix} ผลลัพธ์:`, promises);
    return promises;
  } catch (err) {
    console.error(`${prefix} เกิดข้อผิดพลาด:`, err.message);
  }
};

const runTestPromiseRace = async (prefix, tests) => {
  try {
    const promises = await Promise.any(
      tests.map(async (test) => wait(test.time, test.name, test.willFail)),
    );
    console.log(`${prefix} ผลลัพธ์:`, promises);
    return promises;
  } catch (err) {
    console.error(`${prefix} เกิดข้อผิดพลาด:`, err.message);
  }
};

//	1. หน้าแรก: "โปรไฟล์" (300ms) + "ตารางเรียน" (400ms) + "ประกาศ" (500ms)
const tests1 = [
  {
    name: "โปรไฟล์",
    time: 300,
    willFail: false,
  },
  {
    name: "ตารางเรียน",
    time: 400,
    willFail: false,
  },
  {
    name: "ประกาศ",
    time: 500,
    willFail: false,
  },
];

const tests1Fail = [
  {
    name: "โปรไฟล์",
    time: 300,
    willFail: false,
  },
  {
    name: "ตารางเรียน",
    time: 400,
    willFail: true,
  },
  {
    name: "ประกาศ",
    time: 500,
    willFail: false,
  },
];

//	2	แจ้งเตือนผลสอบ: "อีเมล" (300ms สำเร็จ) · "SMS" (500ms ล้ม) · "แอป" (400ms สำเร็จ)
const tests2 = [
  {
    name: "อีเมล",
    time: 300,
    willFail: false,
  },
  {
    name: "SMS",
    time: 500,
    willFail: true,
  },
  {
    name: "แอป",
    time: 400,
    willFail: false,
  },
];

// 3	mirror server: mirror-A (300ms ล้ม) · mirror-B (600ms สำเร็จ)
const tests3 = [
  {
    name: "mirror-A",
    time: 300,
    willFail: true,
  },
  {
    name: "mirror-B",
    time: 600,
    willFail: false,
  },
];

// 4	ค้นหา: ฐานข้อมูล (1200ms สำเร็จ) แต่ผู้ใช้รอได้ 800ms
const tests4 = [
  {
    name: "ฐานข้อมูล",
    time: 1200,
    willFail: false,
  },
  {
    name: "cache",
    time: 800,
    willFail: false,
  },
];

async function main() {
  await runTestPromiseAll("1. ทดสอบกรณีที่สำเร็จ", tests1);
  await runTestPromiseAll("1. ทดสอบกรณีที่ล้มเหลว", tests1Fail);

  await runTestPromiseAllSettled("2. ทดสอบ Promise.allSettled", tests2);
  await runTestPromiseAny("3. ทดสอบ Promise.any", tests3);
  await runTestPromiseRace("4. ทดสอบ Promise.race", tests4);
}

main();
