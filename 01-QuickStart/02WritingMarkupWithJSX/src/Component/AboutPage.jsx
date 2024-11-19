import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
      <br />
      <img
        className="photo"
        src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
}

export default AboutPage;
