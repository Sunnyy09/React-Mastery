import React from "react";
import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

function List() {
  const [artists, setArtists] = useState(initialArtists);

  const handleDeletion = (id) => {
    setArtists(artists.filter((a) => a.id != id));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-5">Inspiring sculptors:</h2>
      <ul className="list-decimal space-y-2">
        {artists.map((artist) => (
          <li className="text-xl" key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => handleDeletion(artist.id)}
              className="ml-2 px-2 bg-blue-200 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
