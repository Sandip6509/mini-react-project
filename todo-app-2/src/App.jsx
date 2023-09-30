import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { title: 'Learn React', completed: false },
    { title: 'Build a todo app', completed: false },
    { title: 'Publish to GitHub', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {title: newTodo, completed: false}
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  }

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleComplete(index)}>
            {todo.title} {todo.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default App
