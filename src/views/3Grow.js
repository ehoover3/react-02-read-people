import React from "react";
import { ArrowUpCircle, Bricks } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/0sidebar/SideBar.js";
import Menu from "../components/3Grow/Menu.js";

function Grow(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <Menu />
      </div>
      <div className="App_ColumnRight">{/* <SideBar /> */}</div>
    </div>
  );
}
export default Grow;
