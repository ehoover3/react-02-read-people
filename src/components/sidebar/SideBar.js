import React from "react";
import AllUsersNames from "./AllUsersNames.js";
import TopLikedMessages from "./TopLikedMessages.js";
import RedditAPI from "./RedditAPI.js";
import Ibe from "./Ibe.js";

function SideBar(props) {
  return (
    <>
      <AllUsersNames />
      <TopLikedMessages />
      <RedditAPI>{/* <Feeds /> */}</RedditAPI>
      <Ibe />
    </>
  );
}

export default SideBar;
