import React, {useEffect} from 'react';
import "../assets/user.sass"
import Navigation from "../components/partials/nav"
import ParticlesBg from "particles-bg";
import {Slide} from "react-reveal";
import {connect} from "react-redux";

const User = ({userProfileID, userInitials, userFirstName, userLastName, userEmail}) => {
  useEffect(() => {
    document.title = `MTB: user ${userProfileID ? userFirstName + ` ` + userLastName : ``}`
  }, [userProfileID]);
  return (
    <div className="mainUserDiv">
      <Navigation />
      <ParticlesBg type="circle" className="p-0 m-0"
                   style={{position: "absolute", zIndex: 2, top: 0, left: 0}} />
      <div className="userContent">
        <div className="p-2 m-0 h-100 container-fluid row text-center text-center">
          <div className="row py-4 m-0 w-100 justify-content-center d-flex align-items-center">
            <div className="userAvatar bg-light ">
              <div
                className="initialsText m-0 h-100 d-flex align-items-center justify-content-center text-dark font-weight-bold">
                {userInitials}
              </div>
            </div>
          </div>
          <div className=" col userFields m-0 w-100 mx-2 d-flex flex-column align-items-center">
            <Slide>
              <div className="row ">
                {/*<div className="col-3">*/}
                {/*  <FontAwesomeIcon icon={faUser} className="text-white-50"*/}
                {/*                   style={{minHeight: "4rem", minWidth: "1.8rem"}} />*/}
                {/*</div>*/}
                <div className="col m-0 py-3 w-100"><h3>{userFirstName}</h3></div>
              </div>
              <div className="row">
                {/*<div className="col-3">*/}
                {/*  <FontAwesomeIcon icon={faUser} className="text-white-50"*/}
                {/*                   style={{minHeight: "4rem", minWidth: "1.8rem"}} />*/}
                {/*</div>*/}
                <div className="col m-0 py-3 w-100"><h3>{userLastName}</h3></div>
              </div>
            </Slide>
          </div>
          <div className="col userFields m-0 w-100 mx-2 d-flex flex-column align-items-center">
            <Slide>
              <div className="row ">
                {/*<div className="col-3">*/}
                {/*  <FontAwesomeIcon icon={faEnvelope} className=" text-white-50"*/}
                {/*                   style={{minHeight: "4rem", minWidth: "1.8rem"}} />*/}
                {/*</div>*/}
                <div className="col m-0 py-3 w-100"><h3>{userEmail}</h3></div>
              </div>
              <div className="row">
                {/*<div className="col-3">*/}
                {/*  <FontAwesomeIcon icon={faLock} className=" text-white-50"*/}
                {/*                   style={{minHeight: "4rem", minWidth: "1.8rem"}} />*/}
                {/*</div>*/}
                <div className="col m-0 py-3 w-100"><h3>{userProfileID}</h3></div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userProfileID: state.Auth.user.storeData.id,
    userInitials: state.Auth.user.storeData.initials,
    userFirstName: state.Auth.user.storeData.firstName,
    userLastName: state.Auth.user.storeData.lastName,
    userEmail: state.Auth.user.storeData.email,
  }
};
export default connect(mapStateToProps)(User);