import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setjwtToken from "../securityUtils/setjwtToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post("/api/user/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const userLogin = (LoginRequest) => async (dispatch) => {
  //get the JWT token
  //decode and store the token
  //set token in the request header
  try {
    const res = await axios.post("/api/user/login", LoginRequest);
    // get jwt token
    const token = res.data.jwtToken;
    // store token
    localStorage.setItem("jwtToken", token);
    //set token in the header
    //decode jwt token
    const decoded = jwt_decode(token);

    setjwtToken(token);

    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
