import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "./fetchMyApiAction"

let api = new TmdbApiUrl();

export const TV_POPULAR = "TV_POPULAR";
export const TV_TOP_RATED = "TV_TOP_RATED";
export const TV_AIRING_TODAY = "TV_AIRING_TODAY";
export const TV_ON_THE_AIR = "TV_ON_THE_AIR";

// actions
export const tvType = (type, page = 1) => {
  switch (true) {
    case type === "popular" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(3)}${api.apiKey()}${api.page(page)}`, "TV_POPULAR");
    case type === "top_rated" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(2)}${api.apiKey()}${api.page(page)}`, "TV_TOP_RATED");
    case type === "on_the_air" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}${api.page(page)}`, "TV_ON_THE_AIR");
    case type === "airing_today" || type === 4:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(4)}${api.apiKey()}${api.page(page)}`, "TV_AIRING_TODAY");
    default:
      return null
  }
};
