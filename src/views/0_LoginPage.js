import React from "react";
import { useStore } from "../store/store";
import Login from "../components/0_LoginPage/Login";

function LoginPage(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Login />
    </>
  );
}

export default LoginPage;
