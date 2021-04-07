import React from "react";
import { useStore } from "../store/store";
import CreateProfile from "../components/6_NewProfile/CreateProfile";

function NewProfile(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <CreateProfile />
    </>
  );
}

export default NewProfile;