import React from "react";
import "./timeline-component.css";

const Timeline = (props) => {
  // console.log("this is the props", props);
  return (
    <div className="timeline-container">
      <div className="picture">
        <img
          alt="timeline"
          src="https://www.goldderby.com/wp-content/uploads/2017/08/Elvis-Presley-Movies-Ranked.jpg?w=620&h=360&crop=1"
        ></img>
      </div>
      <div className="info">
        <div>
          <h3>{props.data}</h3>
        </div>
        <div>
          <a href="folllow">Follow</a>
        </div>
        <div>
          <a href="folllow">tags</a>
        </div>
      </div>
      {/* <div className="follow">
                <button>FOLLOW</button>
            </div> */}
      {/* <div className="blank"></div> */}
      {/* <div className="widgets">
                <div>
                    <button>Like</button>
                </div>
                <div>
                    <button>Github</button>
                </div>
            </div> */}
    </div>
  );
};
export default Timeline;
