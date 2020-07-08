import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./login-form.css";

const Login = (props) => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const updateEmail = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value,
    });
  };

  const updatePassword = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="landing-page-navbar positioned">
        <div className="landing-page-navbar__header">
          <Link className="landing-page-navbar__header-logo" to="/">
            <h2 className="woofr">
              <strong>woofr</strong>
            </h2>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="login-container">
          <h2>Log in to woofr</h2>
          <form className="login-container__form" onSubmit={handleSubmit}>
            <input
              className="login-container__form-email"
              type="email"
              placeholder="example@email.com"
              onChange={updateEmail}
            ></input>
            <br />
            <input
              className="login-container__form-password"
              type="password"
              onChange={updatePassword}
            ></input>
            <br />
            <button className="login-container__form-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
