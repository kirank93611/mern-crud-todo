import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost/todos")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTodos(data);
  //     });
  // }, []);
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
