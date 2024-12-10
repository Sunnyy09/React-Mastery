import React, { useState } from "react";

function FeedBackForm() {
  const [input, setInput] = useState("");
  // const [submitting, setSubmitting] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  //Since isSending and isSent should never be true at the same time, it is
  //better to replace them with one status state variable that may take one of
  //three valid states: 'typing' (initial), 'sending', and 'sent':

  const [status, setStatus] = useState("pending");

  function submitForm(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve();
        } else {
          reject(new Error("There is something wrong"));
        }
      }, 2000);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm(input);
      setStatus("sent");
    } catch (error) {
      setStatus("pending");
      throw error;
    }
  };

  if (status === "sent") {
    return <h1 className="text-xl mt-8">Thanks for your response!</h1>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
      <h2 className="mb-4 text-xl">How was your stay at The Prancing Pony?</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your answer"
        className="border-2 rounded outline-none border-gray-400"
        cols="30"
        rows="5"
        disabled={status === "sending"}
      />
      <button
        disabled={input.length === 0 || status === "sending"}
        type="submit"
        className="mt-3 border-2 hover:border-blue-800 bg-blue-400 rounded-md px-2 py-1"
      >
        Submit
      </button>
      {status === "sending" ? <p className="mt-5 text-xl">Sending...</p> : null}
    </form>
  );
}

export default FeedBackForm;
