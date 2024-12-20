import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Images from "./components/Images";

function App() {
  return (
    <>
      <h1 className="mt-10 text-3xl underline font-bold">
        Example: Scrolling to an element
      </h1>
      <Images />
    </>
  );
}

export default App;
