import React, {useEffect} from 'react';
import Navigation from "./partials/nav";
import "../assets/mediaDetails.sass"
import isoCodes from "./partials/ISO_639-1_codes_to_english";
import TmdbApiUrl from "./partials/apiUrl";
import Ratings from "./partials/ratings";
import Badge from "react-bootstrap/Badge";
import {Accordion, Card, Col, ListGroup, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {movieDetailsType} from "../actions/media/movieAction";


const Media_Details = (props) => {

  let api = new TmdbApiUrl();

  //set media status
  const mediaDetailsStatus = (status) => {
    switch (status) {
      case "Released":
        return (<Badge variant="success">Released</Badge>);
      case "In Production":
        return (<Badge variant="danger">In Production</Badge>);
      case "Upcoming":
        return (<Badge variant="warning">Upcoming</Badge>);
      default:
        return (<Badge variant="light">{status}</Badge>)
    }
  };

  //list directors
  const listOfDirectors = (credits = props.mediaCredits) => {
    const directorsAndTasks = [];
    if (credits.id) {
      const directorsAndTasksProperties = [];
      credits.crew
        .filter(el => el.job === `Director`)
        .map(eachObj => directorsAndTasksProperties.push(credits.crew.filter(elm => elm.id === eachObj.id)));
      directorsAndTasksProperties.map(eachJob => {
        const jobs = [];
        eachJob.map(el => jobs.push(el.job));
        return directorsAndTasks.push([eachJob[0].id, eachJob[0].name, eachJob[0].profile_path, jobs])
      })
    }
    return directorsAndTasks;
  };

  useEffect(() => {
    props.fetchMediaDetails();
    props.fetchMediaVideos();
    props.fetchMediaCredits();
    props.fetchMediaReviews();
    document.title = `MTB: ${props.mediaDetails.title || props.mediaDetails.name} (${props.mediaDetails.id ? ((props.mediaDetails.release_date || props.mediaDetails.first_air_date).slice(0, 4)):``})`;
  }, [props.mediaDetails]);

  return (
    <div className="mediaDiv">
      <Navigation />
      {
        props.mediaDetails.id
          ? <div className="container-fluid m-0 p-0 ">

            {/*  Brief  */}
            <div id="briefDetails">
              {/*backdrop image*/}
              <div className=" " style={{
                backgroundImage: `url(${api.imageURL(0)}${props.mediaDetails.backdrop_path})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                filter: `brightness(30%) blur(5px) contrast(1)`,
                position: `absolute`,
                top: `-0.3rem`,
                height: `100.5%`,
                width: `100%`
              }} />
              <div className="container briefDetailsContainer">
                <div className="row justify-content-center">

                  {/*poster */}
                  <div className="poster col col-3">
                    <div className="p-4 m-4 " style={{
                      width: "16.7rem",
                      height: "25rem",
                      backgroundImage: `url(${api.imageURL(0)}${props.mediaDetails.poster_path})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "0.5rem",
                      boxShadow: "0rem 0rem 1rem 0.2rem rgb(1,1,1,1)"
                    }} />
                  </div>

                  {/*details */}
                  <div className="details m-2 pl-5 col-md-8">
                    <div className="d-flex flex-column justify-content-start text-white ">

                      {/*media title */}
                      <div className=" pt-2 px-2 text-capitalize font-weight-bolder mt-1">
                        <h1>
                          {/*title/date */}
                          {props.mediaDetails.title} ({props.mediaDetails.release_date.slice(0, 4)})
                        </h1>
                      </div>
                      {/*media tag line */}
                      <div className="mediaTagLine ml-2 pb-1 container row">
                        <div className=" col-3 pl-0 ratingDiv">
                          <Ratings value={props.mediaDetails.vote_average} />
                        </div>
                        <h5 className=" col-auto align-self-center text-white-50 pl-0">
                          <em>{props.mediaDetails.tagline}</em>
                        </h5>
                      </div>
                      {/*genre */}
                      <div className=" d-flex justify-content-start flex-wrap px-2">

                        {/*if media genre is adult show red pill button */}
                        {props.mediaDetails.adult
                          ? <Link className=" m-2 btn btn-danger btn-sm text-uppercase font-weight-bold" to="#"
                                  role="button">
                            adult
                          </Link>
                          : null}
                        {/*media genres */}
                        {props.mediaDetails.genres.length > 0
                          ? props.mediaDetails.genres.map(genre => (
                            <Link className="m-2 btn btn-dark btn-sm text-uppercase font-weight-bold" to="#"
                                  role="button">
                              {genre.name}
                            </Link>
                          ))
                          : null}
                      </div>

                      {/*overview */}
                      <div className="mediaOverview text-bolder ml-4 pt-3">
                        <h4>Overview</h4>
                      </div>

                      {/*summary*/}
                      <div className="p-1 ml-4 mediaSummary ">
                        <p>{props.mediaDetails.overview}</p>
                      </div>

                      <div className="ml-4 mt-2">
                        <h4>Featured</h4>

                        {/*Crew*/}
                        <h6 className="mb-0 pl-2 mt-3">Crew</h6>
                        <div className="cast pl-2 d-flex justify-content-start flex-wrap">
                          {/*filter director name from crew array*/}
                          {props.mediaCredits.id
                            ? listOfDirectors().map(each => (
                              <Link to={`/person_details/${each[0]}`}>
                                <div className="card-meta--container p-2 align-self-center">
                                  {/*person avatar */}
                                  <div className="card-meta--avatar rounded-circle"
                                       style={{background: `url(${api.imageURL(0)}${each[2]}) center/cover`}}>
                                  </div>

                                  {/*person details */}
                                  <div className="card-meta--title">
                                    <h3 className="card-meta--name m-0">

                                      {/*person name */}
                                      {each[1]}</h3>
                                    <div className="card-meta--character">

                                      {/*filters all jobs of the director*/}
                                      {each[3].join(" / ")}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))
                            : null}
                        </div>

                        {/*Cast */}
                        <h6 className="mb-0 pl-2 mt-3">Cast</h6>
                        <div>
                          <div className="cast pl-2 d-flex justify-content-start flex-wrap">
                            {
                              props.mediaCredits.id
                                ? props.mediaCredits.cast.slice(0, 3).map(el => (
                                  <Link to={`/person_details/${el.id}`}>
                                    {/*person avatar */}
                                    <div className="card-meta--container p-2 align-self-center">
                                      <div className="card-meta--avatar rounded-circle"
                                           style={{background: `url(${api.imageURL(0)}${el.profile_path}) center/cover`}}>
                                      </div>
                                      {/*person details */}
                                      <div className="card-meta--title">
                                        <h3 className="card-meta--name m-0">
                                          {/*person name */}
                                          {el.name}
                                        </h3>
                                        <div className="card-meta--character">
                                          {/*person character name in media */}
                                          {el.character}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))
                                : null
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*videos details*/}
            {props.mediaVideos.id
              ? props.mediaVideos.results.length > 0
                ? (<div className="videos ">
                  <h2 className="container m-0 py-4 px-4 text-white ">Related Videos</h2>
                  <div className="trailers d-flex justify-content-start">
                    {/* each video */}
                    {props.mediaVideos.results.map(video => (
                      <div className="px-3 pb-4">
                        <div className="m-0 videoThumbnail">
                          <img className="videoImage " src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                               alt={video.name} />
                          {/*Button trigger modal */}
                          <button type="button" className="playButton" data-toggle="modal"
                                  data-target="#myVideoModal" />
                        </div>
                        <p className="text-white-50 pl-2 pt-1 trailersText">{video.type}: {video.name}</p>
                      </div>
                    ))}

                    {/*Modal*/}
                    <div className="modal fade" id="myVideoModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header pt-2 pb-1">
                            <h5 className="modal-title text-truncate text-white" id="exampleModalLongTitle">modal
                                                                                                            text</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body p-0">
                            <iframe id="cartoonVideo" width="798" height="500"
                                    src="https://www.youtube.com/embed/YE7VzlLtp-4"
                                    allowFullScreen />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
                : null
              : null}

            {/*/!*  details*!/*/}
            <div className="container-fluid row p-0 m-0 pb-5 justify-content-around">
              {/*details-- Status*/}
              <div className="detailsStatus col-3 order-2 m-3 pb-2 ">
                <div className="text-white-50  container m-auto">
                  <div className="mt-4">
                    <h5 className="font-weight-light headText"><em>Status</em></h5>
                    <div>
                      <h4>{mediaDetailsStatus(props.mediaDetails.status)}</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText"><em> Runtime</em></h5>
                    <div className="pt-1">
                      <p>{props.mediaDetails.runtime} mins</p>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText"><em> Original Title</em></h5>
                    <div className="pt-1">
                      <p>{props.mediaDetails.original_title}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText"><em> Original Lang</em></h5>
                    <div className="pt-1">
                      {isoCodes
                        .filter(each => each.code === props.mediaDetails.original_language)
                        .map(el => (
                          <p>{el.English}</p>
                        ))}
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText"><em> Budget</em></h5>
                    <div className="pt-1">
                      {props.mediaDetails.budget === 0
                        ? <p className="text-white-50">-</p>
                        : <p>$ {props.mediaDetails.budget.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2)}</p>
                      }
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText"><em> Revenue</em></h5>
                    <div className="pt-1">
                      {props.mediaDetails.revenue === 0
                        ? <p className="text-white-50">-</p>
                        :
                        <p>$ {props.mediaDetails.revenue.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2)}</p>
                      }
                    </div>
                  </div>
                  <hr />
                </div>

                {/* external links*/}
                <div className="ml-3 ">
                  {props.mediaDetails.homepage
                    ? (<div className="my-2">
                      <a href={props.mediaDetails.homepage} rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/home.png")} alt="home" className="externalLink" /></a>
                    </div>)
                    : null}
                  {props.mediaDetails.imdb_id
                    ? (<div className="my-2">
                      <a href={`https://www.imdb.com/name/${props.mediaDetails.imdb_id}/?ref_=nv_sr_srsg_0`}
                         rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/imdb.png")} alt="imdb" className="externalLink" /></a>
                    </div>)
                    : null}
                  <div className="my-2">
                    <Link to="#">
                      <img src={require("../assets/images/insta.png")} alt="insta" className="externalLink" /></Link>
                  </div>
                  <div className="my-2">
                    <Link to="#">
                      <img src={require("../assets/images/twitr.png")} alt="twtr" className="externalLink" /></Link>
                  </div>
                  <div className="my-2">
                    <Link to="#">
                      <img src={require("../assets/images/fbk.png")} alt="fk" className="externalLink" /></Link>
                  </div>
                </div>
              </div>
              {/*details-- Cast / Crew / Reviews  */}
              <div className="CrewCast col order-1 p-0 mt-5">
                {/*crew and cast */}
                {props.mediaCredits.id
                  ? (<Tab.Container id="list-group-tabs-example" defaultActiveKey="#castTab">
                    {/*crew and cast tab*/}
                    <div className="justify-content-between tabCrewCast">
                      <ListGroup horizontal={true} className="text-center font-weight-bold">
                        <Col className="p-0 m-0 mx-2">
                          <ListGroup.Item action href="#castTab" variant={"tiber"} className="listTab shadow ">
                            Cast
                          </ListGroup.Item></Col>
                        <Col className="p-0 m-0 mx-2">
                          <ListGroup.Item action href="#crewTab" variant={"tiber"} className="listTab shadow ">
                            Crew
                          </ListGroup.Item></Col>
                      </ListGroup>
                    </div>
                    <div className="w-100 " />
                    {/*crew and cast data*/}
                    <div className="justify-content-start">
                      <Tab.Content className="mt-2 ">
                        <Tab.Pane eventKey="#castTab">
                          <div className="tabContentCrewCast tab-pane show active"
                               aria-labelledby="list-cast-list">
                            <div className="castCrewDiv">
                              <div className="m-0 p-0 py-2 d-flex">

                                {/*each cast card */}
                                {props.mediaCredits.cast.map(cast => (
                                  <Link to={`/person_details/${cast.id}`}>
                                    <div className="crewCastBtn text-white mx-2 font-weight-bold">

                                      {/*cast card cast image*/}
                                      <img src={cast.profile_path
                                        ? `${api.imageURL(0)}${cast.profile_path}`
                                        : `${require(`../assets/images/imageUnavailable.jpg`)}`}
                                           className="imageCrewCast" alt={cast.name} />

                                      {/*cast details */}
                                      <div className=" mt-3 ">
                                        <div className="m-1 pl-1 text-truncate nameCrewCast">
                                          {/*cast name */}
                                          {cast.name}
                                        </div>
                                        <div className="m-1 pl-1 pb-1 text-truncate jobCrewCast">
                                          {/*cast character name */}
                                          {cast.character}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#crewTab">
                          <div className="tabContentCrewCast tab-pane"
                               aria-labelledby="list-crew-list">
                            <div className="crew castCrewDiv">
                              <div className="m-0 p-0 py-2 d-flex">

                                {/*each crew card */}
                                {props.mediaCredits.crew.map(crew => (
                                  <Link to={`/person_details/${crew.id}`}>
                                    <div className="crewCastBtn text-white mx-2 font-weight-bold">

                                      {/*crew card crew image*/}
                                      <img src={crew.profile_path
                                        ? `${api.imageURL(0)}${crew.profile_path}`
                                        : `${require(`../assets/images/imageUnavailable.jpg`)}`}
                                           className="imageCrewCast" alt={crew.name} />

                                      {/*crew details */}
                                      <div className=" mt-3 ">
                                        <div className="m-1 pl-1 text-truncate nameCrewCast">
                                          {/*crew name */}
                                          {crew.name}
                                        </div>
                                        <div className="m-1 pl-1 pb-1 text-truncate jobCrewCast">
                                          {/*crew job */}
                                          {crew.job}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                                {/*}) */}
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>)
                  : null}
                {/*   Reviews*/}
                {props.mediaReviews.id
                  ? (<Accordion className="mt-4 mx-auto reviews">
                    <Card className="text-center text-white font-weight-bold shadow-sm reviewsHead">
                      <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2">
                        Reviews
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="reviewsBody ">
                          <Accordion defaultActiveKey="">
                            {props.mediaReviews.results
                              .filter((review, reviewIndex, reviewsArray) => (
                                (reviewIndex !== (reviewsArray.length - 1))
                                  ? review.id !== reviewsArray[reviewIndex + 1].id
                                  : null
                              ))
                              .map(review => (
                                <Card className="reviewsCardHead border-0 font-weight-light">
                                  <Accordion.Toggle as={Card.Header} eventKey={`${review.id}`}>
                                    {review.author}
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey={`${review.id}`}>
                                    <Card.Body className="reviewsCardBody font-weight-normal">
                                      {review.content}
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              ))}
                          </Accordion>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>)
                  : null}
              </div>
            </div>

          </div>
          : null
      }
    </div>)
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMediaDetails: () => dispatch(movieDetailsType(1, ownProps.match.params.mediaId)),
    fetchMediaVideos: () => dispatch(movieDetailsType(2, ownProps.match.params.mediaId)),
    fetchMediaCredits: () => dispatch(movieDetailsType(3, ownProps.match.params.mediaId)),
    fetchMediaReviews: () => dispatch(movieDetailsType(4, ownProps.match.params.mediaId)),
  }
};

const mapStateToProps = (state) => {
  return {
    mediaDetails: state.Movie.movieDetails.movie,
    mediaVideos: state.Movie.movieDetails.videos,
    mediaCredits: state.Movie.movieDetails.credits,
    mediaReviews: state.Movie.movieDetails.reviews,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Media_Details);