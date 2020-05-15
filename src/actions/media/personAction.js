import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "./fetchMyApiAction"

let api = new TmdbApiUrl();

export const PERSON_POPULAR = "PERSON_POPULAR";
export const PERSON_DETAILS = "PERSON_DETAILS";
export const PERSON_KNOWN_FOR = "PERSON_KNOWN_FOR";
export const PERSON_EXTERNAL_IDS = "PERSON_EXTERNAL_IDS";

// actions
export const personPopular = (page = 1) => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${api.generalFeatures(3)}${api.apiKey()}${api.page(page)}`, PERSON_POPULAR)
};

export const personDetails = (type, id) => {
  switch (true) {
    case type === "details" || type === 1:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${id}${api.apiKey()}`,PERSON_DETAILS);
    case type === "known_for" || type === 2:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${id}/tagged_images${api.apiKey()}`, PERSON_KNOWN_FOR);
    case type === "external_ids" || type === 3:
      return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${id}/external_ids${api.apiKey()}`, PERSON_EXTERNAL_IDS);
    default:
      return null
  }
};