import React, { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counter-display">
        Count: {count}
      </div>
      <div className="button-group">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
