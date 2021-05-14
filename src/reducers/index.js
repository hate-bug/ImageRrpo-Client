import { combineReducers } from "redux";
import errorreducer from "./errorReducer";

export default combineReducers({
  errors: errorreducer,
});
