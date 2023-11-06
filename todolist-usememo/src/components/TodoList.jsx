import React,{ useState, useMemo } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Deploy the project', completed: false },
    ]);
    const [inputValue, setInputValue] = useState('');
    const completedTodos = useMemo(() => {
        return todos.filter(todo => todo.completed);
    },[todos]);

    const handleAddTodo = (event) => {
        event.preventDefault();
        if(inputValue.trim() !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setInputValue('');
        }
    }

    const handleTodoCompletion = (id) =>{
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo    
            )
        );
    };

    const handleTodoDeletion = (id) =>{
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
  return (
    <div className='p-4'>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div>
                <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center'>Todo List</h1>
                <form onSubmit={handleAddTodo}>
                    <div className='flex'>
                        <div className='flex-none'>
                            <input type="text" value={inputValue} onChange={ event => setInputValue(event.target.value)} placeholder='Add a new todo' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'/>
                        </div>
                        <div className='flex-none ml-2'>
                            <button type='submit' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Add</button>
                        </div>
                    </div>
                </form>
                <ul className='max-w-md space-y-1 text-gray-500 list-inside'>
                    {todos.map(todo => (
                        <li className='flex items-center' key={todo.id}>
                            <span
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                            onClick={() => handleTodoCompletion(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button className='ml-1' onClick={() => handleTodoDeletion(todo.id)}>
                            <svg className="w-3.5 h-3.5 text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                            </svg>
                            </button>
                        </li>
                    ))}
                </ul>
                <p>Completed Todos: {completedTodos.length}</p>
            </div>
        </div>
    </div>
  )
}

export default TodoList