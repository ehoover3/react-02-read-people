import React from "react";
import { useStore } from "../../store/store";
import CreateUser from "./CreateUser";

function NewUser(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <CreateUser />
    </>
  );
}

export default NewUser;
