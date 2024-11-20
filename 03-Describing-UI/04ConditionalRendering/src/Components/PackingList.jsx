import React from "react";
import Item from "./Item";

function PackingList() {
  return (
    <div>
      <h1>Packing List </h1>
      <ul>
        <Item isPacked={true} name="Space Suit" />
        <Item isPacked={true} name="Helmet with golden leaf" />
        <Item isPacked={false} name="Photo of tam" />
        <Item isPacked={false} name="Lorem ipsum dolor sit." />
      </ul>
    </div>
  );
}

export default PackingList;
