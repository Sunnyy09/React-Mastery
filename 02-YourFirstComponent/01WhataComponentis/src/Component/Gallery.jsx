import React from "react";
import Profile from "./Profile";

function Gallery() {
  return (
    <div>
      <h1>Amazing Pictures</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

export default Gallery;

//What the browser sees
// - <section> is lowercase, so React knows we refer to an HTML tag.
// - <Profile /> starts with a capital P, so React knows that we want to use our component called Profile.
{
  /* <section>
  <h1>Amazing scientists</h1>
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
</section> */
}
