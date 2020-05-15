import {PERSON_DETAILS, PERSON_EXTERNAL_IDS, PERSON_KNOWN_FOR, PERSON_POPULAR} from "../../actions/media/personAction";

const PersonReducer = (state = {
  popular: {},
  personDetails: {
    person: {},
    knownFor: {},
    externalIds: {},
  }
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
        personDetails: {
          ...state.personDetails,
          person: action.payload
        }
      };
    case PERSON_KNOWN_FOR:
      return {
        ...state,
        personDetails: {
          ...state.personDetails,
          knownFor: action.payload
        }
      };
    case PERSON_EXTERNAL_IDS:
      return {
        ...state,
        personDetails: {
          ...state.personDetails,
          externalIds: action.payload
        }
      };
    default:
      return state;
  }
};

export default PersonReducer;