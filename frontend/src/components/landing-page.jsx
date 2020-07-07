import Navbar from "./navbar";
import React from "react";
import "./landing-page.css";
import landing_puppy from "../static/landing_puppy.jpg";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="landing-image"
          src={landing_puppy}
          alt="Landing Image"
        />
        {/* <ul>
          {array.map((prop) => {
            return (
              <li key={prop}>
                <li>{prop}</li>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
export default LandingPage;
