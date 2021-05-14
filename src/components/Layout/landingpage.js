import React, { Component } from "react";
import { Link } from "react-router-dom";

class landingpage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Image Repository Tool</h1>
                <p className="lead">
                  Create your account to save and view Images
                </p>
                <hr />
                <Link className="btn btn-lg btn-primary mx-2" to="/register">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-primary mx-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landingpage;
