import React from 'react'

const MemoizedComponent = React.memo(({ prop1, prop2 }) => {
  return (
    <div>
        <h1>Memoized Component</h1>
        <p>Prop 1: {prop1}</p>
        <p>Prop 2: {prop2}</p>
    </div>
  );
});

export default MemoizedComponent