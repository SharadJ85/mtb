import axios from "axios";
import TmdbApiUrl from "../components/apiUrl";

const api = new TmdbApiUrl();

export const increment = (multiply) => {
  return {
    type: "INC",
    payload: multiply
  }
};

export const decrement = (multiply) => {
  return {
    type: "DEC",
    payload: multiply
  }
};


//fetch API function
const fetchMyAPI = (fetchUrl, typeName) => {
  return async dispatch => {
    try {
      const fetchData = await axios.get(fetchUrl);
      console.log(`${typeName} fetchMyApi function data is==>${fetchData}`);
      dispatch({
        type: typeName,
        payload: fetchData.data,
      })
    } catch (err) {
      console.log(`${typeName} fetchMyApi function error is==>${err}`);
      dispatch({
        type: typeName,
        payload: err
      })
    }
  }
};
// actions
export const moviePopular = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(3)}${api.apiKey()}`, "MOVIE_POPULAR")
};

export const movieTopRated = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(2)}${api.apiKey()}`, "MOVIE_TOP_RATED")
};

export const movieNowPlaying = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}`, "MOVIE_NOW_PLAYING")
};

export const movieUpcoming = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(0)}${api.apiKey()}`, "MOVIE_UPCOMING")
};

export const tvPopular = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(3)}${api.apiKey()}`, "TV_POPULAR")
};

export const tvTopRated = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(2)}${api.apiKey()}`, "TV_TOP_RATED")
};

export const tvAiringToday = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(4)}${api.apiKey()}`, "TV_AIRING_TODAY")
};

export const tvOnTheAir = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}`, "TV_ON_THE_AIR")
};

export const actorPopular = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${api.generalFeatures(3)}${api.apiKey()}`, "ACTOR_POPULAR")
};
