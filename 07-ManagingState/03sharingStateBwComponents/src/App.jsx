import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <h1 className="text-3xl text-blue-600 font-bold underline">
        Lifting state up by example!
      </h1>
      <div className="py-5 min-h-[400px] mt-10 flex flex-col items-center border-2 border-blue-400 rounded-lg w-[500px]">
        <h2 className="font-bold text-2xl text-blue-400">Almaty, Kazakhstan</h2>
        <Panel title="About">
          {" "}
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel title="Etymology">
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </div>
    </>
  );
}

export default App;
