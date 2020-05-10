import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "./fetchMyApiAction"

let api = new TmdbApiUrl();

export const MOVIE_POPULAR = "MOVIE_POPULAR";
export const MOVIE_TOP_RATED = "MOVIE_TOP_RATED";
export const MOVIE_NOW_PLAYING = "MOVIE_NOW_PLAYING";
export const MOVIE_UPCOMING = "MOVIE_UPCOMING";
export const MOVIE_DETAILS = "MOVIE_DETAILS";
export const MOVIE_VIDEOS = "MOVIE_VIDEOS";
export const MOVIE_CREDITS = "MOVIE_CREDITS";
export const MOVIE_REVIEWS = "MOVIE_REVIEWS";
export const MOVIE_EXTERNAL_IDS = "MOVIE_EXTERNAL_IDS";
export const MOVIE_KEYWORDS = "MOVIE_KEYWORDS";
export const MOVIE_RECOMMENDED = "MOVIE_RECOMMENDED";
export const MOVIE_SIMILAR = "MOVIE_SIMILAR";


// actions
export const movieType = (type, page = 1) => {
  switch (true) {
    case type === "popular" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(3)}${api.apiKey()}${api.page(page)}`, MOVIE_POPULAR);
    case type === "top_rated" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(2)}${api.apiKey()}${api.page(page)}`, MOVIE_TOP_RATED);
    case type === "now_playing" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}${api.page(page)}`, MOVIE_NOW_PLAYING);
    case type === "upcoming" || type === 4:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(0)}${api.apiKey()}${api.page(page)}`, MOVIE_UPCOMING);
    default:
      return null
  }
};


export const movieDetailsType = (type, id) => {
  switch (true) {
    case type === "details" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}${api.apiKey()}`, MOVIE_DETAILS);
    case type === "videos" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/videos${api.apiKey()}`, MOVIE_VIDEOS);
    case type === "credits" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/credits${api.apiKey()}`, MOVIE_CREDITS);
    case type === "reviews" || type === 4:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/reviews${api.apiKey()}`, MOVIE_REVIEWS);
    case type === "external_ids" || type === 5:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/external_ids${api.apiKey()}`, MOVIE_EXTERNAL_IDS);
    case type === "keywords" || type === 6:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/keywords${api.apiKey()}`, MOVIE_KEYWORDS);
    case type === "recommended" || type === 7:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/recommendations${api.apiKey()}`, MOVIE_RECOMMENDED);
    case type === "similar" || type === 8:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}/similar${api.apiKey()}`, MOVIE_SIMILAR);
    default:
      return null
  }
};