import {combineReducers} from "redux";
import PersonReducer from "./personReducer";
import MovieReducer from "./movieReducer";
import TvReducer from "./tvReducer";
import FirebaseAuthReducer from "./authReducer"

const allReducers = combineReducers({
  Person:PersonReducer,
  Movie:MovieReducer,
  Tv:TvReducer,
  Auth:FirebaseAuthReducer
});

export default allReducers