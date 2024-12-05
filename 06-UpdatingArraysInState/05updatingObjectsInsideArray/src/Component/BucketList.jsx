import React, { useState } from "react";
import ItemList from "./ItemList";

const initialList = [
  { id: 0, title: "Big Bellies", isChecked: false },
  { id: 1, title: "Lunar Landscape", isChecked: false },
  { id: 2, title: "Terracotta Army", isChecked: false },
];

function BucketList() {
  const [list, setList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  // const handleToggleMyList = (artworkId, checked) => {
  //   const myNextList = [...list];
  //   const artwork = myNextList.find((a) => a.id === artworkId);
  //   artwork.isChecked = checked; // Problem: mutates an existing item
  //   setList(myNextList);
  // };

  // const handleToggleYourList = (artworkId, checked) => {
  //   const yourNextList = [...yourList];
  //   const artwork = yourNextList.find((a) => a.id === artworkId);
  //   artwork.isChecked = checked;
  //   setYourList(yourNextList);
  // };

  //updated code to avoid mutuation

  const handleToggleMyList = (artworkId, checked) => {
    setList(
      list.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, isChecked: checked };
        } else {
          return artwork;
        }
      })
    );
  };

  const handleToggleYourList = (artworkId, checked) => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, isChecked: checked };
        } else {
          return artwork;
        }
      })
    );
  };

  return (
    <div className="p-3">
      <h1 className="text-2xl">Art Bucket List</h1>
      <h2 className="text-xl mt-4">My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggleMyList} />
      <h2 className="text-xl mt-4">Your art of list to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
}

export default BucketList;
