import React from 'react';
import "../../assets/mediaCard.sass"
import {Link} from "react-router-dom";
import Ratings from "./ratings"
import TmdbApiUrl from "./apiUrl";

const api = new TmdbApiUrl();

const MediaCard = ({mediaId, mediaType, posterPath, year, title, overview, ratingValue}) => {
  const cardStyle = {backgroundImage: posterPath ? (`url(${api.imageURL(1) + posterPath})`) : (`url(${require(`../../assets/images/imageUnavailable.jpg`)})`)};
  const ratingsStyle = {width: '3.3rem', position: 'absolute', top: '-1rem', right: '-1rem'};
  return (
    <div className="posterCard mediaCard">
      <div className="wrapper">
        <div className="background" style={cardStyle} />
        {
          mediaType === "person"
            ? (<Link to={`/person_details/${mediaId}`}  className="data ">
              <div className="content px-2 ">
                <div className="text-decoration-none">
                  <h2 className="title text-white">{title}</h2>
                </div>
              </div>
            </Link>)
            : (<Link to={`/media_details/${mediaType}/${mediaId}`} className="data shiftVertically">
              <div className="content px-2 py-3">
                {year ? <span className="date">{year.slice(0, 4)}</span> : null}
                <div className="text-decoration-none">
                  <h2 className="title text-white pb-2">{title}</h2>
                </div>
                <p className="text">{overview}</p>
                <div className="button text-decoration-none">
                  .... Read more</div>
              </div>
            </Link>)
        }
      </div>
      {mediaType !== "person"
        ? <div className="ratingsStyle" style={ratingsStyle}>
          <Ratings value={ratingValue} /></div>
        : null}
    </div>
  );
};

export default MediaCard;
