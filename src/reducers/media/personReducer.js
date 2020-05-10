import {PERSON_POPULAR,PERSON_DETAILS} from "../../actions/media/personAction";

const PersonReducer = (state = {
  popular: {},
  personDetails:{}
}, action) => {
  switch (action.type) {
    case PERSON_POPULAR:
    return {
      ...state,
      popular: action.payload
    };
    case PERSON_DETAILS:
      return {
        ...state,
        personDetails: action.payload
      };
    default:
      return state;
  }
};

export default PersonReducer;