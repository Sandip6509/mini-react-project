import { useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count+1);
    }
    return (
        <div>
        <h3 className="text-slate-700 font-normal text-3xl">Parent Component</h3>
        <p className="text-slate-700 font-normal text-2xl">Count : {count}</p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClick}>Increment</button>
        <ChildComponent count={count}/> 
        </div>
    );
};

export default ParentComponent;
