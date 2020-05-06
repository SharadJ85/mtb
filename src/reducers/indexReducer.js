import {combineReducers} from "redux";
import PersonReducer from "./personReducer";
import MovieReducer from "./movieReducer";
import TvReducer from "./tvReducer";
import FirebaseAuthReducer from "./authReducer"
import SearchReducer from "./searchReducer";

const allReducers = combineReducers({
  Person: PersonReducer,
  Movie: MovieReducer,
  Tv: TvReducer,
  Auth: FirebaseAuthReducer,
  Search: SearchReducer
});

export default allReducers