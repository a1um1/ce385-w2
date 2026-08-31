console.log("add(5, 3):", add(5, 3));

function add(a, b) {
  return a + b;
}

try {
  subtract(5, 3);
} catch (error) {
  console.log("Error:", error.message);
}

const subtract = function (a, b) {
  return a - b;
};
