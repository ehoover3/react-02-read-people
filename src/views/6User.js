import React from "react";
import { useStore } from "../store/store";
import Photo from "../components/6User/Photo";
import About from "../components/6User/About";

function User(props) {
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
export default User;
