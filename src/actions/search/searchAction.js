import TmdbApiUrl from "../../components/partials/apiUrl";
import axios from "axios";

let api = new TmdbApiUrl();


export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

//main actions
export const searchRequest = keywords => {
  return {
    type: SEARCH_REQUEST,
    keywords
  };
};

export const searchSuccess = searchResult => {
  return {
    type: SEARCH_SUCCESS,
    searchResult
  };
};

export const searchError = error => {
  return {
    type: SEARCH_FAILURE,
    error
  };
};

//functioning actions
const SearchAction = (keywords, page) => async dispatch => {
  try {
    dispatch(searchRequest(keywords));
    const fetchSearchData = await axios.get(`${api.searchURL(0)}${api.apiKey()}&query=${keywords}&page=${page}`);
    dispatch(searchSuccess(fetchSearchData.data));
  } catch (e) {
    console.log(`action search error==>${e}`);
    dispatch(searchError(e));
  }
};

export default SearchAction;