import {combineReducers} from "redux";
import CounterReducer from "./counter";
import ActorReducer from "./actor";
import MovieReducer from "./movie";
import TvReducer from "./tv";
import FirebaseAuthReducer from "./auth"

const allReducers = combineReducers({
  Counter: CounterReducer,
  Actor:ActorReducer,
  Movie:MovieReducer,
  Tv:TvReducer,
  Auth:FirebaseAuthReducer
});

export default allReducers