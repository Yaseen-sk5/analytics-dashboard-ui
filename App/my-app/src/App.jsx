import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // Heavy calculation
  const slowCalculation = (num) => {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 1000000000; i++) {} // fake delay
    console.log("Calculated");
    return num + 1;
  };

  // Without useMemo, this would re-run on every render:
  // const result = slowCalculation(number);

   const result = useMemo(() => {
    return slowCalculation(number);
   }, [number]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>Result: {result}</h2>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>  
  );
}

export default App;