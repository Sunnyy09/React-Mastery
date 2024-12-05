import React, { useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

function List() {
  const [text, setText] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleBtn = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setArtists([
        ...artists.slice(0, 1),
        { id: Date.now(), name: text },
        ...artists.slice(1),
      ]);
      setText("");
    }
  };

  return (
    <div className="w-full p-2 px-10 flex items-center flex-col">
      <form className="">
        <input
          className="rounded px-2 py-1"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleBtn} className="ml-2 bg-white px-2 py-1 rounded">
          Insert
        </button>
      </form>
      <h2 className="text-xl mt-8">Inspiring sculptors:</h2>
      <ul className="mt-5 w-full min-h-28 text-md p-4 bg-teal-300 rounded">
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
