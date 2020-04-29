import React from "react";
import "../../assets/nav.sass"
import {Navbar, Nav, Form, FormControl, Button, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import mtb from '../../assets/images/mtb.png'
import {Link as RouterLink} from "react-router-dom";
import {Fade, Zoom} from "react-reveal"
import {logoutUser} from "../../actions/auth/logOutAction";
import {connect} from "react-redux";

const Navigation = ({ userFirstName, userLastName, userInitials, dispatch}) => {
  const navBarText = {color: '#00bce6', cursor: "default"};

  const handleLogOut=()=>{
    dispatch(logoutUser())
  };

  return (
    <div className="fluid">
      <Navbar bg="dark" variant="dark" className="navDiv">
        {/*Logo*/}
        <RouterLink to="/"><img src={mtb} alt="MTB" className="logo" /></RouterLink>
        {/*Nav links*/}
        <Nav className="mr-auto ml-2 childNavs">
          <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
            <Nav.Link href="#movies" style={navBarText}>Movies
            </Nav.Link>
            <Fade cascade bottom duration={400}>
              <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/movie/popular/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
                <Nav.Link href="/media_list/movie/top_rated/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top
                                                                                                                                      rated
                </Nav.Link>
                <Nav.Link href="/media_list/movie/in_the_air/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3">in
                                                                                                                                      theaters
                </Nav.Link>
                <Nav.Link href="/media_list/movie/upcoming/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">upcoming
                </Nav.Link>
              </div>
            </Fade>
          </div>
          <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
            <Nav.Link href="#tvShows" style={navBarText}>Tv shows
            </Nav.Link>
            <Fade cascade bottom duration={400}>
              <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/tv/popular/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
                <Nav.Link href="/media_list/tv/top_rated/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top
                                                                                                                                      rated
                </Nav.Link>
                <Nav.Link href="/media_list/tv/on_the_air/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3 "> Now
                                                                                                                                        on
                                                                                                                                        air
                </Nav.Link>
                <Nav.Link href="/media_list/tv/airing_today/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">Airing
                                                                                                                                      today
                </Nav.Link>
              </div>
            </Fade>
          </div>
          <div className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">
            <Nav.Link href="#actors" style={navBarText}>Actors
            </Nav.Link>
            <Fade cascade bottom duration={400}>
              <div className="p-0 m-0 d-flex flex-wrap">
                <Nav.Link href="/media_list/person/popular/1"
                          className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
                </Nav.Link>
              </div>
            </Fade>
          </div>
        </Nav>
        {/*user*/}
        <div className="fluid mr-3 rounded-circle avatarDiv">
          <div className="avatarCircle d-flex align-items-center justify-content-center bg-light text-dark font-weight-bold ">
            {userInitials}</div>
          <Zoom delay={200} duration={300}>
            <div
              className="px-3 avatarChild justify-content-center text-center text-white bg-dark rounded border border-secondary">
              <div className=" w-100 pt-4 d-flex justify-content-center">
                <div className="avatarCircleBig d-flex align-items-center justify-content-center bg-light text-dark font-weight-bold">
                  {userInitials}
                </div>
              </div>
              <div className=" w-100 mt-3"><h4 >{userFirstName}</h4></div>
              <div className=" w-100"><h4 >{userLastName}</h4></div>
              <div className="pb-3 pt-2 w-100">
                <RouterLink to={`/user_details`}>
                  <button className="btn btn-sm btn-light text-dark mx-2 font-weight-bold">Profile</button>
                </RouterLink>
                <button className="btn btn-sm btn-light text-dark font-weight-bold"
                        onClick={() => handleLogOut()}>Log out
                </button>
              </div>
            </div>
          </Zoom>
        </div>
        {/*search*/}
        <Form inline>
          <InputGroup>
            <FormControl id="searchInput" type="text" placeholder="Search" />
            <Button type="submit" variant="outline-dark" className="btn bg-secondary shadow-none border-0">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Form>
      </Navbar>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userInitials:state.Auth.user.storeData.initials,
    userFirstName: state.Auth.user.storeData.firstName,
    userLastName: state.Auth.user.storeData.lastName,
  }
};
export default connect(mapStateToProps)(Navigation);