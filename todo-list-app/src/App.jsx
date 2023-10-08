import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='bg-gray-100 dark:bg-slate-900 h-screen'>
      <TodoList/>
    </div>
  )
}

export default App
