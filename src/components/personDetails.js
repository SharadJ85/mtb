import React, {useEffect} from 'react';
import Navigation from "./partials/nav";
import "../assets/personDetails.sass"
import defaultImage from "../assets/images/imageUnavailable.jpg"
import {personDetails} from "../actions/media/personAction";
import {connect} from "react-redux";
import TmdbApiUrl from "./partials/apiUrl";
import {Fade} from "react-reveal";
import {Link} from "react-router-dom";
import LoadingSpinner from "./partials/loadingSpinner";
import Ratings from "./partials/ratings";


const Person_Details = ({fetchPersonDetails, fetchPersonKnownFor, fetchPersonExternalIds, person, knownFor, externalIds}) => {
  let api = new TmdbApiUrl();
  useEffect(() => {
    fetchPersonDetails();
    fetchPersonKnownFor();
    fetchPersonExternalIds();
    document.title = `MTB: ${person.name ? person.name : ``}`
  }, [person.name]);
  const backgroundStyle = {backgroundColor: "#02131b"};
  return (

    <div style={backgroundStyle}>
      <Navigation />
      <div className="mainActorsDiv">
        <div id="actorDetails" className="actorDetail container-fluid row justify-content-center">
          {
            person.id
              ? <div className="container row">
                <div className="poster col col-3">
                  <img className=" poster " src={`${api.imageURL(1)}${person.profile_path || defaultImage}`}
                       alt={person.name} />
                </div>
                <div className="details m-2 pl-3 col-md-8">
                  <div className="pt-1 px-2 text-capitalize font-weight-light mt-1">
                    <h1>{person.name}</h1>
                  </div>
                  <div className="ml-4 pt-2">
                    <h4 className="text-info">{person.known_for_department}</h4>
                    <h5 className="mt-4">Place of birth: {person.place_of_birth}</h5>
                    {person.birthday ? <h5>Birthday: {person.birthday.replace(/-/g, " / ")}</h5> : null}
                    {person.deathday ? <h5>Death day: {person.deathday.replace(/-/g, " / ")}</h5> : null}
                    <h5 className="mt-4">Popularity: {person.popularity}</h5>
                    {person.also_known_as.length > 0
                      ? <h5>Also known as:
                        <p>{person.also_known_as.join(" , ")}</p></h5> : null}
                  </div>
                  <div className="text-bolder ml-4 pt-3">
                    {person.biography ? <h4>Biography</h4> : null}
                  </div>
                  <div className="p-1 ml-4 biography font-weight-light">
                    <p>{person.biography}</p>
                  </div>

                  {/*external links*/}
                  <div className="container py-2 d-flex flex-wrap">
                    {externalIds.imdb_id
                      ? <div>
                        <a className="m-2 p-2 "
                           href={`https://www.imdb.com/name/${externalIds.imdb_id}/?ref_=nv_sr_srsg_0`}>
                          <button type="button" className="btn btn-social btn-imdb"><strong>IMDB</strong></button>
                        </a>
                      </div> : null}
                    {externalIds.instagram_id
                      ? <div>
                        <a className="m-2 p-2 " href={`https://www.instagram.com/${externalIds.instagram_id}`}>
                          <button type="button" className="btn btn-social btn-insta"><strong>INSTAGRAM</strong></button>
                        </a>
                      </div> : null}
                    {externalIds.twitter_id
                      ? <div>
                        <a className="m-2 p-2 " href={`https://twitter.com/${externalIds.twitter_id}`}>
                          <button type="button" className="btn btn-social btn-twitter"><strong>TWITTER</strong></button>
                        </a>
                      </div> : null}
                    {externalIds.facebook_id
                      ? <div>
                        <a className="m-2 p-2" href={`https://www.facebook.com/${externalIds.facebook_id}`}>
                          <button type="button" className="btn btn-social btn-facebook"><strong>FACEBOOK</strong></button>
                        </a>
                      </div> : null}
                  </div>

                  {/*  known for*/}
                  {knownFor.id
                    ? knownFor.results.length > 0
                      ? (<div className="my-4 mediaListRelatedToMedia">
                        <h4 className="m-0 mb-1 ml-3 mt-2 font-italic font-weight-lighter text-">
                          Known For </h4>
                        <div className=" mediaListRelatedToMediaDiv">
                          <div className="d-inline-flex">
                            <Fade>
                              {knownFor.results.map(each => (
                                <Link to={`/media_details/${each.media_type}/${each.media.id}`}>
                                  <div className="mediaListRelatedToMediaContainer p-0 m-1">
                                    <img className="mediaListRelatedToMediaImage"
                                         src={each.media.backdrop_path
                                           ? `${api.imageURL(1)}${each.media.backdrop_path}`
                                           : require("../assets/images/ImageUnavailableLandscape.png")}
                                         alt={each.media.title || each.media.name} />
                                    <div className="  pl-0 relatedMediaRating">
                                      <Ratings value={each.media.vote_average} />
                                    </div>
                                    <h6 className="mediaListRelatedToMediaTitle text-white px-3 py-1 w-100">
                                      {each.media.title || each.media.name} ({each.media[each.media_type === "movie" ? "release_date" : "first_air_date"].slice(0, 4)})</h6>
                                  </div>
                                </Link>
                              ))}
                              <div />
                            </Fade>
                          </div>
                        </div>
                      </div>)
                      : <div />
                    : <div />}
                </div>
              </div>
              : (
                <div className="container text-center" style={{padding: "10rem"}}>
                  <Fade duration={400}>
                    <LoadingSpinner />
                  </Fade>
                </div>
              )
          }
        </div>
        <div className="blueBox" />
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const ID = ownProps.match.params.actorId;
  return {
    fetchPersonDetails: () => dispatch(personDetails(1, ID)),
    fetchPersonKnownFor: () => dispatch(personDetails(2, ID)),
    fetchPersonExternalIds: () => dispatch(personDetails(3, ID)),
  }
};

const mapStateToProps = (state) => {
  return {
    person: state.Person.personDetails.person,
    knownFor: state.Person.personDetails.knownFor,
    externalIds: state.Person.personDetails.externalIds,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Person_Details);