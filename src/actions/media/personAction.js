import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "../../components/partials/fetchMyApiAction"

let api=new TmdbApiUrl();

export const PERSON_POPULAR="PERSON_POPULAR";
export const PERSON_DETAILS="PERSON_DETAILS";

// actions
export const personPopular = (page=1) => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${api.generalFeatures(3)}${api.apiKey()}${api.page(page)}`, PERSON_POPULAR)
};

export const personDetails=(id)=>{
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${id}${api.apiKey()}`,PERSON_DETAILS)
};
