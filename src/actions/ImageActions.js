import axios from "axios";
import { GET_ERRORS } from "./types";

export const uploadImage = (image, history) => async (dispatch) => {
  try {
    const rest = await axios.post("/api/image/save", image);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
