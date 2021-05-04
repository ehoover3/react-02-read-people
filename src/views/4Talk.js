import React from "react";
import NewMessage from "../components/4talk/2newMessage";
import ListMessages from "../components/4talk/1talk";
import { useStore } from "../store/store";

function Talk() {
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  return <>{booleanHideCreateMessage ? <ListMessages /> : <NewMessage />}</>;
}
export default Talk;
