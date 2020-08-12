import React from "react";
import { connect } from "react-redux";
import "./comments-component.css";
import { deleteComment } from "../store/reducers/auth";

export const usersObj = [
  {
    username: "Julius",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ferras_Side_Profile_Shot.png/1200px-Ferras_Side_Profile_Shot.png",
  },
  {
    username: "Elvis",
    imgUrl:
      "https://yt3.ggpht.com/-ABnvydjRhEw/AAAAAAAAAAI/AAAAAAAAAAA/MH2MtkugMpM/s900-c-k-no/photo.jpg",
  },
  {
    username: "Will",
    imgUrl: "https://allstarbio.com/wp-content/uploads/2016/11/Will-Smith.png",
  },
  {
    username: "El terminator",
    imgUrl:
      "https://answersafrica.com/wp-content/uploads/2019/08/arnold-schwarzenegger-bodybuilding.jpg",
  },
  {
    username: "Mike",
    imgUrl:
      "http://2.bp.blogspot.com/-BebDmod0rSA/UKnlUqs2RtI/AAAAAAAAHcg/gM4dnd78mxg/s1600/michael+jackson+smooth+criminal+3.jpg",
  },
  {
    username: "Bakari",
    imgUrl: "https://i.ytimg.com/vi/d5JWh1y1fBE/maxresdefault.jpg",
  },
];

const userId = window.localStorage.getItem("USER_ID");
// console.log(userId);

const CommentBox = (props) => {
  // console.log("this are the comments", props);

  const handleDelete = (event) => {
    // console.log("This is comments Id:", props.comment.id);
    props.deleteComment(props.comment.id);
    window.location.reload(false);
  };
  return (
    <div className="comment-container">
      <div className="picture-comment">
        <img alt="comment" src={usersObj[props.comment.userId].imgUrl}></img>
        <div>{usersObj[props.comment.userId].username}</div>
      </div>
      <div className="comment">
        <div>
          <p>{props.comment.comment}</p>
        </div>
      </div>
      <div>
        {parseInt(userId) === props.comment.userId ? (
          <button onClick={handleDelete}>x</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};
export default connect(null, mapDispatchToProps)(CommentBox);
