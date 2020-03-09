import { combineReducers } from "redux";
import dashBoardReducer from "./dashBoardReducer";

export default combineReducers({
  dash: dashBoardReducer
});
