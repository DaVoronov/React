import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementClick() {
    setCounter(counter + 1);
  }

  function handleDecrementClick() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
    </div>
  );
}
export default Counter;
