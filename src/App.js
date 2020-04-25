import React, {useEffect} from "react";
import "./assets/app.sass";
import "./assets/customBootstrap.sass";
import {Route, Switch, Redirect} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import Footer from "./components/partials/footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login"
import Home from "./components/home"
import Search from "./components/search"
import Media_Details from "./components/mediaDetails"
import Media_List from "./components/mediaList"
import User from "./components/user"
import Actor_Details from "./components/actorDetails"
import {movieNowPlaying, moviePopular, movieUpcoming, movieTopRated} from "../src/actions/movie"
import {tvOnTheAir, tvPopular, tvTopRated, tvAiringToday} from "../src/actions/tv"
import {actorPopular} from "../src/actions/actor"

const App = ({ isAuthenticated, isVerifying, userId, dispatch }) => {
  //actions rerender
  useEffect(() => {
      dispatch(movieNowPlaying());
      dispatch(tvOnTheAir());
      dispatch(moviePopular());
      dispatch(movieUpcoming());
      dispatch(movieTopRated());
      dispatch(tvPopular());
      dispatch(tvTopRated());
      dispatch(tvAiringToday());
      dispatch(actorPopular());
    });

  return (
    <div className="App">
      <div className="main">
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path="/search/:query"
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
            path="/actor_details/:actorId"
            component={Actor_Details}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            exact
            path={`/user_details/${userId}`}
            component={User}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isVerifying: state.Auth.isVerifying,
    userId:state.Auth.user.uid
  };
};
export default connect(mapStateToProps)(App);