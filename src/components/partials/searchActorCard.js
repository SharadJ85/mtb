import React from 'react';
import {Link} from "react-router-dom";
import "../../assets/mediaSearch.sass";

const SearchActorCard=()=> {
  //const imageSource=el.poster_path?(imageURL + el.poster_path):require(`/images/picUnavailable.jpg`);
  const imageSource=null;
  return (
    <div className="MediaType p-0 mx-auto shadow">
      <Link to={"/info/"+"el.media_type"+"/"+"el.id"}>
        <div className="p-0 order-1 posterDiv">
          <img src={imageSource} alt="unavailable" className="posterSize"/>
        </div>
      </Link>
      <div className=" my-2 text-white container">
        <div className=" mr-4">
          <Link to={"/info/"+"el.media_type"+"/"+"el.id"}>
            <h3 className="font-weight-normal text-white text-capitalize">{"el.name"}Brad</h3>
          </Link>
          <h5 className="text-info ml-2 font-weight-light text-capitalize">{"el.known_for_department"}Acting</h5>
        </div>
        <div className="text-white-50 knownFor">
          Known for
        </div>
        <div className="row mt-2 mx-0 ">
          {/*{el.known_for.map(movieTv=>(*/}
          {/*  <Link to={"/info/"+movieTv.media_type+"/"+movieTv.id}>*/}
          {/*    <div className="mx-1 hoverSmallImage" title="movieTv.title || movieTv.name">*/}
          {/*      <img src={imageURL+movieTv.poster_path} alt="" className="smallPosterImage"/>*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*))}*/}
        </div>
          <Link to={"/info/"+"el.media_type"+"/"+"el.id"}>
            <p className=" font-italic mt-1 text-white-50">more info</p>
          </Link>
      </div>
    </div>
  );
};

export default SearchActorCard;