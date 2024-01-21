// write basic express boilerplate code,
//wit express.json() middleware
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const { todo } = require("./db");
const cors = require("cors");

const PORT = 3000;
app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //db call to create a todo
  const createdtodo = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({ msg: req.body });
  // put it in mongodb
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  console.log(todos); //promise

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log("Connected to node server");
});
