import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute, AuthRoute } from "./utils/routeUtils";
//import { loadToken, TOKEN_KEY } from "./actions/sessionActions";
//import Login from "./components/login-form";
// import Logout from "./components/logout";
import PuppyFeed from "./components/puppyFeed";
import LandingPage from "./components/landing-page";
import PhotoPage from "./components/photo-page";
import CommentBox from "./components/comments-component";
import ProfilePage from "./components/profile-page";
import Timeline from "./components/timeline-component";
import Navbar from "./components/navbar";
import SessionForm from "./components/login-form";

const App = () => {
  // const { loadToken } = props;

  // useEffect(() => {
  //   loadToken();
  // }, [loadToken]);

  // let localStorageToken = window.localStorage.getItem(TOKEN_KEY);
  // let access_token = localStorageToken ? localStorageToken : props.access_token;

  // let loggedIn = access_token ? true : false;

  // debugger
  return (
    <BrowserRouter>
      {/* {loggedIn ? <Route path="/" component={LandingPage} /> : null} */}
      <Switch>
        {/* <AuthRoute exact path="/" component={LandingPage} />
        <AuthRoute
          path="/login-form"
          component={SessionForm}
          // loggedIn={loggedIn} */}
        {/* /> */}
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/puppyfeed" component={PuppyFeed} />
        <Route path="/photo-page" component={PhotoPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/container" component={Timeline} />
        <Route exact path="/" component={LandingPage} />
        {/* <PrivateRoute
          path="/puppyfeed"
          component={PuppyFeed}
          // loggedIn={loggedIn}
        />
        <PrivateRoute
          path="/photo-page"
          component={PhotoPage}
          // loggedIn={loggedIn}
        />
        <PrivateRoute
          path="/container"
          component={CommentBox}
          loggedIn={loggedIn}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

// const msp = (state) => {
//   return {
//     access_token: state.session.access_token,
//   };
// };

// const mdp = (dispatch) => {
//   return {
//     loadToken: () => dispatch(loadToken()),
//   };
// };

// export default connect(msp, mdp)(App);
export default App;
