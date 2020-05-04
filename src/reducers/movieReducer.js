import {
  MOVIE_DETAILS,
  MOVIE_VIDEOS,
  MOVIE_CREDITS,
  MOVIE_REVIEWS,
  MOVIE_NOW_PLAYING,
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_UPCOMING
} from "../actions/media/movieAction";

const MovieReducer = (state = {
  popular: {},
  top_rated: {},
  now_playing:{},
  upcoming: {},
  movieDetails:{
    movie:{},
    credits:{},
    videos:{},
    reviews:{},
  },
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
    case MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          movie:action.payload
        }
      };
    case MOVIE_VIDEOS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          videos:action.payload
        }
      };
    case MOVIE_CREDITS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          credits:action.payload
        }
      };
    case MOVIE_REVIEWS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          reviews:action.payload
        }
      };
    default:
      return state
  }
};

export  default MovieReducer;