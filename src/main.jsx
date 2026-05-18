import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Routes.jsx";
import { ContextProvider } from "./context/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </StrictMode>,
);
