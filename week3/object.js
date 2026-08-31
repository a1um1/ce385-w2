const course = {
  code: "CE385",
  instructor: {
    name: "Sanayu",
    email: "sanayu.jin@dpu.ac.th",
  },
  schedule: {
    day: "จันทร์",
    room: "5-701",
  },
};

console.log("course.code :", course.code);
console.log("course.instructor.email :", course.instructor.email);
console.log("course.assistant :", course.assistant); // <- this will error

try {
  console.log(course.assistant.name); // <- trying to access undefined
} catch (error) {
  console.log("error", error.name, error.message);
}

console.log("");
console.log("course.assistant?.name :", course.assistant?.name); // <- No error
console.log("?. with ?? :", course.assistant?.name ?? "No instructor");

const settings = { retryCount: 0, prefix: "" };
console.log("");
console.log("retryCount ?? 3 :", settings.retryCount ?? 3);
console.log("retryCount || 3 :", settings.retryCount || 3);
console.log("prefix ?? CE :", JSON.stringify(settings.prefix ?? "CE"));
console.log("prefix || CE :", JSON.stringify(settings.prefix || "CE"));
