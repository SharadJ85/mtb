import React from "react";
import "../../assets/nav.sass"
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import mtb from '../../assets/images/mtb.png'
import {Link as RouterLink} from "react-router-dom";

const Navigation = () => {
  const navBarText={ color: '#00bce6'};
  return (
    <div className="fluid">
      <Navbar bg="dark" variant="dark" className="navDiv">
        <RouterLink to="/">
          <img src={mtb} alt="MTB" className="logo"/></RouterLink>
        <Nav className="mr-auto ml-2 childNavs">
          <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
            <Nav.Link href="#movies" style={navBarText}>Movies
            </Nav.Link>
            <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/movie/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
                <Nav.Link href="/media_list/movie/top_rated/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top rated
                </Nav.Link>
                <Nav.Link href="/media_list/movie/in_the_air/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3">in theaters
                </Nav.Link>
                <Nav.Link href="/media_list/movie/upcoming/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">upcoming
                </Nav.Link>
            </div>
          </div>
          <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
            <Nav.Link href="#tvShows" style={navBarText}>Tv shows
            </Nav.Link>
            <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/tv/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
                <Nav.Link href="/media_list/tv/top_rated/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top rated
                </Nav.Link>
                <Nav.Link href="/media_list/tv/on_the_air/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3 "> Now on air
                </Nav.Link>
                <Nav.Link href="/media_list/tv/airing_today/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">Airing today
                </Nav.Link>
            </div>
          </div>
            <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
              <Nav.Link href="#actors" style={navBarText}>Actors
              </Nav.Link>
              <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/person/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
              </div>
            </div>
        </Nav>
        <Form inline>
          <InputGroup>
            <FormControl type="text" placeholder="Search" className="btn-outline-dark searchInput"
            />
            <Button type="submit" variant="info" className="btn bg-secondary btn-outline-dark"><FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Form>
        <RouterLink to="/user_details/userId">
        <img className="ml-3 bg-white avatarCircle" alt="U"/>
        </RouterLink>
      </Navbar>
    </div>
  );
};

export default Navigation;