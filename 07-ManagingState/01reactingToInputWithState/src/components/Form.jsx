import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(text);
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("typing");
    }
  };

  function submitForm(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === "lima") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 1500);
    });
  }

  const handleRestart = (e) => {
    e.preventDefault();
    setStatus("typing");
    setText("");
  };

  if (status === "success") {
    return (
      <>
        <h1>That's right!</h1>
        <button onClick={handleRestart}>restart</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        disabled={status === "submitting"}
        className="border-2 border-gray-400 p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="5"
      />
      <br />
      <button
        type="submit"
        disabled={text.length === 0 || status === "submitting"}
        className="border-2 bg-blue-400 font-semibold border-gray-500 rounded mt-4 px-2"
      >
        Submit
      </button>
      {error !== null && <p>{error.message}</p>}
    </form>
  );
}

export default Form;
