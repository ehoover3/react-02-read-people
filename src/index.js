import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./components/0navbar/navbar.css";
import "./components/0rightColumn/rightColumn.css";
import "./components/1login/login.css";
import "./components/2home/home.css";
import "./components/3grow/grow.css";
import "./components/4talk/talk.css";
import "./components/5play/play.css";
import "./components/6user/user.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/LifeSkills">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
