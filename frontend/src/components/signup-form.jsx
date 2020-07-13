import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../store/reducers/auth";
import { Link, Redirect } from "react-router-dom";
import "./login-form.css";

const SignupForm = (props) => {
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signup(user_name, email, password);
  };

  if (props.access_token) {
    return <Redirect to="/puppyfeed" />;
  } else {
    console.log("This is the sign up request", props);
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-container2">
            <h2>Sign-up to woofr</h2>
            <form className="login-container__form" onSubmit={handleSubmit}>
              <input
                className="login-container__form-email"
                type="text"
                placeholder="username"
                onChange={handleUserChange}
              ></input>
              <br />
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
              <br />
              <a className="login-member" href="/login">
                Already a member?
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    access_token: state.session.access_token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user_name, email, password) =>
      dispatch(signup(user_name, email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
