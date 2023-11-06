import { useState } from "react";
import MemoizedComponent from "./components/MemoizedComponent";
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="grid content-center">
        <h1 className="text-3xl font-bold text-center">React Memo Two</h1>
        <button onClick={incrementCount} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">Increment Count</button>
        <MemoizedComponent prop1="Hello" prop2={count} />
      </div>
    </>
  );
}

export default App;
