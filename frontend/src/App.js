import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login-form";
// import Logout from "./components/logout";
import PuppyFeed from "./components/puppyFeed";
import LandingPage from "./components/landing-page";
import PhotoPage from "./components/photo-page";
import CommentBox from "./components/comments-component";
import ProfilePage from "./components/profile-page";
import Timeline from "./components/timeline-component";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-form" component={Login} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/puppyfeed" component={PuppyFeed} />
        <Route path="/photo-page" component={PhotoPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/container" component={Timeline} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
