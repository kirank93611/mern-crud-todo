import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos, setTodos] = useState(0)
  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json=await res.json();
      setTodos
    })
  return (
     <CreateTodo></CreateTodo>
  )
}

export default App
