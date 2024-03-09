import React, { useState } from 'react';

export default function Counter() {
 
  const [count, setCount] = useState(0);


  function incrementCounter() {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button style={{backgroundColor:"blue", color:"white"}} onClick={incrementCounter}>Increment</button>
    </div>
  );
}

