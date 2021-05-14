import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadImage } from "../../actions/ImageActions";

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      file: "",
      isPublic: "",
    };
  }

  setPublic(event) {
    this.state.isPublic = event.target.value;
  }

  setImageFile(event) {
    var file = event.target.files[0];
    this.state.file = file;
  }
  submit() {
    let newImage = new FormData();
    newImage.append("file", this.state.file);
    newImage.append("isPublic", this.state.isPublic);
    this.props.uploadImage(newImage, this.props.history);
  }

  render() {
    return (
      <div>
        {
          //Name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //bind on constrcutor
          //check state change
        }
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Upload Image Form</h5>
                <hr />

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Image Name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    onChange={this.setImageFile.bind(this)}
                    type="file"
                    name="file"
                  ></input>
                </div>
                <br />
                <h6>Accessibility</h6>
                <div className="form-group">
                  <form onChange={this.setPublic.bind(this)}>
                    <input type="radio" name="isPublic" value="true" />
                    Public Image
                    <input type="radio" name="isPublic" value="false" />
                    Private Image
                  </form>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  onClick={this.submit.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

uploadImage.protoTypes = {
  uploadImage: PropTypes.func.isRequired,
};

export default connect(null, { uploadImage })(UploadImage);
