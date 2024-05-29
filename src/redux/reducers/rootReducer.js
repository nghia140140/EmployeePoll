import authReducer from "./authReducer";
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  questionReducer,
});

export default rootReducer;
