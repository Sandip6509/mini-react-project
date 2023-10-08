import React, { useState } from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from '../hook/useDarkMode';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks,setTasks] = useState([]);
    const [darkMode, setDarkMode] = useDarkMode();
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const completeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    const deleteTask = (index) =>{
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    const toggleDarkMode = (checked) =>{
        setDarkMode(checked);
    }
    return (
        <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
                <div className="flex justify-between">
                    <h1 className="font-medium dark:text-white">Todo List App</h1>
                    <DarkModeSwitch
                        style={{ width: '20px', height: '20px' }}
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        size={120}
                    />
                </div>
                <TodoForm addTask={addTask} />
                <div className="h-80 overflow-x-hidden overflow-y-auto todo-list">
                    {tasks.map((task, index) =>(
                        <TodoItem
                            key={index}
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TodoList