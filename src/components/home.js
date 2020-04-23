import React, {useEffect, useState} from 'react';
import "../assets/home.sass"
import {Container,Row} from 'react-bootstrap'
import Navigation from "./partials/nav";
import ImageCollage from "./partials/imageCollage"
import axios from "axios"
import TmdbApiUrl from "./apiUrl";
import {useDispatch, useSelector} from "react-redux";
import {
  movieNowPlaying,
  tvOnTheAir,
  moviePopular,
  movieUpcoming,
  movieTopRated,
  tvPopular,
  tvTopRated,
  tvAiringToday,
  actorPopular
} from "../actions";
import myStore from "../store"

const Home=()=> {
  //url
  const api=new TmdbApiUrl();
  const movieUrl=`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}`;
  const tvUrl=`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}`;
  //redux
  const reduxStateCounter=useSelector(state=>state.Counter);

  //local state
  const[data,setData]=useState({movie:[],tv:[]});
  //fetch function
  const fetchMyAPI=async ()=>{
    try {
    const [movieData, tvData] = await Promise.all([movieUrl, tvUrl].map(el => axios.get(el)));
    setData({
      movie:movieData.data.results.slice(0,9) ,
      tv: tvData.data.results.slice(0,9)
    });
      console.log("home fetchMyApi function data is==>",data)
    }
    catch (err) {
      console.log("home fetchMyApi function error is==>",err)
    }
  };
  useEffect(()=>{
    fetchMyAPI()
  },[]);

   // console.log(`state.Movie==${JSON.stringify(useSelector(state=>state.Movie.now_playing.results))}`);
   // console.log(`state.Tv==${JSON.stringify(useSelector(state=>state.Tv.on_the_air.results))}`);
   // console.log(`getState().Movie==${JSON.stringify(myStore.getState().Movie.now_playing.results)}`);
   // console.log(`getState().Tv==${JSON.stringify(myStore.getState().Tv.on_the_air.results)}`);

    return (
      <div className="mainHome text-center">
        <Navigation />
        <Container fluid>
          <Row className="pt-2 pb-1 justify-content-center headingText">
            <h4>Movies in Theaters</h4>
          </Row>
          <ImageCollage list={data.movie} />
          <Row className="pt-2 pb-1 justify-content-center headingText">
            <h4>Now on Air</h4>
          </Row>
          <ImageCollage list={data.tv}/>
        </Container>
      </div>
    );
};

export default Home;