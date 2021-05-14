import React, { Component } from "react";
import ImageItem from "./Image/ImageItem";
import UploadImageButton from "./Image/UploadImageButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <UploadImageButton />

              <br />
              <hr />
              <ImageItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
