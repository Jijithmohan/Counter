import React from "react";


const Counter = ({count,OnIncrement,OnDecrement}) => {
  
  return (
    <>
    <div>
    <h1>The count is {count}</h1>
      <button onClick={OnIncrement}>
        OnIncrement
      </button>
      <button onClick={OnDecrement}>
        OnDecrement
      </button>
    </div>
    </>
  );
};

export default Counter;
