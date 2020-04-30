import React, {useEffect} from 'react';
import "../assets/home.sass"
import {Container, Row} from 'react-bootstrap'
import LoadingSpinner from "./partials/loadingSpinner";
import {Fade} from "react-reveal";
import Navigation from "./partials/nav";
import ImageCollage from "./partials/imageCollage"
import {connect} from "react-redux";
import {movieType} from "../actions/media/movieAction";
import {tvType} from "../actions/media/tvAction";

const Home = ({fetchMovieNowPlaying, fetchTvOnTheAir, movie, tv}) => {

  useEffect(() => {
    fetchMovieNowPlaying();
    fetchTvOnTheAir()
  }, []);

  return (
    <div className="mainHome text-center pb-3">
      <Navigation />
      <Container fluid>
        <Row className="pt-2 pb-1 justify-content-center headingText">
          <h4>Movies in Theaters</h4>
        </Row>
        {movie.results
          ? (<ImageCollage list={movie.results.slice(0, 9)} />)
          : (<div className="container text-center py-5">
            <Fade duration={400}>
              <LoadingSpinner />
            </Fade>
          </div>)
        }
        <Row className="pt-2 pb-1 justify-content-center headingText">
          <h4>Now on Air</h4>
        </Row>
        {tv.results
          ? (<ImageCollage list={tv.results.slice(0, 9)} />)
          : (<div className="container text-center py-5">
            <Fade duration={400}>
              <LoadingSpinner />
            </Fade>
          </div>)
        }
      </Container>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    fetchMovieNowPlaying: () => dispatch(movieType(3)),
    fetchTvOnTheAir: () => dispatch(tvType(3))
  }
};

const mapStateToProps = (state) => {
  return {
    movie: state.Movie.now_playing,
    tv: state.Tv.on_the_air,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);