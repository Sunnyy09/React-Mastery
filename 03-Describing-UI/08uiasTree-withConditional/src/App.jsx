import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Text from "./Components/Text";
import BgColor from "./Components/BgColor";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <div className="w-[400px] p-5 bg-black/80 min-h-[300px] rounded-lg flex flex-col items-center">
      <h1 className="text-white text-center italic">
        With conditional rendering, a parent component may render different
        children
      </h1>
      <MainComponent />
    </div>
  );
}

export default App;
