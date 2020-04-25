import TmdbApiUrl from "../components/partials/apiUrl";
import {fetchMyAPI} from "../components/partials/fetchMyApiAction"

let api=new TmdbApiUrl();

export const TV_POPULAR="TV_POPULAR";
export const TV_TOP_RATED="TV_TOP_RATED";
export const TV_AIRING_TODAY="TV_AIRING_TODAY";
export const TV_ON_THE_AIR="TV_ON_THE_AIR";

// actions
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
