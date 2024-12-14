import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [isPlayer, setIsPlayer] = useState(true);
  return (
    <>
      <h1 className="text-3xl text-purple-600 font-bold underline">
        Resetting state at the same position!
      </h1>
      <div className="mt-8 w-[400px] flex flex-col items-center min-h-[350px] p-5 border-2 border-purple-300 rounded-lg">
        {isPlayer ? (
          <ScoreBoard key="John Dev" name="John Dev" />
        ) : (
          <ScoreBoard key="Maxi Robert" name="Maxi Robert" />
        )}
        {/* Resetting state with a key 
                        or
        Rendering a component in different positions */}

        <button
          className="mt-10 px-1 py-1 text-black font-semibold rounded bg-purple-300 hover:bg-purple-400 border-2 border-[#5f1854]"
          onClick={() => setIsPlayer((prev) => !prev)}
        >
          Next Player
        </button>
      </div>
    </>
  );
}

export default App;
