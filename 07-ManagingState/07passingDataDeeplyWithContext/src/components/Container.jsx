import React from "react";
import { useContext } from "react";
import { levelContext } from "../context/levelContext";

function Container({ children, isFancy }) {
  const level = useContext(levelContext);
  return (
    <section
      className={`mt-8 border-2 border-gray-400 px-10 py-5 rounded-lg ${
        isFancy ? "border-purple-500 border-dashed" : null
      }`}
    >
      <levelContext.Provider value={level + 1}>
        {children}
      </levelContext.Provider>
    </section>
  );
}

export default Container;
