import React from "react";
import AllUsersNames from "./AllUsersNames.js";
import TopLikedMessages from "./TopLikedMessages.js";

function SideBar(props) {
  return (
    <>
      <AllUsersNames />
      <TopLikedMessages />
    </>
  );
}

export default SideBar;
