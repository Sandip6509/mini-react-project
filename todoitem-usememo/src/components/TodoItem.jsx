import React from 'react'

const TodoItem = ({ id, title, completed, handleCheckboxChange }) => {
    return (
        <div className='px-5'>
            <input
            type='checkbox'
            id={id}
            checked={completed}
            onChange={() => handleCheckboxChange(id)}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
            />
            <label htmlFor={id} className='ml-2 text-sm font-medium text-gray-900'>{title}</label>
        </div>
    )
}

export default TodoItem