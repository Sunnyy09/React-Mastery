import React from "react";
import getImageUrl from "../utils";

function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <div>
      <Avatar
        size={200}
        person={{
          name: "xyz",
          imageId:
            "35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600/",
        }}
      />
      <Avatar
        size={200}
        person={{
          name: "abc",
          imageId:
            "556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />

      <Avatar
        size={200}
        person={{
          name: "abc",
          imageId:
            "753994/pexels-photo-753994.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
      <Avatar
        size={200}
        person={{
          name: "ab",
          imageId:
            "267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
    </div>
  );
}

export default Profile;
