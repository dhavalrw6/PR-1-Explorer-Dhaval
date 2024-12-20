import React, { useEffect, useState } from "react";
import Test1 from "./components/test1";
import Test2 from "./components/test2";

function App() {
  const [count, setCount] = useState(0);
  const [isActive,setActive] = useState(true);
  useEffect(() => {
    console.log("Render... " + count);

    return () => {
      console.log("Unmount... " + count);
    };
  }, [count]);

  const handleIncrement = () => {
    // setCount((prev) => (prev += 1));
    setCount(count + 1);
  };

  console.log("render App");

  return (
    <>
      <h2>App Component</h2>
      <h3>Count {count}</h3>
      <button onClick={() => handleIncrement()}>Increment</button>
      { isActive ? <Test1 /> : <Test2 />}
      <button onClick={() => setActive(!isActive)}>Change</button>
    </>
  );
}

export default App;
