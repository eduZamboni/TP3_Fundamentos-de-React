import React, { useState } from "react";
import DisplayCount from "./DisplayCount";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <DisplayCount count={count} />
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  )
}
