import express from "express";

const app = express();
app.use(express.json());

const TODOS = [
  {
    id: "1",
    title: "ทำการบ้าน",
    done: false,
    priority: "high",
  },
  {
    id: "2",
    title: "ไปเที่ยว",
    done: false,
    priority: "normal",
  },
  {
    id: "3",
    title: "ทำงาน",
    done: true,
    priority: "low",
  },
  {
    id: "4",
    title: "อ่านหนังสือ",
    done: false,
    priority: "normal",
  },
];

const PRIORITIES = ["low", "normal", "high"];

function validateTodo(req, res, next) {
  const { title, priority } = req.body;
  if (typeof title !== "string" || title.trim() === "")
    return res.status(400).json({ error: "title ต้องเป็น string และไม่ว่าง" });

  if (!PRIORITIES.includes(priority)) return res.status(400).json({ error: `priority ไม่ถูกต้อง` });

  next();
}

app
  .get("/", (req, res) => {
    res.send("สวัสดี Postman");
  })
  .get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

const todoRouter = express.Router(); //  Create new router for /api/todos

todoRouter
  .get("/", (req, res) => {
    res.json(TODOS);
  })
  .get("/:id", (req, res) => {
    const { id } = req.params;
    const todo = TODOS.find((todo) => todo.id === id);
    if (!todo) return res.status(404).json({ error: `ไม่พบรายการ ${id}` });

    res.json(todo);
  })
  .post("/", validateTodo, (req, res) => {
    const { title, priority } = req.body;
    const newTodo = {
      id: (TODOS.length + 1).toString(),
      title,
      done: false,
      priority,
    };
    TODOS.push(newTodo);
    res.status(201).json(newTodo);
  });

app.use("/api/todos", todoRouter);

const PORT = 3002;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
