// Part 1
const var_string = "Hello, World!",
  var_number = 42,
  var_boolean = true,
  var_undefined = undefined,
  var_null = null,
  var_array = [1, 2, 3];

console.log("ค่า:", var_string, "| ชนิด:", typeof var_string);
console.log("ค่า:", var_number, "| ชนิด:", typeof var_number);
console.log("ค่า:", var_boolean, "| ชนิด:", typeof var_boolean);
console.log("ค่า:", var_undefined, "| ชนิด:", typeof var_undefined);
console.log("ค่า:", var_null, "| ชนิด:", typeof var_null);
console.log("ค่า:", var_array, "| ชนิด:", typeof var_array);
console.log("========\n");

// Part 2
console.log("type of null =", typeof null);
// type ของ null จะเป็น object และเป็นบัคของ javascript

let var_uninitialized;
console.log("type of uninitialized =", typeof var_uninitialized);
// จะเป็นชนิด Undefined เพราะตัวแปรยังไม่ได้ถูกกำหนดค่า

const var_NaN = Number("abc");
console.log("type of NaN =", typeof var_NaN);
// type ของ NaN จะเป็น number เพราะ NaN เป็นค่าที่ไม่ใช่ตัวเลข แต่เป็นชนิด number

// Part 3
const inputAge = "20",
  inputScore = "85.5";

console.log("inputAge + 5 =", Number(inputAge) + 5);
console.log("inputScore =", Number(inputScore));
console.log("inputAge === 20", inputAge === 20);
console.log("Number(inputAge) === 20", Number(inputAge) === 20);
