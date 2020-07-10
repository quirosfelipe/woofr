import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/sessionActions";
import { Redirect, Link } from "react-router-dom";
import "./login-form.css";

const SessionForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(email, password);
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
              onChange={handleEmailChange}
            ></input>
            <br />
            <input
              className="login-container__form-password"
              type="password"
              onChange={handlePasswordChange}
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
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};
export default connect(null, mapDispatchToProps)(SessionForm);
