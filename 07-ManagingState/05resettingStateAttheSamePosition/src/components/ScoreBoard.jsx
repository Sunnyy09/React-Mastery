import React, { useState } from "react";

function ScoreBoard({ name }) {
  const [score, setScore] = useState(0);
  return (
    <div className="w-full h-full py-10 flex flex-col items-center bg-purple-300 rounded-lg">
      <h1 className="text-2xl">
        {name} : {score}
      </h1>
      <button
        className="font-semibold mt-5 text-white bg-purple-400 px-2 py-2 rounded hover:ring-2 hover:ring-purple-500"
        onClick={() => setScore(score + 1)}
      >
        Add one
      </button>
    </div>
  );
}

export default ScoreBoard;
