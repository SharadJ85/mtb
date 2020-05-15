import React from 'react';
import {Link} from "react-router-dom";
import Ratings from "./ratings";
import "../../assets/mediaSearch.sass";
import TmdbApiUrl from "./apiUrl";
import {Badge} from "react-bootstrap";

const SearchMovieTvCard = ({mediaId, name, posterPath, media, ratings, date, overview}) => {
  let api = new TmdbApiUrl();
  return (
    <div className="MediaType p-0 mx-auto shadow container-fluid row">
      <div className="p-0 order-2 col-3">
        <div className="movieTvDataSec posterDiv">
          <Link to={`/media_details/${media}/${mediaId}`}>
            <img
              src={posterPath ? `${api.imageURL(0)}${posterPath}` : `${require(`../../assets/images/imageUnavailable.jpg`)}`}
              alt={name} className="posterSize" />
          </Link>
        </div>
      </div>
      <div className=" my-2 p-0 order-1 col">
        <div className="p-0 pl-3 text-white container movieTvDataContainer ">
          <div className="row">
            <div className="col-9 order-1">
              <Link to={`/media_details/${media}/${mediaId}`}>
                <h3 className="font-weight-normal text-white movieTvDataTitle">
                  {name}
                </h3>
              </Link>
              <h5 className="text-info ml-2 font-weight-light text-capitalize typeOf">
                {media}
              </h5>
            </div>
            <div className="col-2 order-2 ml-4 px-3">
              <Ratings value={ratings} />
            </div>
          </div>
          {/*{(el.release_date || el.first_air_date)*/}
          {(date)
            ? <div className=" text-white-50">
              {/*{(el.release_date || el.first_air_date).replace(/-/g, " / ")}*/}
              {date.replace(/-/g, " / ")}
            </div>
            : null}
          <h6 className="pt-2 overview">Overview</h6>
          <p className="mr-5 mb-0 ml-1 overviewText">{overview}</p>
        </div>
        <div className="m-0 p-0">
          <Link to={`/media_details/${media}/${mediaId}`} className="ml-4 pt-0 text-white row">
            <Badge variant={`light`} className=" mt-1 px-2 py-1 font-weight-bold moreInfoMovieTv">More Info</Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieTvCard;