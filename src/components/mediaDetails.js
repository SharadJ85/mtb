import React, {useEffect, useState} from 'react';
import "../assets/mediaDetails.sass"
import Navigation from "./partials/nav";
import isoCodes from "./partials/ISO_639-1_codes_to_english";
import TmdbApiUrl from "./partials/apiUrl";
import Ratings from "./partials/ratings";
import LoadingSpinner from "./partials/loadingSpinner";
import Badge from "react-bootstrap/Badge";
import {Accordion, Button, Card, Col, ListGroup, Modal, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {movieDetailsType} from "../actions/media/movieAction";
import {tvDetailsType} from "../actions/media/tvAction";
import {Fade} from "react-reveal";


const Media_Details = (props) => {
  //set TmdbApiUrl class
  let api = new TmdbApiUrl();
  //set page title
  const title = () => {
    if (props.mediaDetails.id) {
      return `MTB: ${props.mediaDetails.title || props.mediaDetails.name} (${(props.mediaDetails[props.match.params.media === "movie" ? "release_date" : "first_air_date"]).slice(0, 4)})`
    } else {
      return ``
    }
  };
  //list directors
  const listOfDirectors = (media = props.match.params.media) => {
    const directorsAndTasks = [];
    if (props.mediaCredits.id && media === "movie") {
      const {crew} = props.mediaCredits;
      const directorsAndTasksProperties = [];
      crew
        .filter(el => el.job === `Director`)
        .map(eachObj => directorsAndTasksProperties.push(crew.filter(elm => elm.id === eachObj.id)));
      directorsAndTasksProperties.map(eachJob => {
        const jobs = [];
        eachJob.map(el => jobs.push(el.job));
        return directorsAndTasks.push([eachJob[0].id, eachJob[0].name, eachJob[0].profile_path, jobs])
      })
    } else if (props.mediaDetails.id && media === "tv") {
      const jobs = ["Creator"];
      props.mediaDetails.created_by.map(each => directorsAndTasks.push([each.id, each.name, each.profile_path, jobs]))
    }
    return directorsAndTasks;
  };
  //set media status
  const mediaDetailsStatus = (status) => {
    switch (true) {
      case (status === "Released") || (status === "Ended"):
        return (<Badge variant="success">{status}</Badge>);
      case status === "In Production":
        return (<Badge variant="danger">{status}</Badge>);
      case (status === "Upcoming") || (status === "Returning Series"):
        return (<Badge variant="warning">{status}</Badge>);
      default:
        return (<Badge variant="light">{status}</Badge>)
    }
  };
  //set video modal
  const [modal, setModal] = useState({isOn: false, title: null, sourceKey: null, id: null});
  //
  //
  useEffect(() => {
    props.fetchMediaDetails();
    props.fetchMediaVideos();
    props.fetchMediaCredits();
    props.fetchMediaReviews();
    props.fetchMediaExternalIds();
    props.fetchMediaKeywords();
    props.fetchMediaRecommended();
    props.fetchMediaSimilar();
    document.title = title();
  }, [props.mediaDetails.id, props.match.params.mediaId]);

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
                          {props.mediaDetails.title || props.mediaDetails.name} ({props.mediaDetails[props.match.params.media === "movie" ? "release_date" : "first_air_date"].slice(0, 4)})
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
                          ? <Badge variant={`danger`}
                                   className=" text-uppercase font-weight-bold px-2 py-2 m-2">
                            adult
                          </Badge>
                          : null}
                        {/*media genres */}
                        {props.mediaDetails.genres.length > 0
                          ? props.mediaDetails.genres.map(genre => (
                            <Badge variant={`dark`}
                                   className=" text-uppercase font-weight-bold px-2 py-2 m-2">{genre.name}</Badge>
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
                                  <div
                                    className="card-meta--avatar rounded-circle text-uppercase text-white d-flex justify-content-center"
                                    style={{
                                      background: `url(${api.imageURL(0)}${each[2]}) center/cover`,
                                      backgroundColor: "#04000e"
                                    }}>
                                    {each[2] ? null : each[1].slice(0, 1)}
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
                                      <div
                                        className="card-meta--avatar rounded-circle text-uppercase text-white d-flex justify-content-center"
                                        style={{
                                          background: `url(${api.imageURL(0)}${el.profile_path}) center/cover`,
                                          backgroundColor: "#04000e"
                                        }}>
                                        {el.profile_path ? null : el.name.slice(0, 1)}
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
                  {/*header*/}
                  <h2 className="container m-0 py-4 px-4 text-white ">Related Videos</h2>
                  {/*video thumbnails*/}
                  <div className="trailers d-flex justify-content-start">
                    {/* each video */}
                    {props.mediaVideos.results.map(video => (
                      <div className="px-3 pb-4">
                        <div className="m-0 videoThumbnail">
                          <img className="videoImage " src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                               alt={video.name} />
                          {/*Button trigger modal */}
                          <Button type="button" className="playButton" data-toggle="modal"
                                  data-target="#myVideoModal"
                                  onClick={() => setModal({
                                    isOn: true,
                                    title: video.name,
                                    sourceKey: video.key,
                                    id: video.id
                                  })} />
                        </div>
                        <p className="text-white-50 pl-2 pt-1 trailersText">{video.type}: {video.name}</p>
                      </div>
                    ))}
                  </div>
                  {/*Modal*/}
                  <div className="mainModal">
                    <Modal
                      dialogClassName="videoModal"
                      show={modal.isOn}
                      onHide={() => setModal({isOn: false, title: null, sourceKey: null, id: null})}
                      aria-labelledby="example-modal-sizes-title-lg"
                      style={{backgroundColor: "rgba(0,0,0,0.9)"}}>
                      <Modal.Header closeButton className="pt-2 px-3 p-0 border-0 text-white"
                                    style={{backgroundColor: "rgba(4,15,22,1)"}}>
                        <Modal.Title id="example-modal-sizes-title-lg" className="text-truncate w-100">
                          {modal.title}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="p-0 m-0 border-0 pt-2 px-2"
                                  style={{backgroundColor: "rgba(4,15,22,1)"}}>
                        <iframe className="border-0" id={`${modal.id}`} width="798" height="449"
                                title={modal.title}
                                src={`https://www.youtube.com/embed/${modal.sourceKey}`}
                                allowFullScreen />
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>)
                : null
              : null}

            {/*  details */}
            <div className="container-fluid row p-0 m-0 pb-5 justify-content-around">
              {/* details-- Status*/}
              <div className="detailsStatus col-3 order-2 m-3 pb-2 ">
                <div className="text-white-50  container m-auto">
                  <div className="mt-4">
                    <h5 className="font-weight-light headText text-capitalize"><em>Status</em></h5>
                    <div>
                      <h4>{mediaDetailsStatus(props.mediaDetails.status)}</h4>
                    </div>
                    <hr />
                  </div>
                  {props.mediaDetails.runtime
                    ? <div className="mt-2 font-weight-bold pt-1">
                      <h5 className="font-weight-light headText text-capitalize"><em> Runtime</em></h5>
                      <div className="pt-1">
                        <p>{props.mediaDetails.runtime} mins</p>
                      </div>
                      <hr />
                    </div>
                    : null}
                  {props.mediaDetails.number_of_seasons
                    ? <div className="mt-2 font-weight-bold pt-1">
                      <h5 className="font-weight-light headText text-capitalize"><em> seasons</em></h5>
                      <div className="pt-1">
                        <p>{props.mediaDetails.number_of_seasons}</p>
                      </div>
                      <hr />
                    </div>
                    : null}
                  {props.mediaDetails.number_of_episodes
                    ? <div className="mt-2 font-weight-bold pt-1">
                      <h5 className="font-weight-light headText text-capitalize"><em>episodes</em></h5>
                      <div className="pt-1">
                        <p>{props.mediaDetails.number_of_episodes}</p>
                      </div>
                      <hr />
                    </div>
                    : null}
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText text-capitalize"><em> Original Title</em></h5>
                    <div className="pt-1">
                      <p>{props.mediaDetails.original_title || props.mediaDetails.original_name}</p>
                    </div>
                    <hr />
                  </div>
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText text-capitalize"><em> Original Lang</em></h5>
                    <div className="pt-1">
                      {isoCodes
                        .filter(each => each.code === props.mediaDetails.original_language)
                        .map(el => (
                          <p>{el.English}</p>
                        ))}
                    </div>
                    <hr />
                  </div>
                  {props.mediaDetails.budget
                    ? <div className="mt-2 font-weight-bold pt-1">
                      <h5 className="font-weight-light headText text-capitalize"><em> Budget</em></h5>
                      <div className="pt-1">
                        {props.mediaDetails.budget === 0
                          ? <p className="text-white-50">-</p>
                          :
                          <p>$ {props.mediaDetails.budget.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2)}</p>}
                      </div>
                      <hr />
                    </div>
                    : null}
                  {props.mediaDetails.revenue
                    ? <div className="mt-2 font-weight-bold pt-1">
                      <h5 className="font-weight-light headText text-capitalize"><em> Revenue</em></h5>
                      <div className="pt-1">
                        {props.mediaDetails.revenue === 0
                          ? <p className="text-white-50">-</p>
                          :
                          <p>$ {props.mediaDetails.revenue.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2)}</p>}
                      </div>
                      <hr />
                    </div>
                    : null
                  }
                  <div className="mt-2 font-weight-bold pt-1">
                    <h5 className="font-weight-light headText text-capitalize"><em> Keywords</em></h5>
                    <div className="pt-1">
                      {props.mediaKeywords.id
                        ? props.mediaKeywords[props.match.params.media === "movie" ? "keywords" : "results"].length > 0
                          ?
                          <p> {props.mediaKeywords[props.match.params.media === "movie" ? "keywords" : "results"].map(keyword => (
                            <Badge variant={`light`} className="text-capitalize px-2 py-2 m-1">{keyword.name}</Badge>)
                          )}</p>
                          : <p className="text-white-50">-</p>
                        : null
                      }
                    </div>
                    <hr />
                  </div>
                </div>

                {/* external links*/}
                <div className="ml-3 mt-1">
                  <h5 className="font-weight-light headText my-2"><em> External Links</em></h5>
                  {props.mediaDetails.homepage
                    ? (<div className="my-2">
                      <a href={props.mediaDetails.homepage} rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/home.png")} alt="home" className="externalLink" /></a>
                    </div>)
                    : null}
                  {props.mediaExternalIds.imdb_id
                    ? (<div className="my-2">
                      <a href={`https://www.imdb.com/name/${props.mediaExternalIds.imdb_id}/?ref_=nv_sr_srsg_0`}
                         rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/imdb.png")} alt="imdb" className="externalLink" /></a>
                    </div>)
                    : null}
                  {props.mediaExternalIds.instagram_id
                    ? (<div className="my-2">
                      <a href={`https://www.instagram.com/${props.mediaExternalIds.instagram_id}`}
                         rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/insta.png")} alt="insta" className="externalLink" /></a>
                    </div>)
                    : null}
                  {props.mediaExternalIds.twitter_id
                    ? (<div className="my-2">
                      <a href={`https://twitter.com/${props.mediaExternalIds.twitter_id}`}
                         rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/twitr.png")} alt="twtr" className="externalLink" /></a>
                    </div>)
                    : null}
                  {props.mediaExternalIds.facebook_id
                    ? (<div className="my-2">
                      <a href={`https://www.facebook.com/${props.mediaExternalIds.facebook_id}`}
                         rel="noopener noreferrer" target="_blank">
                        <img src={require("../assets/images/fbk.png")} alt="fk" className="externalLink" /></a>
                    </div>)
                    : null}
                </div>
              </div>

              {/* details-- Cast / Crew / Reviews / recommendations / similar */}
              <div className="CrewCast col order-1 p-0 mt-4">

                {/* crew and cast */}
                {props.mediaCredits.id
                  ? (<div className="mt-5 mb-4">
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#castTab">
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
                    </Tab.Container></div>)
                  : null}

                {/* Reviews*/}
                {props.mediaReviews.id
                  ? (<Accordion className="mt-5 mb-4 mx-auto reviews">
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

                {/* recommendation */}
                {props.mediaRecommended.results
                  ? props.mediaRecommended.results.length > 0
                    ? (<div className="mt-5 mb-4 mediaListRelatedToMedia">
                      <h4 className="m-0 mb-1 ml-3 mt-2 font-italic font-weight-lighter text-">
                        Recommended {props.match.params.media}{props.match.params.media === `tv` ? ` shows` : `s`}</h4>
                      <div className=" mediaListRelatedToMediaDiv">
                        <div className="d-inline-flex">
                          <Fade>
                            {props.mediaRecommended.results.map(media => (
                              <Link to={`/media_details/${props.match.params.media}/${media.id}`}
                                    className="mediaListRelatedToMediaContainer">
                                <img className="mediaListRelatedToMediaImage m-1"
                                     src={media.backdrop_path ? `${api.imageURL(1)}${media.backdrop_path}` : require("../assets/images/ImageUnavailableLandscape.png")}
                                     alt={`data[el].title`} />
                                <h6 className="mediaListRelatedToMediaTitle text-white pl-3 py-1 mx-1">
                                  {media.title || media.name} ({media[props.match.params.media === "movie" ? "release_date" : "first_air_date"].slice(0, 4)})</h6>
                              </Link>
                            ))}
                          </Fade>
                        </div>
                      </div>
                    </div>)
                    : null
                  : null}

                {/* similar */}
                {props.mediaSimilar.results
                  ? props.mediaSimilar.results.length > 0
                    ? (<div className="mt-5 mb-4 mediaListRelatedToMedia">
                      <h4 className="m-0 mb-1 ml-3 mt-2 font-italic font-weight-lighter text-">
                        Similar {props.match.params.media}{props.match.params.media === `tv` ? ` shows` : `s`}</h4>
                      <div className=" mediaListRelatedToMediaDiv">
                        <div className="d-inline-flex">
                          <Fade>
                            {props.mediaSimilar.results.map(media => (
                              <Link to={`/media_details/${props.match.params.media}/${media.id}`}
                                    className="mediaListRelatedToMediaContainer">
                                <img className="mediaListRelatedToMediaImage m-1"
                                     src={media.backdrop_path ? `${api.imageURL(1)}${media.backdrop_path}` : require("../assets/images/ImageUnavailableLandscape.png")}
                                     alt={`data[el].title`} />
                                <h6 className="mediaListRelatedToMediaTitle text-white pl-3 py-1 mx-1">
                                  {media.title || media.name} ({media[props.match.params.media === "movie" ? "release_date" : "first_air_date"].slice(0, 4)})</h6>
                              </Link>
                            ))}
                          </Fade>
                        </div>
                      </div>
                    </div>)
                    : null
                  : null}
              </div>
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
    </div>);
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let ID = ownProps.match.params.mediaId;
  let media = ownProps.match.params.media;
  if (media === "movie") {
    return {
      fetchMediaDetails: () => dispatch(movieDetailsType(1, ID)),
      fetchMediaVideos: () => dispatch(movieDetailsType(2, ID)),
      fetchMediaCredits: () => dispatch(movieDetailsType(3, ID)),
      fetchMediaReviews: () => dispatch(movieDetailsType(4, ID)),
      fetchMediaExternalIds: () => dispatch(movieDetailsType(5, ID)),
      fetchMediaKeywords: () => dispatch(movieDetailsType(6, ID)),
      fetchMediaRecommended: () => dispatch(movieDetailsType(7, ID)),
      fetchMediaSimilar: () => dispatch(movieDetailsType(8, ID)),
    }
  } else if (media === "tv") {
    return {
      fetchMediaDetails: () => dispatch(tvDetailsType(1, ID)),
      fetchMediaVideos: () => dispatch(tvDetailsType(2, ID)),
      fetchMediaCredits: () => dispatch(tvDetailsType(3, ID)),
      fetchMediaReviews: () => dispatch(tvDetailsType(4, ID)),
      fetchMediaExternalIds: () => dispatch(tvDetailsType(5, ID)),
      fetchMediaKeywords: () => dispatch(tvDetailsType(6, ID)),
      fetchMediaRecommended: () => dispatch(tvDetailsType(7, ID)),
      fetchMediaSimilar: () => dispatch(tvDetailsType(8, ID)),
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  let media = ownProps.match.params.media;
  if (media === "movie") {
    return {
      mediaDetails: state.Movie.movieDetails.movie,
      mediaVideos: state.Movie.movieDetails.videos,
      mediaCredits: state.Movie.movieDetails.credits,
      mediaReviews: state.Movie.movieDetails.reviews,
      mediaExternalIds: state.Movie.movieDetails.externalIds,
      mediaKeywords: state.Movie.movieDetails.keywords,
      mediaRecommended: state.Movie.movieDetails.recommended,
      mediaSimilar: state.Movie.movieDetails.similar,
    }
  } else if (media === "tv") {
    return {
      mediaDetails: state.Tv.tvDetails.tv,
      mediaVideos: state.Tv.tvDetails.videos,
      mediaCredits: state.Tv.tvDetails.credits,
      mediaReviews: state.Tv.tvDetails.reviews,
      mediaExternalIds: state.Tv.tvDetails.externalIds,
      mediaKeywords: state.Tv.tvDetails.keywords,
      mediaRecommended: state.Tv.tvDetails.recommended,
      mediaSimilar: state.Tv.tvDetails.similar,
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Media_Details);