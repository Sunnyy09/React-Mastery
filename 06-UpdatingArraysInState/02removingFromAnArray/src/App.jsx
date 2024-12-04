import "./App.css";
import List from "./Components/List";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-5 font-bold underline">
        Removing from an array
      </h1>
      <div className="bg-blue-400 w-[400px] min-h-[200px] rounded-lg p-5">
        <List />
      </div>
    </>
  );
}

export default App;
