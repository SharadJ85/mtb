import React, {useEffect} from 'react';
import Navigation from "./partials/nav";
import "../assets/actorDetails.sass"
import defaultImage from "../assets/images/imageUnavailable.jpg"
import {personDetails} from "../actions/media/personAction";
import {connect} from "react-redux";
import TmdbApiUrl from "./partials/apiUrl";


const Actor_Details = ({fetchPersonDetails, person}) => {
  let api = new TmdbApiUrl();
  useEffect(() => {
    fetchPersonDetails();
  }, []);
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
                  {person.imdb_id
                    ? <div>
                      <a className="ml-5" href={`https://www.imdb.com/name/${person.imdb_id}/?ref_=nv_sr_srsg_0`}>
                        <button type="button" className="btn btn-warning"><strong>IMDB</strong></button>
                      </a>
                    </div> : null}
                </div>
              </div>
              : <div />
          }
        </div>
        <div className="blueBox" />
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPersonDetails: () => dispatch(personDetails(ownProps.match.params.actorId)),
  }
};

const mapStateToProps = (state) => {
  return {
    person: state.Person.personDetails,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor_Details);