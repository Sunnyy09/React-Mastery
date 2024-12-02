import React, { useState } from "react";
import BgColor from "./BgColor";
import Text from "./Text";

function MainComponent() {
  const [showTextComponent, setshowTextComponent] = useState(true);
  const [bgColor, setbgColor] = useState(randomColor());

  const toggleComponent = () => {
    setshowTextComponent((prev) => !prev);
    if (!showTextComponent) {
      setbgColor(randomColor());
    }
  };

  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      {showTextComponent ? <Text /> : <BgColor bgColor={bgColor} />}
      <button
        className="mt-8 px-2 py-1 text-white text-2xl bg-orange-700 rounded"
        onClick={toggleComponent}
      >
        Toggle
      </button>
    </>
  );
}

export default MainComponent;
