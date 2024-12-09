import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-gray-600 mb-4 font-bold underline">
          Thinking about UI declaratively !
        </h1>
        <h2 className="text-2xl text-gray-600 mb-2 font-semibold ">
          City quiz
        </h2>
        <p className="mb-4 text-xl">
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
      </div>
      <Form />
    </>
  );
}

export default App;
