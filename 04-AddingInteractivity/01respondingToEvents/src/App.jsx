import "./App.css";
import ToolBar from "./Components/ToolBar";

function App() {
  return (
    <>
      <div className="w-72 bg-purple-600 p-5 rounded flex flex-wrap justify-center">
        <h1 className="text-3xl font-bold underline text-center text-white">
          Responding to Events!
        </h1>
        <ToolBar />
      </div>
    </>
  );
}

export default App;
