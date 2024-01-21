import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import createRoot from "react-dom/client";
import React from "react";
// import CreateTodo from "./components/CreateTodo.jsx";
// import Todos from "./components/Todos.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
