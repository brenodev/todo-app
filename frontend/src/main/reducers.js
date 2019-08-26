import { combineReducers } from "redux";

// CUSTOM REDUCER
import todoReducer from "../todo/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer;
