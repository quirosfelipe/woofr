import React, { useState } from "react";
import { connect } from "react-redux";
import { submitComment } from "../store/reducers/auth";
import { Link, Redirect } from "react-router-dom";
import "./comment-form.css";

const userId = window.localStorage.getItem("USER_ID");

const CommentForm = (props) => {
  console.log("props for the comment box", props);

  const photoId = props.props;
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (event) => {
    props.submitComment(comment, userId, photoId);
  };

  //   if (props.access_token) {
  //     return <Redirect to=`/photo-page/${}` />;
  //   } else {
  return (
    <div className="container">
      <div className="login-container">
        <form className="login-container__form" onSubmit={handleSubmit}>
          <textarea
            rows="8"
            cols="30"
            className="login-container__form-email"
            type="text"
            placeholder="Comment this pic!"
            onChange={handleCommentChange}
          ></textarea>
          <br />
          <button className="login-container__form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     access_token: state.session.access_token,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    submitComment: (comment, userId, photoId) =>
      dispatch(submitComment(comment, userId, photoId)),
  };
};
export default connect(null, mapDispatchToProps)(CommentForm);

// export default CommentForm;
