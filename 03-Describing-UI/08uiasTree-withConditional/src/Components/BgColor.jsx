import React from "react";

function BgColor({ bgColor }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="h-24 w-28 mt-5 px-2 flex items-center rounded"
    >
      <p className="text-center text-white">I'm Color Component</p>
    </div>
  );
}

export default BgColor;
