import "./App.css";

function App() {
  const avatar =
    "https://images.pexels.com/photos/18445718/pexels-photo-18445718/free-photo-of-children-on-carousel-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi alias sit, numquam suscipit minima veniam.";
  const name = "Lorem ipsum dolor sit amet.";
  return (
    <div>
      <h1>{name}</h1>
      <img
        style={{ borderRadius: "20px", height: "40vh" }}
        src={avatar}
        alt={description}
      />
    </div>
  );
}

export default App;
