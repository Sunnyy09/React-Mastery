import React from "react";
import Button from "./Button";

function ToolBar() {
  const onPlayMovie = () => {
    alert("Movie is Playing.");
  };

  const onUploadImage = () => {
    alert("Image uploading.");
  };

  return (
    <div className="flex flex-col space-y-2 mt-2">
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

export default ToolBar;
