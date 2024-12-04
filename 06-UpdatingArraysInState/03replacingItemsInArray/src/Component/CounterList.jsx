import React from "react";
import { useState } from "react";

let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounter] = useState(initialCounters);

  const handleCounter = (index) => {
    const nextCounter = counters.map((count, i) => {
      if (i === index) {
        return count + 1;
      } else {
        return count;
      }
    });
    setCounter(nextCounter);
  };

  return (
    <ul className="innerDiv">
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => handleCounter(i)}>+1</button>
        </li>
      ))}
    </ul>
  );
}

export default CounterList;
