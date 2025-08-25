// ...existing code...
export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1);
  };
  const decreaseValue = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Click Counter</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}
