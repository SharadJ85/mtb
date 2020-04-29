import TmdbApiUrl from "../../components/partials/apiUrl";
import {fetchMyAPI} from "../../components/partials/fetchMyApiAction"

let api=new TmdbApiUrl();

export const ACTOR_POPULAR="ACTOR_POPULAR";

// actions
export const actorPopular = () => {
  return fetchMyAPI(`${api.baseURL()}${api.mediaType(2)}/${api.generalFeatures(3)}${api.apiKey()}`, "ACTOR_POPULAR")
};
