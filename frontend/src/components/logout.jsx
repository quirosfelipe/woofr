import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../store/reducers/auth";

// const Logout = (props) =>
//   props.loggedOut ? (
//     <Redirect to="/" />
//   ) : (
//     <a href="/login">
//       <button
//         className="logout-button"
//         id="logout"
//         onClick={props.handleLogout}
//       >
//         Logout
//       </button>
//     </a>
//   );

const Logout = (props) => {
  const handleLogout = () => {
    props.logout();
  };

  return (
    <a href="/login">
      <button className="logout-button" id="logout" onClick={handleLogout}>
        Logout
      </button>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedOut: !state.session.access_token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
