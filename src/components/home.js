import React from 'react';
import "../assets/home.sass"
import {Container,Row} from 'react-bootstrap'
import Navigation from "./partials/nav";
import ImageCollage from "./partials/imageCollage"


const Home=()=> {
    return (
        <div className="mainHome">
         <Navigation />
          <Container fluid>
            <Row className="pt-2 pb-1 justify-content-center headingText">
              <h4>Movies in Theaters</h4>
            </Row>
            <ImageCollage/>
            <Row className="pt-2 pb-1 justify-content-center headingText">
              <h4>Now on Air</h4>
            </Row>
            <ImageCollage/>
          </Container>
        </div>
    );
};

export default Home;

