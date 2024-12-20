import React, { useEffect, useRef } from "react";

function VideoPlayer({ src, isPlay }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlay]);

  return (
    <div>
      <video src={src} ref={videoRef} loop playsInline />
    </div>
  );
}

export default VideoPlayer;
