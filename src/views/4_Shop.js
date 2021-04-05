import React from "react";
import { STORE_ADD_CROWNS, useStore } from "../store/store";
import SideBar from "../components/sidebar/SideBar.js";

function Shop(props) {
  const dispatch = useStore((state) => state.dispatch);
  const crowns = useStore((state) => state.crowns);
  const streak = useStore((state) => state.streak);
  const gems = useStore((state) => state.gems);

  dispatch({
    type: STORE_ADD_CROWNS,
    payload: crowns,
  });

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <div>SHOP</div>
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}

export default Shop;
