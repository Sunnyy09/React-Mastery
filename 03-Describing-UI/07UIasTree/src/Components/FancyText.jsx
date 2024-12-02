import React from "react";

function FancyText({ title, text }) {
  return (
    <div className="flex justify-center pt-3">
      {title ? (
        <h1 className="text-[#bb86fc] text-3xl font-serif underline">{text}</h1>
      ) : (
        <h3 className="py-5 h-24 text-xl text-[#fff] font-bold italic">
          {text}
        </h3>
      )}
    </div>
  );
}

export default FancyText;
