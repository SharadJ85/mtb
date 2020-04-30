import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "../../components/partials/fetchMyApiAction"

let api=new TmdbApiUrl();

export const MOVIE_POPULAR="MOVIE_POPULAR";
export const MOVIE_TOP_RATED="MOVIE_TOP_RATED";
export const MOVIE_NOW_PLAYING="MOVIE_NOW_PLAYING";
export const MOVIE_UPCOMING="MOVIE_UPCOMING";
export const MOVIE_DETAILS="MOVIE_DETAILS";



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


export const movieDetails=(id)=>{
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(0)}/${id}${api.apiKey()}`,MOVIE_DETAILS)
};
