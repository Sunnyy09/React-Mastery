import "./App.css";
import FancyText from "./Components/FancyText";
import QuoteGenerator from "./Components/QuoteGenerator";

function App() {
  return (
    <div className="bg-[#333333] w-[600px] h-[400px] rounded-lg shadow-md shadow-black">
      <FancyText title text="Get Inspired App" />
      <QuoteGenerator />
    </div>
  );
}

export default App;
