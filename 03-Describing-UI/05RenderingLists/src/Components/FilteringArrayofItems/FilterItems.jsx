import React from "react";
import people from "../data.js";

function FilterItems() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <p>
        <b>{person.name}</b>
        {" " + person.profession}
      </p>
    </li>
  ));

  return (
    <div>
      <h3>
        Let’s say you want a way to only show people whose profession is
        'chemist'
      </h3>
      <ul>{listItems}</ul>
    </div>
  );
}

export default FilterItems;
