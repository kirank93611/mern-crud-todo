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

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.complete == true ? "completed" : "Not Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
