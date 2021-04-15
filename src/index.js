import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Dunya.css";
import "./components/Navigation/Navigation.css";
import "./components/sidebar/Sidebar.css";
import "./components/0_LoginPage/LoginPage.css";
import "./components/1_Home/Home.css";
import "./components/2_Learn/Learn.css";
import "./components/3_Chat/Chat.css";
import "./components/5_Play/Play.css";
import "./components/6_User/User.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/LifeSkills">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
