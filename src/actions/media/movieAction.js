import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "../../components/partials/fetchMyApiAction"

let api=new TmdbApiUrl();

export const MOVIE_POPULAR="MOVIE_POPULAR";
export const MOVIE_TOP_RATED="MOVIE_TOP_RATED";
export const MOVIE_NOW_PLAYING="MOVIE_NOW_PLAYING";
export const MOVIE_UPCOMING="MOVIE_UPCOMING";

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
