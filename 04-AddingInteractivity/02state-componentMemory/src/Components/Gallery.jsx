import React, { useState } from "react";
import { sculptureList } from "../Data/data";

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  };

  let sculpture = sculptureList[index];

  return (
    <div className="text-white w-full my-2 py-4 px-2 flex flex-col items-center space-y-3">
      <button
        className="bg-blue-400 text-xl px-3 py-1 rounded"
        onClick={handleClick}
      >
        Next
      </button>
      <h3 className="text-xl">
        ({index + 1} of {sculptureList.length})
      </h3>
      <h2 className="text-2xl text-center">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>

      <img className="w-52 rounded" src={sculpture.url} alt={sculpture.alt} />
      <p className="text-center text-base pt-2">{sculpture.description}</p>
    </div>
  );
}

export default Gallery;
