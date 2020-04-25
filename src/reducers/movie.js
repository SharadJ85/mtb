import {MOVIE_NOW_PLAYING, MOVIE_POPULAR, MOVIE_TOP_RATED, MOVIE_UPCOMING} from "../actions/movie";

const MovieReducer = (state = {
  popular: {},
  top_rated: {},
  now_playing:{},
  upcoming: {},
}, action) => {
  switch (action.type) {
    case MOVIE_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case MOVIE_TOP_RATED:
      return {
        ...state,
        top_rated: action.payload
      };
    case MOVIE_NOW_PLAYING:
      return {
        ...state,
        now_playing: action.payload
      };
    case MOVIE_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      };
    default:
      return state
  }
};

export  default MovieReducer;