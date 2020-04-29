import {combineReducers} from "redux";
import CounterReducer from "./counterReducer";
import ActorReducer from "./actorReducer";
import MovieReducer from "./movieReducer";
import TvReducer from "./tvReducer";
import FirebaseAuthReducer from "./authReducer"

const allReducers = combineReducers({
  Counter: CounterReducer,
  Actor:ActorReducer,
  Movie:MovieReducer,
  Tv:TvReducer,
  Auth:FirebaseAuthReducer
});

export default allReducers