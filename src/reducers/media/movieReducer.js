import {
  MOVIE_CREDITS,
  MOVIE_DETAILS,
  MOVIE_NOW_PLAYING,
  MOVIE_POPULAR,
  MOVIE_REVIEWS,
  MOVIE_TOP_RATED,
  MOVIE_UPCOMING,
  MOVIE_VIDEOS,
  MOVIE_EXTERNAL_IDS,
  MOVIE_KEYWORDS,
  MOVIE_RECOMMENDED,
  MOVIE_SIMILAR
} from "../../actions/media/movieAction";

const MovieReducer = (state = {
  popular: {},
  top_rated: {},
  now_playing: {},
  upcoming: {},
  movieDetails: {
    movie: {},
    credits: {},
    videos: {},
    reviews: {},
    externalIds: {},
    keywords: {},
    recommended: {},
    similar: {},
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
          movie: action.payload
        }
      };
    case MOVIE_VIDEOS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          videos: action.payload
        }
      };
    case MOVIE_CREDITS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          credits: action.payload
        }
      };
    case MOVIE_REVIEWS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          reviews: action.payload
        }
      };
    case MOVIE_EXTERNAL_IDS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          externalIds: action.payload
        }
      };
    case MOVIE_KEYWORDS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          keywords: action.payload
        }
      };
    case MOVIE_RECOMMENDED:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          recommended: action.payload
        }
      };
    case MOVIE_SIMILAR:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          similar: action.payload
        }
      };
    default:
      return state
  }
};

export default MovieReducer;