import React, { useRef } from "react";

const cats = [
  {
    id: 0,
    src: "https://placecats.com/neo/300/200",
    name: "Neo",
  },
  {
    id: 1,
    src: "https://placecats.com/millie/200/200",
    name: "Mille",
  },
  {
    id: 2,
    src: "https://placecats.com/bella/199/200",
    name: "Bella",
  },
];

function Images() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="w-[500px] m-auto flex items-center flex-col px-6 py-8 h-[370px] rounded-lg bg-gray-200 shadow-md">
      {/* Navigation Buttons */}
      <div className="space-x-4 mb-6">
        <button
          className="text-xl px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => handleScroll(firstRef)}
        >
          1
        </button>
        <button
          className="text-xl px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => handleScroll(secondRef)}
        >
          2
        </button>
        <button
          className="text-xl px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => handleScroll(thirdRef)}
        >
          3
        </button>
      </div>

      {/* Image Container */}
      <div className="py-4 w-full overflow-hidden">
        <ul className="flex w-full space-x-5">
          <li className="text-center flex-shrink-0 w-full" ref={firstRef}>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={cats[0].src}
              alt={cats[0].name}
            />
            <p className="text-lg font-semibold mt-3">{cats[0].name}</p>
          </li>
          <li className="text-center flex-shrink-0 w-full" ref={secondRef}>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={cats[1].src}
              alt={cats[1].name}
            />
            <p className="text-lg font-semibold mt-3">{cats[1].name}</p>
          </li>
          <li className="text-center flex-shrink-0 w-full" ref={thirdRef}>
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={cats[2].src}
              alt={cats[2].name}
            />
            <p className="text-lg font-semibold mt-3">{cats[2].name}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Images;
