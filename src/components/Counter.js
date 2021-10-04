import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  
  const increase = () => {
    setCount(count + 1);
  }; 
  
  const decrease = () => setCount(prevCount => {
    if (prevCount <= 0) return 0;
    return prevCount - 1;
  })
  
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <p className="count">{count}</p>
      <div className="controls">
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}