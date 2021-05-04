import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./components/0navbar/0navbar.css";
import "./components/0rightColumn/0rightColumn.css";
import "./components/1login/0login.css";
import "./components/2home/0home.css";
import "./components/3grow/0grow.css";
import "./components/4talk/0talk.css";
import "./components/5play/0play.css";
import "./components/6user/0user.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/LifeSkills">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
