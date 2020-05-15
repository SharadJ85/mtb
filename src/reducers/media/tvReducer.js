import {
  TV_AIRING_TODAY,
  TV_CREDITS,
  TV_DETAILS,
  TV_EXTERNAL_IDS,
  TV_KEYWORDS,
  TV_ON_THE_AIR,
  TV_POPULAR,
  TV_RECOMMENDED,
  TV_REVIEWS,
  TV_SIMILAR,
  TV_TOP_RATED,
  TV_VIDEOS
} from "../../actions/media/tvAction";

const TvReducer = (state = {
  popular: {},
  top_rated: {},
  airing_today: {},
  on_the_air: {},
  tvDetails: {
    tv: {},
    credits: {},
    videos: {},
    reviews: {},
    externalIds: {},
    keywords: {},
    recommended: {},
    similar: {},
  },
    errors:{}
}, action) => {
  switch (action.type) {
    case TV_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case TV_TOP_RATED:
      return {
        ...state,
        top_rated: action.payload
      };
    case TV_AIRING_TODAY:
      return {
        ...state,
        airing_today: action.payload
      };
    case TV_ON_THE_AIR:
      return {
        ...state,
        on_the_air: action.payload
      };
    case TV_DETAILS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          tv: action.payload
        }
      };
    case TV_VIDEOS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          videos: action.payload
        }
      };
    case TV_CREDITS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          credits: action.payload
        }
      };
    case TV_REVIEWS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          reviews: action.payload
        }
      };
    case TV_EXTERNAL_IDS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          externalIds: action.payload
        }
      };
    case TV_KEYWORDS:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          keywords: action.payload
        }
      };
    case TV_RECOMMENDED:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          recommended: action.payload
        }
      };
    case TV_SIMILAR:
      return {
        ...state,
        tvDetails: {
          ...state.tvDetails,
          similar: action.payload
        }
      };
    default:
      return state
  }
};

export default TvReducer;