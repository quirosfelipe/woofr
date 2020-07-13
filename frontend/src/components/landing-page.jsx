import Navbar from "./navbar";
import React from "react";
import "./landing-page.css";
// import landing_puppy from "../static/landing_puppy.jpg";

function LandingPage() {
  return (
    <div className="landing-puppy">
      <Navbar />
      <main className="main">
        <h1 className="text-header">
          <strong>Find your inspiration.</strong>
        </h1>
        <p className="text-fill">
          Join the Woofr community, home to tens of billions
        </p>
        <p className="text-fill"> of dog's photos.</p>
      </main>
      <footer className="footer">
        Created by:
        <a href="https://github.com/quirosfelipe">
          <img
            alt="felipe"
            src="https://avatars1.githubusercontent.com/u/59105242?s=400&u=d69eacf1fff233d0738b3cdc4e8d3d8d37ccede2&v=4"
            className="photo-footer"
          ></img>
        </a>
        <a href="https://github.com/gootieno">
          <img
            alt="geoffrey"
            src="https://avatars1.githubusercontent.com/u/50849936?s=460&u=d13d80da95ef7dc4a08721a1cb4bccf0da516677&v=4"
            className="photo-footer"
          ></img>
        </a>
        <a href="https://github.com/giancarlo-sanchez">
          <img
            alt="giancarlo"
            src="https://avatars2.githubusercontent.com/u/60968129?s=460&u=40626fc20a0de43bd1d1fd02c3cb2549e97c4109&v=4"
            className="photo-footer"
          ></img>
        </a>
      </footer>
    </div>
  );
}
export default LandingPage;
