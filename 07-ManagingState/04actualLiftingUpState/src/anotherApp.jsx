import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  const [activePanel, setActivePanel] = useState(null); // Track the active panel

  const handleShow = (title) => {
    setActivePanel((prev) => (prev === title ? null : title)); // Toggle the active panel
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-[#27296d] underline">
        How to lift up state to Parent Component!
      </h1>
      <div className="w-[600px] bg-[#f5c7f7] mt-8 py-4 text-center border-2 border-[#a393eb] rounded-lg ">
        <h2 className="font-bold text-2xl text-[#27296d]">
          Almaty, Kazakhstan
        </h2>
        <Panel
          title="About"
          isActive={activePanel === "About"} // Check if this panel is active
          onShow={() => handleShow("About")} // Pass the panel's title
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="Etymology"
          isActive={activePanel === "Etymology"} // Check if this panel is active
          onShow={() => handleShow("Etymology")} // Pass the panel's title
        >
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
