import {combineReducers} from "redux";
import CounterReducer from "./counter";

const allReducers = combineReducers({
  Counter: CounterReducer
});

export default allReducers