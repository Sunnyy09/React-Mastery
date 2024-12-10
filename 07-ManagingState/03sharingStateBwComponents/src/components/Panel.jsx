import React from "react";
import { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="min-h-28 text-center">
      <h3 className="mt-4 text-lg text-blue-800 font-semibold">{title}</h3>
      <button
        className="bg-blue-200 px-2 mt-1 rounded hover:ring-2 hover:bg-blue-300"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {isActive ? "hide" : "show"}
      </button>
      {isActive ? <p className="mt-3 py-2 px-4">{children}</p> : null}
    </section>
  );
}

export default Panel;
