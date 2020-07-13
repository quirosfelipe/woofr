import React from "react";
import "./username-box.css";
import { usersObj } from "./comments-component";

const UserNameBox = (props) => {
  console.log("this is userbox props", props);
  console.log("this is object props", usersObj);
  return (
    <div className="username-container">
      <div className="picture-box">
        <img
          alt="user"
          src={usersObj[props.userInfo.photo.userId].imgUrl}
        ></img>
      </div>
      <div className="info-box">
        <div>{usersObj[props.userInfo.photo.userId].username}</div>
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
