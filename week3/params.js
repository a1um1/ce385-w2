function createStudent(name, age = 1, isActive = true) {
  return { name, age, isActive };
}

console.log("no year", createStudent("John"));
console.log("all params", createStudent("John", 20, false));
console.log("undefined age", createStudent("John", undefined));
console.log("null age", createStudent("John", null));
console.log("age 0", createStudent("John", 0));

function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("sumAll(1, 2, 3):", sumAll(1, 2, 3));
console.log("sumAll():", sumAll());

const formatScores = (name, ...scores) => {
  return `${name}'s scores are: ${scores.join(", ")}`;
};

console.log(formatScores("John", 90, 85, 92));
