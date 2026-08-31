const students = [
  {
    id: 1,
    name: "Glyn",
    major: "CE",
    score: 53,
    contact: { email: "gvalentetti0@skype.com", phone: "513-851-5511" },
  },
  {
    id: 2,
    name: "Haily",
    major: "IT",
    score: 89,
    contact: { email: "hshale1@imdb.com", phone: "836-677-5894" },
  },
  {
    id: 3,
    name: "Hastie",
    major: "CE",
    score: 44,
    contact: { email: "hsteadman2@msu.edu", phone: "264-918-3624" },
  },
  {
    id: 4,
    name: "Creighton",
    major: "IT",
    score: 80,
    contact: { email: "csollime3@instagram.com", phone: "959-856-1612" },
  },
  {
    id: 5,
    name: "Cherey",
    major: "CE",
    score: 72,
    contact: { email: "cfarlane4@lulu.com", phone: "591-306-5000" },
  },
  {
    id: 6,
    name: "Michel",
    major: "IT",
    score: 74,
    contact: { email: "mshann5@yellowpages.com", phone: "559-368-3881" },
  },

  {
    id: 7,
    name: "NoEmail",
    major: "CE",
    score: 10,
  },
];

function findById(students, id) {
  return students.find((student) => student.id === id);
}

function findByMajor(students, major) {
  // filter by major
  return students.filter((student) => student.major === major);
}

function hasFailingStudent(students) {
  // return boolen if there a student score less than 50
  // using some method
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  return students.some((student) => student.score < 50);
}

function getEmail(students, id) {
  return findById(students, id)?.contact?.email || "ไม่พบข้อมูลติดต่อ";
}

// Part 2 - Test
console.log("findById(students, 1)", findById(students, 1));
console.log('findByMajor(students, "CE")', findByMajor(students, "CE"));
console.log("hasFailingStudent(students)", hasFailingStudent(students));
console.log("getEmail(students, 1)", getEmail(students, 1));

// Unknown Case
console.log("findById(students, 9999)", findById(students, 9999));
console.log("getEmail(students, 9999)", getEmail(students, 9999));

// No Email
console.log("findById(students, 7)", findById(students, 7));
console.log("getEmail(students, 7)", getEmail(students, 7));
