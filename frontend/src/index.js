import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-1vr5tk0h.us.auth0.com"
    clientId="FniT0eAvc3n2Gsp2lqbnCvWld2VgKR73"
    redirectUri="http://localhost:3000/puppyfeed"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
