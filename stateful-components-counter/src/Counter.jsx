import React,{ useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const MAX_VALUE = 10;

    const increment = () => {
        if (count < MAX_VALUE) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="counter">
            <h2 className="counter-heading">Counter</h2>
            <p className="counter-value">Count: {count}</p>
            <button
                className="counter-button"
                onClick={increment}
                disabled={count === MAX_VALUE}
            >
                Increment
            </button>
            <button
                className="counter-button"
                onClick={decrement}
                disabled={count === 0}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter