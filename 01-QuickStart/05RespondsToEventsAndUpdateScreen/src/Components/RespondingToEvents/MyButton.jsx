import React from "react";

function MyButton() {
  function handleClick() {
    alert("You Clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default MyButton;
