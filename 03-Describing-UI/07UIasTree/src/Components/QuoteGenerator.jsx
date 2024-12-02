import React, { useState } from "react";
import FancyText from "./FancyText";
import quotes from "../quotes";

function QuoteGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  console.log(quote);

  const nextQuote = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <div className="flex items-center flex-col mt-4 text-center">
      <p className="text-xl font-light text-[#03dac6]">
        Your inspirational quote is:
      </p>
      <FancyText text={quote} />
      <button
        className="px-3 py-2 text-lg font-semibold bg-[#ff0266] hover:bg-[#ff7597] hover:ring-2 ring-[#ff0266] transition-all duration mt-2 rounded"
        onClick={nextQuote}
      >
        Inspire me
      </button>
      {children}
    </div>
  );
}

export default QuoteGenerator;
