import React, { useState } from "react";
import FancyText from "./FancyText";
import quotes from "../quotes";

function QuoteGenerator() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  console.log(quote);

  const nextQuote = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <div>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={nextQuote}>Inspire me</button>
    </div>
  );
}

export default QuoteGenerator;
