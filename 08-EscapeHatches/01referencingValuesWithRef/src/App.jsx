import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <>
      <h1>Building a stopwatch</h1>
      <StopWatch />
    </>
  );
}

export default App;
