import React from "react";

function Profile() {
  return (
    <div>
      <h2>Child</h2>
      <img
        src="https://images.pexels.com/photos/36755/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600"
        alt="kid-image"
        style={{ height: "40vh" }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Amazing Profiles</h1>
      <Profile />
      <Profile />
    </div>
  );
}
