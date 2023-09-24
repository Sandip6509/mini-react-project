import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count === 0){
        return;
    }
    setCount(count - 1)
  }
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
        <div className='space-x-2'>
            <p className='text-3xl font-bold px-10 p-7'>Count: {count}</p>
            <button onClick={increment} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Increment</button>
            <button onClick={decrement} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Decrement</button>
        </div>
    </div>
    {/* <div className='flex items-center justify-center space-x-2'> */}
    {/* </div> */}
    </>
  )
}

export default Counter