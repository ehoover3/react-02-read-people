import React from "react";
import SideBar from "../components/sidebar/SideBar.js";
import CreateMessage from "../components/3_Chat/CreateMessage";
import MessageList from "../components/3_Chat/MessageList";

function Chat(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <div>
          <CreateMessage />
          <MessageList />
        </div>
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}
export default Chat;
