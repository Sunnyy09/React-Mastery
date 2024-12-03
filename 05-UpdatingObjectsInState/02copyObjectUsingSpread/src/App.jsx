import "./App.css";
import Form from "./Component/Form";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-8 text-purple-400 font-bold underline text-center">
        Copying objects with the spread syntax
      </h1>
      <div className="bg-[#121212] px-5 py-8 w-[400px] h-[350px] rounded-lg shadow-md">
        <Form />
      </div>
    </>
  );
}

export default App;
