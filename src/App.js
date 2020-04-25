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

const App = ({ isAuthenticated, isVerifying, dispatch }) => {
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
          <Route exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search/:query" component={Search} />
          <Route exact path="/media_list/:media/:generalType/:pageId" component={Media_List} />
          <Route exact path="/media_details/:media/:mediaId" component={Media_Details} />
          <Route exact path="/actor_details/:actorId" component={Actor_Details} />
          <Route exact path="/user_details/:userId" component={User} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isVerifying: state.Auth.isVerifying
  };
};
export default connect(mapStateToProps)(App);