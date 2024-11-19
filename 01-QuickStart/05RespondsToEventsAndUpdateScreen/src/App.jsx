import "./App.css";
import MyButton from "./Components/RespondingToEvents/MyButton";
import UpdateButton from "./Components/UpdateTheScreen/UpdateButton";

function App() {
  return (
    <div className="container">
      <h1>Counters that update separately</h1>
      <MyButton />
      <UpdateButton />
      <UpdateButton />
    </div>
  );
}

export default App;
