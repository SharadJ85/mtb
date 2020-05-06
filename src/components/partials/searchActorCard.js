import React from 'react';
import {Link} from "react-router-dom";
import "../../assets/mediaSearch.sass";
import TmdbApiUrl from "./apiUrl";
import {Badge} from "react-bootstrap";

const SearchActorCard = ({personId, posterPath, name, department, knownFor}) => {
  let api = new TmdbApiUrl()
  const imageSource = null;
  return (
    <div className="MediaType p-0 mx-auto shadow container-fluid row">
      <div className="p-0 order-1 col-3">
        <div className="actorDataSec posterDiv">
          <Link to={`/person_details/${personId}`}>
            <img
              src={posterPath ? `${api.imageURL(0)}${posterPath}` : `${require(`../../assets/images/imageUnavailable.jpg`)}`}
              alt={name} className="posterSize" />
          </Link>
        </div>
      </div>
      <div className="col order-2">
        <div className=" my-2 text-white container">
          <div className=" mr-4">
            <Link to={`/person_details/${personId}`}>
              <h3 className="font-weight-normal text-white text-capitalize">{name}</h3>
            </Link>
            <h5 className="text-info ml-2 font-weight-light text-capitalize typeOf">{department}</h5>
          </div>
          <div className="text-white-50 knownFor">
            Known for
          </div>
          <div className="row mt-2 mx-0 ">
            {knownFor.map(media => (
              <div className="mx-1 p-0 m-0  smallPoster"
                   title={`${media.media_type.toUpperCase()} : ${media.title || media.name}`}>
                <Link to={`/media_details/${media.media_type}/${media.id}`}>
                  <img
                    src={media.poster_path ? `${api.imageURL(0)}${media.poster_path}` : `${require(`../../assets/images/imageUnavailable.jpg`)}`}
                    alt={media.title || media.name}
                    className="smallPosterImage" />
                </Link>
              </div>
            ))}
            <Link to={`/person_details/${personId}`} className="col align-self-end">
              <Badge variant={`light`} className=" mt-1 px-3 py-2 font-weight-bold ">More Info</Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActorCard;