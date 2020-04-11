import React from 'react';
import {Link} from "react-router-dom";
import Ratings from "./ratings";
import "../../assets/mediaSearch.sass";

const date=`2019`;
const SearchMovieTvCard=()=> {
  //const imageSource=el.poster_path?(imageURL + el.poster_path):`/images/picUnavailable.jpg`;
  const imageSource=null;
  return (
    <div className="MediaType p-0 mx-auto shadow">
      <Link to={"/info/"+"el.media_type"+"/"+"el.id"}>
        <div className="p-0 order-1 posterDiv">
          <img src={imageSource} alt="unavailable" className="posterSize"/>
        </div>
      </Link>
      <div className=" my-2 order-2 movieTvDataSec">
        <div className="text-white container movieTvDataContainer">
          <div className="row">
            <div className="col-9 order-1">
              <Link to={"/info/"+"el.media_type"+"/"+"el.id"}>
                <h3 className="font-weight-normal text-white movieTvDataTitle">
                  {"el.name || el.title"} bunny
                </h3>
              </Link>
              <h5 className="text-info ml-2 font-weight-light text-capitalize">
                {"el.media_type"}movie
              </h5>
            </div>
            <div className="col-2 order-2 ml-4 px-3">
              <Ratings value={"el.popularity"}/>
            </div>
          </div>
          {/*{(el.release_date || el.first_air_date)*/}
          {(date)
           ? <div className=" text-white-50">
                {/*{(el.release_date || el.first_air_date).replace(/-/g, " / ")}*/}
                {date}
             </div>
           :null}
          <h6 className="pt-2">Overview</h6>
          <p className="mr-5 mb-0 ml-1">{"el.overview"} text text text text text text text text text text text text text text text text text text text text</p>
        </div>
        <div className="m-0 p-0">
          <Link to={"/info/"+"el.media_type"+"/"+"el.id"} className="ml-4 pt-0 text-white row">
              . . .<p className="bg-transparent border-0 px-1 font-italic text-white-50">read more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieTvCard;