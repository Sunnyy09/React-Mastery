import React from "react";
import { useState } from "react";

function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const handleButton = () => {
    setArtists([...artists, { id: Date.now(), name: name }]);
    // setArtists(artists.concat({ id: Date.now(), name }));

    setName("");
  };

  return (
    <div>
      <h2>Inspiring sculptors:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleButton}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
