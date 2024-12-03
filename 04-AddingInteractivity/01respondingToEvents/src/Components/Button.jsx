import React from "react";

function Button({ onClick, children }) {
  return (
    <div className="flex justify-center">
      <button
        className="bg-white font-semibold p-2 rounded hover:bg-blue-500 hover:text-white"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
