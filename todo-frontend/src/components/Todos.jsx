// import { useState, useEffect } from "react";

// export function Todos(todos) {
//   console.log(todos);
//   return (
//     <div>
//       {todos.map((todo) => {
//         return (
//           <div>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//           </div>
//         );
//       })}
//       <button>Mark as completed</button>
//     </div>
//   );
// }

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
