import React, { useState } from "react";
import AllUsersNames from "./AllUsersNames.js";
import TopLikedMessages from "./TopLikedMessages.js";
import RedditAPI from "./RedditAPI.js";
import Ibe from "./Ibe.js";
import { useStore } from "../../store/store";

function SideBar() {
  const hambugerClickAtLeastOnce = useStore(
    (state) => state.hambugerClickAtLeastOnce
  );
  const openSidebar = useStore((state) => state.openSidebar);

  return (
    <>
      {hambugerClickAtLeastOnce ? (
        <div className={openSidebar ? "sidebar open" : "sidebar1 close"}>
          <AllUsersNames />
          <TopLikedMessages />
          <RedditAPI />
          <Ibe />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SideBar;
