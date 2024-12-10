import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  const [activeChild, setActiveChild] = useState(0);

  const handleShow = (index) => {
    // e.preventDefault();
    setActiveChild(index);
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
          isActive={activeChild === 0}
          onShow={() => handleShow(0)}
        >
          {" "}
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="Etymology"
          isActive={activeChild === 1}
          onShow={() => handleShow(1)}
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
