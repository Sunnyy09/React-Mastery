import "./App.css";
import List from "./Component/List";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-8 font-bold underline">
        Inserting into an array
      </h1>
      <div className="w-[400px] py-4 min-h-80 bg-gray-200 rounded-lg">
        <List />
      </div>
    </>
  );
}

export default App;
