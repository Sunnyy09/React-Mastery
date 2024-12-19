import React, { useRef } from "react";

function Form() {
  const inputRef = useRef(null);

  const handleFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </form>
  );
}

export default Form;
