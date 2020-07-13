import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../store/reducers/auth";

const Logout = (props) =>
  props.loggedOut ? (
    <Redirect to="/" />
  ) : (
    <a href="/login">
      <button className="logout-button" id="logout" onClick={props.logout}>
        Logout
      </button>
    </a>
  );

const mapStateToProps = (state) => {
  return {
    loggedOut: !state.session.access_token,
  };
};

const mapDispatchToProps = (state) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
