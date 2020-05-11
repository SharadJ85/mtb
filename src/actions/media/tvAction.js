import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "./fetchMyApiAction"

let api = new TmdbApiUrl();

export const TV_POPULAR = "TV_POPULAR";
export const TV_TOP_RATED = "TV_TOP_RATED";
export const TV_AIRING_TODAY = "TV_AIRING_TODAY";
export const TV_ON_THE_AIR = "TV_ON_THE_AIR";
export const TV_DETAILS = "TV_DETAILS";
export const TV_VIDEOS = "TV_VIDEOS";
export const TV_CREDITS = "TV_CREDITS";
export const TV_REVIEWS = "TV_REVIEWS";
export const TV_EXTERNAL_IDS = "TV_EXTERNAL_IDS";
export const TV_KEYWORDS = "TV_KEYWORDS";
export const TV_RECOMMENDED = "TV_RECOMMENDED";
export const TV_SIMILAR = "TV_SIMILAR";

// actions
export const tvType = (type, page = 1) => {
  switch (true) {
    case type === "popular" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(3)}${api.apiKey()}${api.page(page)}`, TV_POPULAR);
    case type === "top_rated" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(2)}${api.apiKey()}${api.page(page)}`, TV_TOP_RATED);
    case type === "on_the_air" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}${api.page(page)}`, TV_ON_THE_AIR);
    case type === "airing_today" || type === 4:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(4)}${api.apiKey()}${api.page(page)}`, TV_AIRING_TODAY);
    default:
      return null
  }
};



export const tvDetailsType = (type, id) => {
  switch (true) {
    case type === "details" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}${api.apiKey()}`, TV_DETAILS);
    case type === "videos" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/videos${api.apiKey()}`, TV_VIDEOS);
    case type === "credits" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/credits${api.apiKey()}`, TV_CREDITS);
    case type === "reviews" || type === 4:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/reviews${api.apiKey()}`, TV_REVIEWS);
    case type === "external_ids" || type === 5:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/external_ids${api.apiKey()}`, TV_EXTERNAL_IDS);
    case type === "keywords" || type === 6:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/keywords${api.apiKey()}`, TV_KEYWORDS);
    case type === "recommended" || type === 7:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/recommendations${api.apiKey()}`, TV_RECOMMENDED);
    case type === "similar" || type === 8:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(1)}/${id}/similar${api.apiKey()}`, TV_SIMILAR);
    default:
      return null
  }
};