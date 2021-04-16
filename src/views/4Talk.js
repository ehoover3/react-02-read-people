import React from "react";
import NewMessage from "../components/4Talk/NewMessage";
import ListMessages from "../components/4Talk/ListMessages";
import { useStore } from "../store/store";

function Talk(props) {
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        {booleanHideCreateMessage ? <ListMessages /> : <NewMessage />}
      </div>
      <div className="App_ColumnRight">{/* <SideBar /> */}</div>
    </div>
  );
}
export default Talk;
