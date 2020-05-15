import {combineReducers} from "redux";
import PersonReducer from "./media/personReducer";
import MovieReducer from "./media/movieReducer";
import TvReducer from "./media/tvReducer";
import FirebaseAuthReducer from "./auth/authReducer"
import SearchReducer from "./search/searchReducer";

const allReducers = combineReducers({
  Person: PersonReducer,
  Movie: MovieReducer,
  Tv: TvReducer,
  Auth: FirebaseAuthReducer,
  Search: SearchReducer
});

export default allReducers