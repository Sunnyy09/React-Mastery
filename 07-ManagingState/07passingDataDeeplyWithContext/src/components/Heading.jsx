import React from "react";
import { useContext } from "react";
import { levelContext } from "../context/levelContext";

function Heading({ children }) {
  const level = useContext(levelContext);

  switch (level) {
    case 1:
      return <h1 className="text-4xl">{children}</h1>;
    case 2:
      return <h2 className="text-3xl mt-3">{children}</h2>;
    case 3:
      return <h3 className="text-2xl mt-3">{children}</h3>;
    case 4:
      return <h4 className="text-xl mt-3">{children}</h4>;
    case 5:
      return <h5 className="text-lg mt-3">{children}</h5>;
    case 6:
      return <h6 className="text-md mt-3">{children}</h6>;
  }
}

export default Heading;
