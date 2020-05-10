import {TV_AIRING_TODAY, TV_ON_THE_AIR, TV_POPULAR, TV_TOP_RATED} from "../actions/media/tvAction";

const TvReducer = (state = {
  popular: {},
  top_rated: {},
  airing_today: {},
  on_the_air: {}
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
    default:
      return state
  }
};

export default TvReducer;