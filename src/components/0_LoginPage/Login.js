import React, { useState } from "react";
import { STORE_LOGIN, useStore, STORE_CREATE_USER } from "../../store/store";
import { fetch_login, fetch_createUser } from "../../fetchRequests";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    signUpUserName: "",
    signUpPassword: "",
    signUpDisplayName: "",
  });

  const handleLogin = (e) => {
    e.preventDefault(); // keeps local state active
    fetch_login(formData.username, formData.password).then((userData) =>
      dispatch({ type: STORE_LOGIN, payload: userData })
    );
  };

  const handleChangeLogIn = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  const handleChangeSignIn = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch_createUser(
      formData.signUpUserName,
      formData.signUpPassword,
      formData.signUpDisplayName
    ).then((userData) => {
      dispatch({ type: STORE_CREATE_USER, payload: userData });
      if (userData.statusCode === 200) {
        fetch_login(
          formData.signUpUserName,
          formData.signUpPassword
        ).then((userData) =>
          dispatch({ type: STORE_LOGIN, payload: userData })
        );
      }
    });
  };

  return (
    <>
      {/* SIGN UP FORM */}
      <form className="Login" onSubmit={handleSignIn}>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="signUpUserName"
          value={formData.signUpUserName}
          autoFocus
          required
          onChange={handleChangeSignIn}
          placeholder="username"
        />
        <label htmlFor="signUpPassword"></label>
        <input
          type="password"
          name="signUpPassword"
          value={formData.signUpPassword}
          required
          onChange={handleChangeSignIn}
          placeholder="password"
        />
        <label htmlFor="signUpDisplayName"></label>
        <input
          type="text"
          name="signUpDisplayName"
          value={formData.signUpDisplayName}
          required
          onChange={handleChangeSignIn}
          placeholder="display name"
        />
        <button type="submit">Sign Up</button>
      </form>

      {/* LOG IN FORM */}
      <form className="Login" onSubmit={handleLogin}>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChangeLogIn}
          placeholder="username"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChangeLogIn}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
