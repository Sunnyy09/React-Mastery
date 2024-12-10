import React from "react";
import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleInputChange = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="w-96 min-h-80 p-4 flex flex-col items-center mt-8 border-2 bg-gray-300 border-gray-500 rounded-lg ">
      <h2 className="text-xl">What's your travel snack?</h2>
      <ul className="mt-7" style={{ listStyle: "outside" }}>
        {items.map((item) => (
          <li className="text-lg mt-2" key={item.id}>
            <input
              className="px-2 rounded bg-gray-200 outline-none"
              value={item.title}
              type="text"
              onChange={(e) => handleInputChange(item.id, e)}
            />
            {/* {item.title} */}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
              className="bg-gray-400 text-base ml-2 border border-black rounded px-1 hover:bg-gray-200"
            >
              choose
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-10">You picked {selectedItem.title}</p>
    </div>
  );
}

export default Menu;
