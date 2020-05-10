import {SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS} from "../actions/searchAction";

const SearchReducer = (
  state = {
    keywords: {},
    isSearching: false,
    isSearchingSuccess: false,
    isSearchingFailure: false,
    searchDataFetch: {res: {}, error: {}}
  }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        keywords: action.keywords,
        isSearching: true,
        isSearchingSuccess: false,
        isSearchingFailure: false,
        searchDataFetch: {res: {}, error: {}}
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        isSearchingSuccess: true,
        searchDataFetch: {res: action.searchResult, error: {}}
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isSearching: false,
        isSearchingFailure: true,
        searchDataFetch: {res: {}, error: action.error}
      };
    default:
      return state
  }
};

export default SearchReducer;