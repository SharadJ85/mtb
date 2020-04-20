import axios from "axios";
import TmdbApiUrl from "../components/apiUrl";

//
// const api=new TmdbApiUrl();
//
//   export const newMovies=()=>{
//     return(dispatch)=>{
//     return axios
//       .get(`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}`)
//       .then((res=>dispatch(homeMovies(res.data))))
//     }
//   };
//   export const newTvShows=()=>{
//     return(dispatch)=>{
//     return axios
//       .get(`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}`)
//       .then((res=>dispatch(homeMovies(res.data))))
//     }
//   };
//
// export const homeMovies=(data)=>{
//   return {
//     type:"Home_Movies",
//     payload:data
//   }
// };
// export const homeTvShows=(data)=>{
//   return {
//     type:"Home_Movies",
//     payload:data
//   }
// };

export const increment=(multiply)=>{
  return {
    type:"INC",
    payload:multiply
  }
};

export const decrement=(multiply)=>{
  return {
    type:"DEC",
    payload:multiply
  }
};