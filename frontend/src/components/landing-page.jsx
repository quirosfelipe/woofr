import Navbar from "./navbar";
import React from "react";

function LandingPage() {
  let array = [];
  return (
    <div>
      <Navbar />
      <div>
        <ul>
          {array.map((prop) => {
            return (
              <li key={prop}>
                <li>{prop}</li>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default LandingPage;
