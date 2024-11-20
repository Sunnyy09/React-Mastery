import React from "react";

const peoples = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function List() {
  const itemsList = peoples.map((person) => <li>{person}</li>);

  return (
    <div>
      <ul>{itemsList}</ul>
    </div>
  );
}

export default List;
