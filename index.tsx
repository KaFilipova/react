import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/container/App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
