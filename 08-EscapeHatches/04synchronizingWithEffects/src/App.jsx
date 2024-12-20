import { useState } from "react";

import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <>
      <h1>Synchronizing with Effects</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsPlay(!isPlay);
        }}
      >
        {isPlay ? "pause" : "play"}
      </button>
      <VideoPlayer
        isPlay={isPlay}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

export default App;
