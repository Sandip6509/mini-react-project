import { useCallback, useState } from "react";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

function App() {
    const [items, setItems] = useState([]);

    const addItem = useCallback((text) => {
      setItems((prevItems) => [...prevItems,text])
    },[]);
    return (
      <div className='bg-slate-500 h-screen'>
        <div className="p-4">
          <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Todo List</h1>
              <AddItemForm addItem={addItem}/>
              <ItemList items={items}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
