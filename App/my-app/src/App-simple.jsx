import { useState, useMemo } from "react";

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    background: "#242424",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    fontFamily: "system-ui, Arial, sans-serif",
  },
  button: {
    background: "#1a1a1a",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

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

  // WITH useMemo (fast): only re-runs when `number` changes
  const result = useMemo(() => slowCalculation(number), [number]);

  // WITHOUT useMemo (slow): to show the problem, comment the line above
  // and uncomment the line below
  // const result = slowCalculation(number);

  return (
    <div style={styles.page}>
      <h1 style={{ fontSize: "56px", margin: 0 }}>Count: {count}</h1>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2 style={{ margin: 0 }}>Result: {result}</h2>
      <button style={styles.button} onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
    </div>
  );
}

export default App;
