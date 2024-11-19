import "./App.css";

function App() {
  const user = {
    name: "Emma",
    imageUrl:
      "https://images.pexels.com/photos/15362609/pexels-photo-15362609/free-photo-of-woman-crossing-a-street-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageSize: 280,
    age: 25,
  };
  return (
    <>
      <h3>
        JSX lets you put markup into JavaScript. Curly braces let you “escape
        back” into JavaScript so that you can embed some variable from your code
        and display it to the user. For example, this will display user.name:
      </h3>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "20px",
        }}
      />
      <h2>Age: {user.age}</h2>
    </>
  );
}

export default App;
