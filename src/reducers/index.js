import {combineReducers} from "redux";
import CounterReducer from "./counter";
import ActorReducer from "./actor";
import MovieReducer from "./movie";
import TvReducer from "./tv";

const allReducers = combineReducers({
  Counter: CounterReducer,
  Actor:ActorReducer,
  Movie:MovieReducer,
  Tv:TvReducer
});

export default allReducers