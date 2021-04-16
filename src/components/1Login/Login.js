import React, { useState } from "react";
import { Link } from "react-router-dom";
import { STORE_LOGIN, useStore, STORE_CREATE_USER } from "../../store/store";
import { fetch_login, fetch_createUser } from "../../fetchRequests";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    // how to store data in the brower or cookies to persist through a refresh // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
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
      <div id="Login_MoveForm">
        <div id="Login_Life">
          <h1 className="Login">Life Skills</h1>
        </div>
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
          <button className=" Login_Button" type="submit">
            Login
          </button>
          <h6 className="Login_Name">
            Not yet a user?
            <Link className="Login_Link" to="/NewProfile">
              Click Here
            </Link>
          </h6>
        </form>
      </div>
    </>
  );
}

export default Login;
