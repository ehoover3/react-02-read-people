import React from "react";
import SideBar from "../components/Sidebar/SideBar.js";
import { useStore } from "../store/store";

function Play(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">test</div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}
export default Play;
