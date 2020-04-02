import React from 'react';
import "../../assets/imageCollage.sass"
import {Col, Row} from "react-bootstrap";

const ImageCollage=()=> {
    return (
        <div className="imageCollage">
          <Row className="no-gutters">
            <Col className="Col1">
              <Row className="bigThumbnail">
                <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                <h3 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h3>
              </Row>
              <Row className="no-gutters">
                <Col className="smallThumbnail bg-danger">
                  <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                  <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h4>
                </Col>
                <Col className="smallThumbnail bg-warning">
                  <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                  <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h4></Col>
              </Row>
            </Col>
            <Col className="Col2">
              <Row className="smallThumbnail bg-info">
                <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h4></Row>
              <Row className="smallThumbnail bg-secondary">
                <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h4></Row>
              <Row className="smallThumbnail bg-info">
                <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextBottom">John Wick</h4></Row>
            </Col>
            <Col className="Col3 bg-info">
              <Row className="no-gutters">
                <Col className="smallThumbnail bg-warning">
                  <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                  <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextTop">John Wick</h4></Col>
                <Col className="smallThumbnail bg-danger">
                  <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                  <h4 className="px-2 font-weight-light align-self-end text-white thumbnailTextTop">John Wick</h4></Col>
              </Row>
              <Row className="bigThumbnail bg-success">
                <img className="image" src="http://image.tmdb.org/t/p/original/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg" alt=""/>
                <h3 className="px-2 font-weight-light align-self-end text-white thumbnailTextTop">John Wick</h3></Row>
            </Col>
          </Row>
        </div>
    );
};

export default ImageCollage;