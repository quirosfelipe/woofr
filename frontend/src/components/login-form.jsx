import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../store/reducers/auth";
import { loginUser } from "../store/reducers/session";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login-form.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userCredentials));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(email, password);
  };

  const demoSign = (event) => {
    event.preventDefault();
    props.login("demo@example.com", "pass1234");
  };
  if (user?.accessToken) {
    return <Redirect to="/puppyfeed" />;
  } else {
    return (
      <div className="login-page">
        <div className="login-page-container">
          <div className="login-container">
            <h2 id="login-page-title">Log in to Woofr</h2>
            <form className="login-container__form" onSubmit={handleLogin}>
              <input
                className="login-container__form-email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={userCredentials.email}
                onChange={handleCredentials}
              ></input>
              <br />
              <input
                className="login-container__form-password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={userCredentials.password}
                onChange={handleCredentials}
              ></input>
              <br />
              <button className="login-container__form-submit" type="submit">
                Submit
              </button>
              <div className="login-or">OR</div>
              <button
                className="login-container__form-submit"
                type="submit"
                onClick={demoSign}
              >
                Login as Elvis
              </button>
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
    login: (email, password) => dispatch(login(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
