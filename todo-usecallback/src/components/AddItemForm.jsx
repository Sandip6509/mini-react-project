import React, { useState } from 'react'

const AddItemForm = ({addItem}) => {
    const [text, setText] = useState('');

    const handleChange = (e) =>{
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== ''){
            addItem(text);
            setText('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='flex'>
            <div className='flex-none'>
                <input type="text" value={text} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2' placeholder="Enter Item Name" />
            </div>
            <div className='flex-none ml-2'>
                <button type='submit' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Add Item</button>
            </div>
        </div>
    </form>
  )
}

export default AddItemForm