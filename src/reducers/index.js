import { combineReducers } from "redux";
import tracks from "./tracks";
import sauce from "./sauce";
import course from "./course";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  tracks,
  sauce,
  course,
  form: formReducer
});

export default rootReducer;
