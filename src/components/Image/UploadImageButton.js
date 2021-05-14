import React, { Component } from "react";
import { Link } from "react-router-dom";

const UploadImageButton = () => {
  return (
    <React.Fragment>
      <Link to="/addimage" className="btn btn-lg btn-info">
        Upload an Image
      </Link>
    </React.Fragment>
  );
};

export default UploadImageButton;
