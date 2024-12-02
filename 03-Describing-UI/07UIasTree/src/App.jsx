import "./App.css";
import CopyRight from "./Components/CopyRight";
import FancyText from "./Components/FancyText";
import QuoteGenerator from "./Components/QuoteGenerator";

function App() {
  return (
    <div className="bg-[#333333] w-[600px] h-[350px] p-5 rounded-lg shadow-md shadow-black">
      <FancyText title text="Get Inspired App" />
      <QuoteGenerator>
        <CopyRight year={2025} />
      </QuoteGenerator>
    </div>
  );
}

export default App;
