import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login-form";
// import Logout from "./components/logout";
import PuppyFeed from "./components/puppyFeed";
import LandingPage from "./components/landing-page";
import PhotoPage from "./components/photo-page";
import CommentBox from "./components/comments-component";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-form" component={Login} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/puppyfeed" component={PuppyFeed} />
        <Route path="/photo-page" component={PhotoPage} />
        <Route path="/container" component={CommentBox} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
