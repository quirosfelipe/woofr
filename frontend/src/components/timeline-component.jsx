import React from "react";
import "./timeline-component.css";

const Timeline = (props) => {
  // ("this is the props", props);
  return (
    // <div>
    <div className="timeline-container">
      <div className="picture">
        <img
          alt="timeline"
          src="https://activerain-store.s3.amazonaws.com/image_store/uploads/9/4/8/7/7/ar13766509777849.jpg"
        ></img>
      </div>
      <div className="info">
        <div>
          <h3>{props.data}</h3>
        </div>
        <div>{/* <a href="folllow">Follow</a> */}</div>
        {/* <div>
          <a href="folllow">tags</a>
        </div> */}
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
