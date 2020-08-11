import React, { Component } from "react";
import { connect } from "react-redux";
import { successMessage } from "../store/reducers/aws";
import { postToAws } from "../store/utils/apiUtil";
// import { postPhoto } from '../store/utils/apiUtil';
import "./upload.css";
const user_id = window.localStorage.getItem("USER_ID");

class Upload extends Component {
  state = {
    description: "",
    photoName: "",
    photoFile: null,

    // this.handleUpload = this.handleUpload.bind(this);
  };

  handlePhotoName = (e) => {
    this.setState({ photoName: e.target.value });
  };

  handleDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ photoFile: e.target.files[0] });
  };

  handleUpload = (e) => {
    const formData = new FormData();

    formData.append("file", this.state.photoFile);
    formData.append("description", this.state.description);
    formData.append("photoName", this.state.photoName);
    this.props.postToAws(
      formData,
      user_id,
      this.state.description,
      this.state.photoName
    );
  };

  render() {
    return (
      <div className="upload-form-container">
        <form className="upload-form">
          <p>Enter photo name!</p>
          <input
            type="text"
            value={this.state.photoName}
            onChange={this.handlePhotoName}
          ></input>
          <p>Tell us something about your woofer!</p>
          <input
            type="textarea"
            value={this.state.description}
            onChange={this.handleDescription}
          ></input>
          <p>Select a photo to upload!</p>
          <input
            onChange={this.handleFileChange}
            type="file"
            name="file"
          ></input>
          <br />
          <button className="upload-form__button" onClick={this.handleUpload}>
            Upload
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const message = successMessage(state);
  return {
    message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postToAws: (file, id, description, photoName) =>
    dispatch(postToAws(file, id, description, photoName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
