import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./index.scss";
// import "./class-weather/index.css";

import { QuizProvider } from "./contexts/QuizContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
