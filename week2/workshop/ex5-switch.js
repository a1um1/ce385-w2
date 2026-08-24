// part 1
function getMenuPrice(itemName) {
  switch (itemName) {
    case "ข้าวผัด":
    case "ข้่าวมันไก่":
    case "ข้าวหมูแดง":
      return 50;
    case "ผัดไทย":
      return 60;
    case "ต้มยำกุ้ง":
      return 120;
    default: // อื่น ๆ
      return 0;
  }
}

// part 2
const getSizeMultiplier = (size) => {
  switch (size) {
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default: // ธรรมดา หรือ อื่น ๆ
      return 1;
  }
};

// part 3
const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้่าวมันไก่", size: "พิเศษ", qty: 3 },
  { menu: "ข้าวขามหมู", size: "อะไรเอ่ย", qty: 1 },
];

for (const order of orders) {
  const price = getMenuPrice(order.menu) * getSizeMultiplier(order.size) * order.qty;
  console.log(`${order.menu} (${order.size}) x${order.qty} = ${price} บาท`);
}
