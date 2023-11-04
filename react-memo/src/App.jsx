import React from "react";
import ParentComponent from "./components/ParentComponent";
function App() {

  return (
    <div className="grid place-content-center">
      <h2 className="text-slate-700 font-bold text-4xl p-6">
        React.memo() Guided Project
      </h2>
      <ParentComponent/>
    </div>
  );
}

export default App;
