import React from "react";
import SideBar from "../components/sidebar/SideBar.js";
import { useStore } from "../store/store";
import PlayVideo from "../components/5_Play/PlayVideo";

function Play(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <PlayVideo />
      </div>
      <div className="App_ColumnRight">{/* <SideBar /> */}</div>
    </div>
  );
}
export default Play;
