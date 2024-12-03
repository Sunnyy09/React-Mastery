import "./App.css";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <div className="bg-[#121212] w-[600px] h-[90vh] rounded-lg p-4 flex flex-col items-center shadow shadow-black/100">
        <h1 className="text-3xl text-white font-bold underline text-center">
          State: a Component Memory
        </h1>
        <Gallery />
      </div>
    </>
  );
}

export default App;
