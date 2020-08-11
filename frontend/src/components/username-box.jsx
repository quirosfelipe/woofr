import React from "react";
import "./username-box.css";
import { usersObj } from "./comments-component";

const UserNameBox = (props) => {
  return (
    <div className="username-container">
      <div className="picture-box">
        <img alt="user" src={usersObj[props.userInfo.userId].imgUrl}></img>
      </div>
      <div className="info-box">
        <div>{usersObj[props.userInfo.userId].username}</div>
      </div>
      <div className="follow">{props.userInfo.description}</div>
      {/* <div className="blank"></div>
      <div className="widgets">
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
export default UserNameBox;
//"picture" "info" "follow" "blank" "widgets";
