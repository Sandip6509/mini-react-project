import {useMemo, useState} from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Build a Todo App', completed: true },
        { id: 3, title: 'Deploy to production', completed: false },
    ]);

    const completedTodos = useMemo(() =>{
        return todos.filter((todo) => todo.completed)
    },[todos]);

    const handleCheckboxChange = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }
    return (
        <div className='grid place-content-center bg-slate-600 h-screen'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                <h2 className='text-3xl font-bold p-4 text-center'>Todo List</h2>
                {todos.map((todo) =>(
                    <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
                <h2 className='text-3xl font-bold p-4 text-center'>Completed Todos</h2>
                {completedTodos.map((todo) =>(
                    <p className='px-5' key={todo.id}>{todo.title}</p>
                ))}
            </div>
        </div>
    )
}

export default TodoList