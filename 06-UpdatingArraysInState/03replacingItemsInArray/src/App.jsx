import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterList from "./Component/CounterList";

function App() {
  return (
    <>
      <h2>Replacing items in an array </h2>
      <div className="container">
        <CounterList />
      </div>
    </>
  );
}

export default App;
