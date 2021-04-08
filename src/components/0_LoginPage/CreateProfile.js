import React, { useState } from "react";
import { STORE_LOGIN, useStore, STORE_CREATE_USER } from "../../store/store";
import { fetch_login, fetch_createUser } from "../../fetchRequests";

function CreateProfile(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    signUpUserName: "",
    signUpPassword: "",
    signUpDisplayName: "", 
  });

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
      </>
  )
};

export default CreateProfile;