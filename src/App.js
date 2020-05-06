import React from "react";
import "./assets/app.sass";
import "./assets/customBootstrap.sass";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Footer from "./components/partials/footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/logIn-signUp"
import Home from "./components/home"
import Search from "./components/search"
import Media_Details from "./components/mediaDetails"
import Media_List from "./components/mediaList"
import User from "./components/user"
import Person_Details from "./components/personDetails"

const App = ({isAuthenticated, isVerifying}) => {
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path="/search/:query/:pageId"
            component={Search}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path="/media_list/:media/:generalType/:pageId"
            component={Media_List}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path="/media_details/:media/:mediaId"
            component={Media_Details}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path="/person_details/:actorId"
            component={Person_Details}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path={`/user_details`}
            component={User}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isVerifying: state.Auth.isVerifying
  };
};
export default connect(mapStateToProps)(App);