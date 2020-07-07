import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Logout from "./components/logout";
import PuppyFeed from "./components/puppyFeed";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/puppyfeed" component={PuppyFeed} />
        <Route exact path="/" component={LandingPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
