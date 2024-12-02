import React from "react";

function FancyText({ title, text }) {
  return (
    <div className="flex justify-center p-5">
      {title ? (
        <h1 className="text-[#ff0266] text-3xl font-serif underline">{text}</h1>
      ) : (
        <h3 className="text-xl italic">{text}</h3>
      )}
    </div>
  );
}

export default FancyText;
