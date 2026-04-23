import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import AddCart from "./components/Pages/AddCart";
import App from "./App.jsx";
// import Category from "./components/Category";
import AppProvider from "./global/AppProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
