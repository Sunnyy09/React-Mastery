import React from "react";

function ItemList({ artworks, onToggle }) {
  return (
    <ul className="text-lg mt-1">
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              checked={artwork.isChecked}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
