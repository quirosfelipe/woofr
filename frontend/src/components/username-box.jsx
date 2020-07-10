import React from "react";
import './username-box.css'


const UserNameBox = () => {

  return (
    <div className="username-container">
        <div className="picture-box">
            <img src="http://farm66.staticflickr.com/65535/50084651468_07fa3ef705.jpg"></img>
        </div>
        <div className="info-box">
            <div>Username</div>
            <div>nickname</div>
            <div>Bio</div>
        </div>
        <div className="follow">
            <button>FOLLOW</button>
        </div>
        <div className="blank"></div>
        <div className="widgets">
            <div>
                <button>Like</button>
            </div>
            <div>
                <button>Github</button>
            </div>

        </div>

    </div>
  );
};
export default UserNameBox;
//"picture" "info" "follow" "blank" "widgets";
