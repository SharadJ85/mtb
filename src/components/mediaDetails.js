import React, {useEffect, useRef, useState} from 'react';
import Navigation from "./partials/nav";
import apiUrl from "./partials/apiUrl";
import Ratings from "./partials/ratings";
import {Link} from "react-router-dom";
import "../assets/mediaDetails.sass"
import Badge from "react-bootstrap/Badge";
import {Accordion, Card, Col, ListGroup, Row, Tab} from "react-bootstrap";


const Media_Details = () => {


  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [height]);

  const jobs = [];

  return (
    <div className="mediaDiv">
      <Navigation />

      {/*  Brief  */}
      <div>
        {/*backdrop image*/}
        <div id="backDropImage">
          <div className="mt-2 pb-1" style={{
            backgroundImage: `url(${apiUrl.imageURL(0)}/5iidzov8DrsSyZdefeo7jBLDNUW.jpg)`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            filter: `brightness(30%) blur(5px) contrast(1)`,
            position: `relative`,
            minHeight: `${height + 85}px`
          }} />
        </div>

        <div id="briefDetails" ref={ref}>
          <div className="container">
            <div className="row ">

              {/*poster */}
              <div className="poster col col-3">
                <div className="p-4 m-4 " style={{
                  width: "267px",
                  height: "400px",
                  backgroundImage: `url(${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "2px"
                }} />
              </div>

              {/*details */}
              <div className="details m-2 pl-5 col-md-8">
                <div className="d-flex flex-column justify-content-start text-white ">

                  {/*media title */}
                  <div className=" pt-2 px-2 text-capitalize font-weight-bolder mt-1">
                    <h1>
                      {/*title/date */}
                      Aquaman (2018)
                    </h1>
                  </div>
                  {/*media tag line */}
                  <div className="mediaTagLine ml-2 pb-1 container row">
                    <div className=" col-3 pl-0 ratingDiv">
                      <Ratings value={7.5} />
                    </div>
                    <h5 className=" col-auto align-self-center pl-0"><em>Home Is Calling</em>
                    </h5>
                  </div>
                  {/*genre */}
                  <div className=" d-flex justify-content-start flex-wrap px-2">

                    {/*if media genre is adult show red pill button */}
                    <Link className=" m-2 btn btn-danger btn-sm text-uppercase font-weight-bold" to="#"
                          role="button">
                      adult
                    </Link>
                    {/*media genres */}

                    <Link className="m-2 btn btn-dark btn-sm text-uppercase font-weight-bold" to="#"
                          role="button">
                      Action
                    </Link>
                  </div>

                  {/*overview */}
                  <div className="mediaOverview text-bolder ml-4 pt-3">
                    <h4>Overview</h4>
                  </div>

                  {/*summary*/}
                  <div className="p-1 ml-4 mediaSummary ">
                    <p>
                      Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled
                      by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining
                      oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human,
                      half-Atlantean brother and true heir to the throne.
                    </p>
                  </div>

                  <div className="ml-4 mt-2">
                    <h4>Featured</h4>

                    {/*Crew*/}
                    <h6 className="mb-0">Crew</h6>
                    <div className="cast d-flex justify-content-start flex-wrap">
                      {/*filter director name from crew array*/}

                      <div className="card-meta--container px-2 pb-2 align-self-center">
                        {/*person avatar */}
                        <div className="card-meta--avatar rounded-circle" style={ {background: `url(${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg) center/cover`}}>
                        </div>

                        {/*person details */}
                        <div className="card-meta--title">
                          <h3 className="card-meta--name">J.J. Abrams</h3>
                          <div className="card-meta--character">

                            {/*filters all jobs of the director*/}
                            {/*{creditsData.crew.filter(person => person.name === el.name).forEach(p => jobs.push(p.job))}*/}
                            Screenplay / Director / Producer / Story
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*Cast */}
                    <h6 className="mb-0">Cast</h6>
                    <div>
                      <div className="cast d-flex justify-content-start flex-wrap">
                        {/*first 3 persons in the casts list  */}
                        {/*person avatar */}
                        <div className="card-meta--container px-2 pb-2 align-self-center">
                          <div className="card-meta--avatar rounded-circle"
                               style={ {background: `url(${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg) center/cover`}}>
                          </div>

                          {/*person details */}
                          <div className="card-meta--title">
                            <h3 className="card-meta--name">El Casino</h3>
                            <div className="card-meta--character">
                              {/*person character name in media */}
                              Jesse Pink
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*videos details*/}
      <div className="videos ">

        <h2 className="container pb-2 pt-4 ml-5 text-white ">Related Videos</h2>
        <div className="trailers pt-1 d-flex justify-content-start">
          {/*videoInfo.forEach(el=>{ */}
          {/*1*/}
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          {/*2*/}
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>
          <div className="px-3 pb-4">
            <div className="m-0 videoThumbnail">
              <img className="videoImage " src="https://img.youtube.com/vi/WDkg3h8PCVU/0.jpg" alt="<% el.name %>" />
              {/*Button trigger modal */}
              <button type="button" className="playButton" data-toggle="modal"
                      data-target="#myVideoModal" />
            </div>
            <p className="text-white-50 pl-2 pt-1 trailersText">TRAILER text</p>
          </div>

          {/*Modal*/}
          <div className="modal fade" id="myVideoModal" tabIndex="-1" role="dialog"
               aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header pt-2 pb-1">
                  <h5 className="modal-title text-truncate text-white" id="exampleModalLongTitle">modal text</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body p-0">
                  <iframe id="cartoonVideo" width="798" height="500" src="https://www.youtube.com/embed/YE7VzlLtp-4"
                          allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  details*/}
      <div className="container-fluid row p-0 m-0">
        {/*details-- Status*/}
        <div className="detailsStatus col-3 order-2 m-3">
          <div className="text-white-50  container m-auto">
            <div className="mt-4">
              <h5 className="font-weight-light headText"><em> Status</em></h5>
              <div>
                <h4><Badge variant="success">Released</Badge><Badge variant="danger">Upcoming</Badge></h4>
              </div>
            </div>
            <hr />
            <div className="mt-2 font-weight-bold pt-1">
              <h5 className="font-weight-light headText"><em> Runtime</em></h5>
              <div className="pt-1">
                <p>144 mins</p>
              </div>
            </div>
            <hr />
            <div className="mt-2 font-weight-bold pt-1">
              <h5 className="font-weight-light headText"><em> Original Lang</em></h5>
              <div className="pt-1">
                <p>ENGLISH</p>
              </div>
            </div>
            <hr />
            <div className="mt-2 font-weight-bold pt-1">
              <h5 className="font-weight-light headText"><em> Budget</em></h5>
              <div className="pt-1">
                <p>$ 160,000,000</p>
              </div>
            </div>
            <hr />
            <div className="mt-2 font-weight-bold pt-1">
              <h5 className="font-weight-light headText"><em> Revenue</em></h5>
              <div className="pt-1">
                <p>$ 1,143,689,193</p>
              </div>
            </div>
            <hr />
          </div>

          {/* external links*/}
          <div className="ml-3 ">
            <div className="my-2">
              <Link to="#">
                <img src={require("../assets/images/home.png")} alt="home" className="externalLink" /></Link>
            </div>
            <div className="my-2">
              <Link to="#">
                <img src={require("../assets/images/imdb.png")} alt="imdb" className="externalLink" /></Link>
            </div>
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
        <div className="CrewCast col order-1  mt-5">
          {/*crew and cast */}
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#castTab">
            {/*crew and cast tab*/}
            <Row className="justify-content-center tabCrewCast">
              <ListGroup horizontal={true} className="text-center font-weight-bold">
                <Col className="p-0 m-0 mx-2">
                  <ListGroup.Item action href="#castTab" variant={"info"} className="listTab shadow ">
                    Cast
                  </ListGroup.Item></Col>
                <Col className="p-0 m-0 mx-2">
                  <ListGroup.Item action href="#crewTab" variant={"info"} className="listTab shadow ">
                    Crew
                  </ListGroup.Item></Col>
              </ListGroup>
            </Row>
            <div className="w-100 " />
            {/*crew and cast data*/}
            <Row className="justify-content-center">
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="#castTab">
                  <div className="tabContentCrewCast tab-pane show active"
                       aria-labelledby="list-cast-list">
                    <div className="castCrewDiv">
                      <div className="m-0 p-0 py-2 d-flex">

                        {/*each cast card */}
                        {/*creditsData.cast.forEach(el=>{ */}
                        {/*cast card background color*/}
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/*}) */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#crewTab">
                  <div className="tabContentCrewCast tab-pane"
                       aria-labelledby="list-crew-list">
                    <div className="crew castCrewDiv">
                      <div className="m-0 p-0 py-2 d-flex">

                        {/*each cast card */}
                        {/*creditsData.cast.forEach(el=>{ */}
                        {/*cast card background color*/}
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#">
                          <div className="btnCrewCast text-white mx-2 font-weight-bold">

                            {/*cast card cast image*/}
                            <img src={`${apiUrl.imageURL(0)}/rNQompSTfAG5O2iXSH8Phay4L45.jpg`}
                                 className="imageCrewCast" />

                            {/*cast details */}
                            <div className=" mt-3 ">
                              <div className="m-1 pl-1 text-truncate nameCrewCast">
                                {/*cast name */}
                                robert
                              </div>
                              <div className="m-1 pl-1 text-truncate jobCrewCast">
                                {/*cast character name */}
                                tony
                              </div>
                            </div>
                          </div>
                        </Link>

                        {/*}) */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
          {/*   Reviews*/}
          <Accordion className="mt-4 mx-auto reviews">
            <Card className="text-center text-white font-weight-bold bg-dark">
              <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2">
                Reviews
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="reviewsBody">
                  <Accordion defaultActiveKey="">
                    <Card className="reviewsCardHead font-weight-light">
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        Tom
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className="reviewsCardBody font-weight-normal">Hello! I'm the body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="reviewsCardHead font-weight-light">
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        Dick
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className="reviewsCardBody font-weight-normal">Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

      </div>

    </div>)
};

export default Media_Details;