import React from "react";
import "./assets/app.sass";
import "./assets/customBootstrap.sass";
import {BrowserRouter as Router, Route ,Switch  } from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home"
import Search from "./components/search"
import Media_Details from "./components/mediaDetails"
import Media_List from "./components/mediaList"
import User from "./components/user"
import Actor_Details from "./components/actorDetails"


const App=()=> {
  return (
      <Router>
    <div className="App">
      <div className="main">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/search/:query" component={Search}/>
      <Route exact path="/media_list/:media/:generalType/:pageId" component={Media_List}/>
      <Route exact path="/media_details/:media/:mediaId" component={Media_Details}/>
      <Route exact path="/actor_details/:actorId" component={Actor_Details}/>
      <Route exact path="/user_details/:userId" component={User}/>
      </Switch>
      </div>
    </div>
      </Router>
  );
};

export default App;