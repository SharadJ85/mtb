import React from 'react';
import "../../assets/mediaCard.sass"
import {Link} from "react-router-dom";
import Ratings from "./ratings"
import apiUrl from "../apiUrl";

const MediaCard=(props)=> {
  const cardStyle= {backgroundImage:`url(${apiUrl.imageURL(1)}${props.posterPath})`};
  const ratingsStyle={width:'3.3rem',position:'absolute',top:'-1rem',right:'-1rem'};
  console.log('card');
  return (
        <div className="poster mediaCard">
          <div className="wrapper">
            <div className="background" style={cardStyle}>
            </div>
            <div className="data shiftVertically">
              <div className="content px-2 py-3">
                <span className="author">{props.year}</span>
                <Link to="/media_details/movie/mediaId" className="text-decoration-none">
                  <h2 className="title text-white pb-2">{props.title}</h2>
                </Link>
                <p className="text">{props.text}</p>
                <Link to="/media_details/movie/mediaId" className="button text-decoration-none">.... Read more</Link>
              </div>
            </div>
          </div>
          {props.ratingValue?
           (<div style={ratingsStyle}>
          <Ratings value={props.ratingValue}/>
          </div>):null
          }
        </div>
  );
};

export default MediaCard;