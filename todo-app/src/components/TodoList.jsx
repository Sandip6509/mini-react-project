import { useState } from 'react'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = (e) =>{
    e.preventDefault()
    if(newTask.trim() !== ''){
        setTasks([...tasks,{text: newTask, isComplete: false}])
        setNewTask('')
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((task,i) => i !== index))
  }

  const markTaskComplete = (index) => {
    const newTasks = [...tasks]
    newTasks[index].isComplete = !newTasks[index].isComplete
    setTasks(newTasks)
  }

  return (
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo List</h1>
            <div className="mb-4">
            <form onSubmit={addTask} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {tasks.map((task,index) => (
                    <div 
                    key={index}
                    className='w-full'
                    >
                    <div
                        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                            task.isComplete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                        }`}
                    >
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={task.isComplete}
                            onChange={() => markTaskComplete(index)}
                        />
                        <input
                            type="text"
                            className={`border outline-none w-full bg-transparent rounded-lg border-transparent
                                 ${task.isComplete ? "line-through" : ""}`}
                            value={task.text}
                            readOnly
                        />
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                            onClick={() => removeTask(index)}
                        >
                            ❌
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TodoList