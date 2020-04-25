import React, {useState} from 'react';
import mtb from '../assets/images/mtb.png'
import "../assets/login.sass"
import {OverlayTrigger, Popover} from "react-bootstrap";
import {Fade, Slide} from 'react-reveal';
import {faCheck, faEnvelope, faLock, faTimes, faUser,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ParticlesBg from 'particles-bg'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../actions/auth"

const Login = ({loginError, isAuthenticated, dispatch, props}) => {
  const {from} = {from: {pathname: "/"}};
  //const {from} = props.location.state || {from: {pathname: "/"}};
console.log(`path from==>${from}`);
  const signUpErrorText = ['password do not match'];

  const [data, setData] = useState({
    logInDiv: true,
  });
  const [logInData, setLogInData] = useState({
    email: ``,
    password: ``
  });
  const [signUpData, setsignUpData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    repeatPassword: null
  });

  const handleOtherClick = () => {
    setData({...data, logInDiv: !data.logInDiv});
  };

  const handleSubmitClick = () => {
    const {email, password} = logInData;
    dispatch(loginUser(email, password));
  };

  //styles
  const stylesPopOver = {};

  if (isAuthenticated) {
    return <Redirect to={from} />;
  } else {
    return (
      <div className="mainLoginDiv">
        <ParticlesBg type="circle" className="p-0 m-0"
                     style={{position: "absolute", zIndex: 2, top: 0, left: 0}} />
        <Fade cascade effect="fadein">
          {(data.logInDiv)
            ? (
              <Fade cascade effect="fadein">
                <div className="login">
                  <div className="text-center mr-2 py-4">
                    <img src={mtb} alt="MTB_logo" className=" mainLogo mt-4" />
                  </div>
                  <div className="login_title text-white-50 m-3 px-2 mt-5">
                    <span>Login to your account</span>
                  </div>
                  <div className=" container-fluid p-0 m-0">
                    <Fade right cascade>
                      <div className="login_fields row container-fluid m-0 my-2">
                        <div className="icon col-1 pl-2 align-self-center typeLogo">
                          <FontAwesomeIcon icon={faEnvelope} className="text-white-50" />
                        </div>
                        <input placeholder="Email" type="text"
                               onChange={e => setLogInData({...logInData, email: e.target.value})}
                               className="col text-white-50 px-2"
                               autoComplete="email" />
                        <div className="validation align-self-center mr-3">
                        </div>
                      </div>
                      <div className="login_fields row container-fluid m-0 my-2">
                        <div className="icon col-1 pl-2 align-self-center typeLogo ">
                          <FontAwesomeIcon icon={faLock} className="text-white-50" />
                        </div>
                        <input placeholder="Password" type="password"
                               onChange={e => setLogInData({...logInData, password: e.target.value})}
                               className="col text-white-50 px-2"
                               autoComplete="current-password" />
                        <div className="validation align-self-center">
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="container-fluid m-0 p-0 row " style={{height: "0.8rem"}}>
                    <div className="col-7 font-weight-bold m-0 px-2">
                      <p className="text-danger ml-2"
                         style={{fontSize: "1rem",display:loginError?`block`:`none`}}>
                        Incorrect email or password</p>
                    </div>
                    <div className="col forgot m-0 p-0 ml-3">
                      <Link to="#">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="login_fields__submit">
                    <div className="text-center logInButtons">
                      <button type={"submit"} onClick={() => handleOtherClick()}
                              className="btn btn-outline-light px-5 m-2 mt-3">
                        Sign up
                      </button>
                      <button type={"submit"} onClick={() => handleSubmitClick()}
                              className="btn btn-outline-light px-5 m-2 mt-3">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            )
            : (
              <div className="login">
                <div className="text-center mr-2 py-4">
                  <img src={mtb} alt="MTB" className=" mainLogo mt-4" />
                </div>
                <div className="login_title text-white-50 m-3 px-2">
                  <span>Sign up for your new account</span>
                </div>
                <div className=" container-fluid p-0 m-0">
                  <Slide right cascade>
                    <div className="login_fields row container-fluid m-0 my-2">
                      <div className="col container-fluid row">
                        <div className="icon col-1 pl-2 align-self-center typeLogo">
                          <FontAwesomeIcon icon={faUser} className="text-white-50" />
                        </div>
                        <OverlayTrigger
                          className="bg-dark"
                          trigger="focus"
                          key="left"
                          placement="left"
                          overlay={
                            <Popover className=" rounded mr-5 stylesPopOver" id={`popover-positioned-left`}
                                     style={stylesPopOver}>
                              <Popover.Title className=" text-white border-bottom stylesPopOver" as="h3"
                                             style={stylesPopOver}>
                                First name must contain...</Popover.Title>
                              <Popover.Content className=" text-white">
                                alphabetical character <br /> (a-z) or (A-Z)
                              </Popover.Content>
                            </Popover>}>
                          <input placeholder="FirstName" type="text" className="col text-white-50 px-2" />
                        </OverlayTrigger>
                        <div className="validation align-self-center">
                          <FontAwesomeIcon icon={faCheck} className="text-success"
                                           style={{display: data.displayNone}} />
                          <FontAwesomeIcon icon={faTimes} className="text-success"
                                           style={{display: data.displayNone}} />
                        </div>
                      </div>
                      <div className="col container-fluid row">
                        <div className="icon col-1 ml-2 pl-2 align-self-center typeLogo"
                             style={{borderLeft: "1px solid #7c828c"}}>
                          <FontAwesomeIcon icon={faUser} className="text-white-50" />
                        </div>
                        <OverlayTrigger
                          className="bg-dark"
                          trigger="focus"
                          key="right"
                          placement="right"
                          overlay={
                            <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}
                                     style={stylesPopOver}>
                              <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3"
                                             style={stylesPopOver}>
                                Last name must contain...</Popover.Title>
                              <Popover.Content className=" text-white">
                                alphabetical character <br /> (a-z) or (A-Z)
                              </Popover.Content>
                            </Popover>}>
                          <input placeholder="LastName" type="text" className="col text-white-50 px-2" />
                        </OverlayTrigger>
                        <div className="validation align-self-center">
                          <FontAwesomeIcon icon={faCheck} className="text-success"
                                           style={{display: data.displayNone}} />
                          <FontAwesomeIcon icon={faTimes} className="text-success"
                                           style={{display: data.displayNone}} />
                        </div>
                      </div>
                    </div>
                    <div className="login_fields row container-fluid m-0 my-2">
                      <div className="icon col-1 pl-2 align-self-center typeLogo">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white-50" />
                      </div>
                      <OverlayTrigger
                        className="bg-dark"
                        trigger="focus"
                        key="right"
                        placement="right"
                        overlay={
                          <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}
                                   style={stylesPopOver}>
                            <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3"
                                           style={stylesPopOver}>
                              Email must contain ...
                            </Popover.Title>
                            <Popover.Content className=" text-white">
                              alpha-numeric characters <br />
                              (a-z) or (A-Z) or (0-9) or (._-)
                            </Popover.Content>
                          </Popover>}>
                        <input placeholder="Email" type="text" className="col text-white-50 px-2" />
                      </OverlayTrigger>
                      <div className="validation align-self-center">
                        <FontAwesomeIcon icon={faCheck} className="text-success" style={{display: data.displayNone}} />
                        <FontAwesomeIcon icon={faTimes} className="text-success" style={{display: data.displayNone}} />
                      </div>
                    </div>
                    <div className="login_fields row container-fluid m-0 my-2">
                      <div className="icon col-1 pl-2 align-self-center typeLogo">
                        <FontAwesomeIcon icon={faLock} className="text-white-50" />
                      </div>
                      <OverlayTrigger
                        className="bg-dark"
                        trigger="focus"
                        key="right"
                        placement="right"
                        overlay={
                          <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}
                                   style={stylesPopOver}>
                            <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3"
                                           style={stylesPopOver}>
                              Password must contain at least...</Popover.Title>
                            <Popover.Content className=" text-white">
                              1 lowercase alphabetical character(a-z).<br />
                              1 uppercase alphabetical character(A-Z).<br />
                              1 numeric character(0-9).<br />
                              1 special character(!,@,#,$,%,^,&,*).<br />
                              6 characters or more.
                            </Popover.Content>
                          </Popover>}>
                        <input placeholder="Password" type="password" className="col text-white-50 px-2" />
                      </OverlayTrigger>
                      <div className="validation align-self-center">
                        <FontAwesomeIcon icon={faCheck} className="text-success" style={{display: data.displayNone}} />
                        <FontAwesomeIcon icon={faTimes} className="text-success" style={{display: data.displayNone}} />
                      </div>
                    </div>
                    <div className="login_fields row container-fluid m-0 ">
                      <div className="icon col-1 pl-2 align-self-center typeLogo">
                        <FontAwesomeIcon icon={faLock} className="text-white-50" />
                      </div>
                      <OverlayTrigger
                        className="bg-dark"
                        trigger="focus"
                        key="right"
                        placement="right"
                        overlay={
                          <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}
                                   style={stylesPopOver}>
                            <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3"
                                           style={stylesPopOver}>
                              Repeat Password...</Popover.Title>
                            <Popover.Content className=" text-white">
                              must be same as above.
                            </Popover.Content>
                          </Popover>}>
                        <input placeholder="Repeat Password" type="password" className="col text-white-50 px-2" />
                      </OverlayTrigger>
                      <div className="validation align-self-center">
                        <FontAwesomeIcon icon={faCheck} className="text-success" style={{display: data.displayNone}} />
                        <FontAwesomeIcon icon={faTimes} className="text-success" style={{display: data.displayNone}} />
                      </div>
                    </div>
                  </Slide>
                  <div className="my-1 px-2" style={{height: "0.8rem"}}>
                    <p className=" ml-2 text-danger"
                       style={{fontSize: "1rem", display: data.displayNone}}>{signUpErrorText[0]}</p>
                  </div>
                  <div className="login_fields__submit py-1">
                    <div className="text-center">
                      <button type={"submit"} className="btn btn-outline-light px-5 m-2">
                        Sign up
                      </button>
                      <button type={"submit"}
                              className="btn btn-outline-light px-5 m-2"
                              onClick={() => handleOtherClick()}>
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </Fade>

      </div>
    )
  }

};
const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    loginError: state.Auth.loginError,
    isAuthenticated: state.Auth.isAuthenticated
  }
};
export default connect(mapStateToProps)(Login);