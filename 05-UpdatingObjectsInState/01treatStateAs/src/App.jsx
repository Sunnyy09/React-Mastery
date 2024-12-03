import { useState } from "react";
// import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        backgroundColor: "white",
        width: 500,
        height: 400,
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0px 0px 20px black",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          left: -20,
          top: -20,
          backgroundColor: "red",
          position: "relative",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
}

export default App;
