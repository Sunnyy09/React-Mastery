import "./App.css";
import Form from "./Components/Form";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-600">
        Updating a nested object
      </h1>
      <div className="bg-[#121212] mt-8 p-8 w-[600px] h-[500px] flex flex-col items-center  rounded-lg">
        <Form />
      </div>
    </>
  );
}

export default App;
