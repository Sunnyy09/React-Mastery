import "./App.css";
import BucketList from "./Component/BucketList";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-10 font-bold underline">
        Updating objects inside arrays!
      </h1>
      <div className="flex justify-center bg-gray-300 w-[400px] min-h-80 rounded-lg">
        <BucketList />
      </div>
    </>
  );
}

export default App;
