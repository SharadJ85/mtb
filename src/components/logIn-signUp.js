import React, {useEffect, useState} from 'react';
import mtb from '../assets/images/mtb.png'
import "../assets/logIn-signUp.sass"
import RegexVerify from "./partials/RegexVerify";
import {OverlayTrigger, Popover} from "react-bootstrap";
import {Fade, Slide} from 'react-reveal';
import {faCheck, faEnvelope, faLock, faTimes, faUser,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ParticlesBg from 'particles-bg'
import {Link, Redirect, useHistory, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {signUpUser} from "../actions/auth/signUpAction";
import {loginUser} from "../actions/auth/logInAction";

const Login = ({
                 location,
                 isLoggingIn,
                 logInError,
                 logInErrorType,
                 signUpError,
                 signUpErrorType,
                 isAuthenticated,
                 dispatch
               }) => {
    //const {from} = {from: {pathname: "/"}};
    const {from} = location.state || {from: {pathname: "/"}};

    const [currentCard, setCurrentCard] = useState({
      logInDiv: true,
    });
    const [logInData, setLogInData] = useState({
      email: ``,
      password: ``
    });
    const [signUpData, setSignUpData] = useState({
      firstName: ``,
      lastName: ``,
      email: ``,
      password: ``,
      repeatPassword: ``
    });
    const [signUpDataValid, setSignUpDataValid] = useState(false);

    const handleOtherClick = () => {
      setCurrentCard({logInDiv: !currentCard.logInDiv});
    };

    const handleLogInSubmit = () => {
      const {email, password} = logInData;
      dispatch(loginUser(email, password));
    };

    const handleSignUpSubmit = () => {
      const {firstName, lastName, email, password} = signUpData;
      dispatch(signUpUser(firstName, lastName, email, password));
    };

    const regex = new RegexVerify();
    const checkDataWithRegexExp = (regexEpx, matchWith, repeatPassword = false) => {
      if (matchWith !== ``) {
        switch (true) {
          case regexEpx && !repeatPassword:
            setSignUpDataValid(true);
            return (
              <Fade>
                <FontAwesomeIcon icon={faCheck} className="text-success" />
              </Fade>);
          case regexEpx && repeatPassword:
            if (signUpData.repeatPassword !== signUpData.password) {
              setSignUpDataValid(false);
              return (
                <Fade>
                  < FontAwesomeIcon icon={faTimes} className="text-danger" />
                </Fade>);
            } else {
              setSignUpDataValid(true);
              return (
                <Fade>
                  <FontAwesomeIcon icon={faCheck} className="text-success" />
                </Fade>);
            }
          default:
            setSignUpDataValid(false);
            return (
              <Fade>
                < FontAwesomeIcon icon={faTimes} className="text-danger" />
              </Fade>)
        }
      }
    };
    console.log("valid==>", signUpDataValid);
    console.log("valid==>", signUpDataValid);

    const changeTitle = (notLogIn) => {
      if (notLogIn) {
        document.title = "MTB: Sign Up"
      } else {
        document.title = "MTB: Log In"
      }
    };

    //useHistory().push(useLocation().pathname);
    useEffect(() => {
      changeTitle(!currentCard.logInDiv);
    }, [currentCard.logInDiv]);

    if (isAuthenticated) {
      return <Redirect to={from} />;
    } else {
      return (
        <div className="mainLoginDiv">
          <ParticlesBg type="circle" className="p-0 m-0"
                       style={{position: "absolute", zIndex: 2, top: 0, left: 0}} />
          <Fade cascade effect="fadein">
            {(currentCard.logInDiv)
              ? (
                <Fade cascade effect="fadein">
                  <div className="logIn-signUp">
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
                        <p className="text-danger ml-3 mt-1 font-weight-bold text-capitalize"
                           style={{fontSize: "1rem"}}>
                          {logInError ? (logInErrorType.code).slice(5).replace(/-/g, ' ') : null}</p>
                      </div>
                      <div className="col forgot m-0 p-0 ml-3 mt-1">
                        <Link to="#">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="login_fields__submit">
                      <div className="text-center logInButtons ">
                        <button onClick={() => handleOtherClick()}
                                className="btn btn-outline-light px-5 m-2 mt-3">
                          Sign up
                        </button>
                        <button onClick={() => handleLogInSubmit()}
                                className="btn btn-outline-light submitButtons px-5 m-2 mt-3">
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              )
              : (
                <div className="logIn-signUp">
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
                              <Popover className=" rounded mr-5 stylesPopOver" id={`popover-positioned-left`}>
                                <Popover.Title className=" text-white border-bottom stylesPopOver" as="h3">
                                  First name must contain...</Popover.Title>
                                <Popover.Content className=" text-white">
                                  2 or more alphabetical character <br /> (a-z) or (A-Z)
                                </Popover.Content>
                              </Popover>}>
                            <input placeholder="FirstName" type="text"
                                   onChange={e => setSignUpData({...signUpData, firstName: e.target.value})}
                                   className="col text-white-50 px-2" />
                          </OverlayTrigger>
                          <div className="validation align-self-center">
                            {checkDataWithRegexExp(regex.nameRegex(signUpData.firstName), signUpData.firstName)}
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
                              <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}>
                                <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3">
                                  Last name must contain...</Popover.Title>
                                <Popover.Content className=" text-white">
                                  2 or more alphabetical character <br /> (a-z) or (A-Z)
                                </Popover.Content>
                              </Popover>}>
                            <input placeholder="LastName" type="text"
                                   onChange={e => setSignUpData({...signUpData, lastName: e.target.value})}
                                   className="col text-white-50 px-2" />
                          </OverlayTrigger>
                          <div className="validation align-self-center">
                            {checkDataWithRegexExp(regex.nameRegex(signUpData.lastName), signUpData.lastName)}
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
                            <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}>
                              <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3">
                                Email must contain ...
                              </Popover.Title>
                              <Popover.Content className=" text-white">
                                alpha-numeric characters <br />
                                (a-z) or (A-Z) or (0-9) or (._-)
                              </Popover.Content>
                            </Popover>}>
                          <input placeholder="Email" type="text"
                                 onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                                 className="col text-white-50 px-2" />
                        </OverlayTrigger>
                        <div className="validation align-self-center">
                          {checkDataWithRegexExp(regex.emailRegex(signUpData.email), signUpData.email)}
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
                            <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}>
                              <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3">
                                Password must contain at least...</Popover.Title>
                              <Popover.Content className=" text-white">
                                1 lowercase alphabetical character(a-z).<br />
                                1 uppercase alphabetical character(A-Z).<br />
                                1 numeric character(0-9).<br />
                                1 special character(!,@,#,$,%,^,&,*).<br />
                                6 characters or more.
                              </Popover.Content>
                            </Popover>}>
                          <input placeholder="Password" type="password"
                                 onChange={e => setSignUpData({...signUpData, password: e.target.value})}
                                 className="col text-white-50 px-2" />
                        </OverlayTrigger>
                        <div className="validation align-self-center">
                          {checkDataWithRegexExp(regex.passwordRegex(signUpData.password), signUpData.password)}
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
                            <Popover className="bg-dark rounded ml-5 stylesPopOver" id={`popover-positioned-right`}>
                              <Popover.Title className=" text-white border-bottom bg-dark stylesPopOver" as="h3">
                                Repeat Password...</Popover.Title>
                              <Popover.Content className=" text-white">
                                must be same as above.
                              </Popover.Content>
                            </Popover>}>
                          <input placeholder="Repeat Password" type="password"
                                 onChange={e => setSignUpData({...signUpData, repeatPassword: e.target.value})}
                                 className="col text-white-50 px-2" />
                        </OverlayTrigger>
                        <div className="validation align-self-center">
                          {checkDataWithRegexExp(regex.passwordRegex(signUpData.repeatPassword), signUpData.repeatPassword, true)}
                        </div>
                      </div>
                    </Slide>
                    <div className="my-1 px-2" style={{height: "0.8rem"}}>
                      <p className=" ml-2 text-danger font-weight-bold"
                         style={{fontSize: "1rem"}}>
                        {signUpError ? (signUpErrorType.code).slice(5).replace(/-/g, ' ') : null}
                      </p>
                    </div>
                    <div className="login_fields__submit py-1">
                      <div className="text-center">
                        <button className="btn btn-outline-light submitButtons px-5 m-2"
                                onClick={() => handleSignUpSubmit()}>
                          Sign up
                        </button>
                        <button className="btn btn-outline-light px-5 m-2"
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
  }
;
const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    logInError: state.Auth.logInError,
    logInErrorType: state.Auth.errors.logIn,
    signUpError: state.Auth.signUpError,
    signUpErrorType: state.Auth.errors.signUp,
    isAuthenticated: state.Auth.isAuthenticated
  }
};
export default connect(mapStateToProps)(Login);