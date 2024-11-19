import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ConditionalRendering from "./ConditionalRendering.jsx";
import RenderingLists from "./RenderingLists";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConditionalRendering />
    <hr />
    <RenderingLists />
  </StrictMode>
);
