import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BuilderContext from "../Store/Builder.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BuilderContext>
      <App />
    </BuilderContext>
  </StrictMode>,
);
