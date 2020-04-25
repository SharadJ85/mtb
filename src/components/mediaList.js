import React, {Component} from 'react';
import axios from "axios"
import {useParams} from 'react-router-dom'
import TmdbApiUrl from "./partials/apiUrl"
import "../assets/mediaList.sass"
import Navigation from "./partials/nav";
import MediaCard from "./partials/mediaCard";
import Pagination from "./partials/pagination";

let api=new TmdbApiUrl();

//
// export const FetchUrl=(url)=> {
//   const [fetchedData,setFetchedData]=useState({loading:true,status:null,mainData:null});
//   console.log(`url==>${url}`);
//   useEffect(()=>{
//     setFetchedData({loading:true,status:null,mainData:null});
//     axios
//         .get(url)
//         .then(res=>{
//           console.log(`response==> ${res}`);
//           setFetchedData({loading: false,status:res.status,mainData:res.data});
//         })
//         .catch((error)=> console.log(`sorry for the ${error}`));
//   },[url]);
//   // const fill=JSON.parse(JSON.stringify(fetchedData));
//   //const gag=Object.create(fill.mainData);
//   // console.log(`hahahahaha==>${JSON.stringify(typeof gag.results)}`);
//   console.log(`hahahahaha==>${JSON.stringify( fetchedData)}`);
//   return fetchedData;
// };

const MediaList = ()=> {
   const {generalType} = useParams();
   const {media} = useParams();
   const {pageId} = useParams();
   const apiKey=`d531f0b35e33ab3572f10065361d3ae1`;
   const url=`${api.baseURL()}${media}/${generalType}?api_key=${apiKey}&page=${pageId}`;
  const rat={};
  console.log(`rat==>${rat}`);
  console.log(`rat==>${(JSON.stringify(rat.state))}`);
  console.log(`#@generalType==>${generalType}`);
  console.log(`#@media==>${media}`);
  console.log(`#@page==>${pageId}`);

  // const mediaData=Object.create(data);
  // console.log(`#@loading==>${loading}`);
  // console.log(`#@FetchedData==>${(mainData)}`);
  // console.log(`#@status==>${status}`);
  // console.log(`#@mainKey is=${apiKey}`);
  const data=[1,2,3,4,5];
  return (
    <div className="mediaList">
      <Navigation />
      <div className="list m-5 d-flex flex-wrap justify-content-around">
        {data.map(media=>(
        <div className="m-5">
          <MediaCard
              // rating={true}
              // ratingValue={media.vote_average}
              // year={media.release_date}
              // title={media.title}
              // text={media.overview}/>
            posterPath={`/5vHssUeVe25bMrof1HyaPyWgaP.jpg`}
          ratingValue={9}
          year={2019}
          title={`John`}
          text={`Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text `}/>
        </div>))}
      </div>
      <div className="pb-4">
        <Pagination totalPages={500} pageType={`media_list`} media={media} generalType={generalType} pageId={pageId} />
      </div>
    </div>
  );
};
export default MediaList;