import React from "react";
import './timeline-component.css'


const Timeline = () => {

  return (
    <div className="timeline-container">
        <div className="picture">
            <img src="http://farm66.staticflickr.com/65535/50084651468_07fa3ef705.jpg"></img>
        </div>
        <div className="info">
            <div>
                <h3>username</h3>
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
