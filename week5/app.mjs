import express from "express";

const app = express();

const TODOS = [
  {
    id: "task-01",
    title: "ทำการบ้าน",
    done: false,
    priority: "high",
  },
  {
    id: "task-02",
    title: "ไปเที่ยว",
    done: false,
    priority: "normal",
  },
  {
    id: "task-03",
    title: "ทำงาน",
    done: true,
    priority: "low",
  },
  {
    id: "task-04",
    title: "อ่านหนังสือ",
    done: false,
    priority: "normal",
  },
];

app
  .get("/", (req, res) => {
    res.send("สวัสดี Postman");
  })
  .get("/health", (req, res) => {
    res.json({ status: "ok" });
  })
  .get("/todos", (req, res) => {
    res.json(TODOS);
  })
  .get("/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = TODOS.find((todo) => todo.id === id);
    if (!todo) return res.status(404).json({ error: `ไม่พบรายการ ${id}` });

    res.json(todo);
  });

const PORT = 3002;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
