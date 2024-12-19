import React, { useState, useRef } from "react";

function StopWatch() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    // // Update the current time every 10ms.
    // setInterval(() => {
    //   setNow(Date.now());
    // }, 10);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (start != null && now != null) {
    secondsPassed = (now - start) / 1000;
    //This converts the time difference from milliseconds to seconds.
  }

  return (
    <div>
      <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default StopWatch;
