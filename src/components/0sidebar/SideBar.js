import React from "react";
import AllUsers from "./AllUsers.js";
import Friends from "./Friends.js";
import TopLikedMessages from "./TopLikedMessages.js";
import RedditAPI from "./RedditAPI.js";
import DogPics from "./DogPics.js";
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
          <AllUsers />
          <Friends />
          <TopLikedMessages />
          <RedditAPI />
          <DogPics />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SideBar;
