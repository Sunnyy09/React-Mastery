import "./App.css";
import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault;
    if (msg) {
      setIsSent(true);
    }
  };

  if (isSent) {
    return (
      <h1 className="text-3xl font-semibold mt-8">
        Your message is on its way!
      </h1>
    );
  }

  return (
    <>
      <div className="mt-8 flex flex-col items-center space-y-8 border rounded-lg p-5">
        <h1 className="text-3xl font-bold underline">
          Setting state triggers renders!
        </h1>
        <input
          className="border text-xl py-2 w-4/5 border-black rounded"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          type="submit"
          className="text-xl text-white border-2 border-black px-3 py-1 bg-blue-500 rounded"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default App;
