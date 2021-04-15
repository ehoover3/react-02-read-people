import React from "react";
import SideBar from "../components/sidebar/SideBar.js";
import CreateMessage from "../components/3_Chat/CreateMessage";
import MessageList from "../components/3_Chat/MessageList";
import { useStore } from "../store/store";
import Photo from "../components/1_Home/Photo";
import About from "../components/1_Home/About";

function Chat(props) {
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <Photo />
        <About />
      </div>
      <div className="App_ColumnRight">{/* <SideBar /> */}</div>
    </div>
  );
}
export default Chat;
