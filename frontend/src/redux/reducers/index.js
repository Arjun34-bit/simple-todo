import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
const reducers = combineReducers({
  user: todoReducer,
});
export default reducers;
