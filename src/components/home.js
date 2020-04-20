import React, {useEffect, useState} from 'react';
import "../assets/home.sass"
import {Container,Row} from 'react-bootstrap'
import Navigation from "./partials/nav";
import ImageCollage from "./partials/imageCollage"
import axios from "axios"
import TmdbApiUrl from "./apiUrl";
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../actions";

const Home=()=> {
  //url
  const api=new TmdbApiUrl();
  const movieUrl=`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}`;
  const tvUrl=`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}`;
  //redux
  const reduxStateCounter=useSelector(state=>state.Counter);
  const dispatch=useDispatch();
  //local state
  const[data,setData]=useState({movie:[],tv:[]});
  //fetch function
  const fetchMyAPI=async ()=>{
    try {
    const [movieData, tvData] = await Promise.all([movieUrl, tvUrl].map(el => axios.get(el)));
    setData({
      movie:movieData.data.results.filter((el, index) => index < 9) ,
      tv: tvData.data.results.filter((el, index) => index < 9)
    });
      console.log("home fetchMyApi function data is==>",data)
    }
    catch (err) {
      console.log("home fetchMyApi function error is==>",err)
    }
  };
  //rerender
  useEffect(()=>{
    fetchMyAPI();
  }
  ,[]);
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
          <button className="btn btn-light p-2 m-2 px-5" onClick={()=>dispatch(increment())}>INC</button>
          <button className="btn btn-light p-2 m-2 px-5" onClick={()=>dispatch(decrement())} >DEC</button>
          <h5>Count is {reduxStateCounter}</h5>
        </Container>
      </div>
    );
};

export default Home;