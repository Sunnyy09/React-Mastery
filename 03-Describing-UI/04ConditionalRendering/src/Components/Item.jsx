import React from "react";

function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li style={{ color: "green" }}> {name} </li>;
  // }
  // return <li style={{ color: "red" }}>{name}</li>;

  return <li>{isPacked ? <del>{name}</del> : name}</li>;
}

export default Item;
