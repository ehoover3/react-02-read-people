import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./views.css";
import "./components.css";
import "./navigation.css";
import "./quiz.css";
import "./Dunya.css";
import "./Ibe.css";
import "./Eric.css";
import "./Ryan.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/kwitter-ehoover3">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
