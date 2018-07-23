import { combineReducers } from "redux";
import tracks from "./tracks";
import sauce from "./sauce";
import course from "./course";

const rootReducer = combineReducers({
  tracks,
  sauce,
  course
});

export default rootReducer;
