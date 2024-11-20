import React from "react";

// Step 2: Define the function
// With function Profile() { } you define a JavaScript function with the name Profile.
function Profile() {
  // Step 3: Add markup
  return (
    <img
      src="https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
    />
  );
}
// The component returns an <img /> tag with src and alt attributes. <img />
//is written like HTML, but it is actually JavaScript under the hood! This
//syntax is called JSX, and it lets you embed markup inside JavaScript.

// Step 1: Export the component
export default Profile;

//you can also export the function like this
// export default function Profile(){}
