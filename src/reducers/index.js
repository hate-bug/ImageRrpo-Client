import { combineReducers } from "redux";
import errorreducer from "./errorReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorreducer,
  security: securityReducer,
});
