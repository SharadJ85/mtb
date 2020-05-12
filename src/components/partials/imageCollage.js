import React, {useEffect} from 'react';
import "../../assets/imageCollage.sass"
import {Col, Row} from "react-bootstrap";
import TmdbApiUrl from "./apiUrl";
import {Fade, Zoom} from "react-reveal";
import {Link} from "react-router-dom";

const ImageCollage = ({list, type}) => {
  //set api class
  const api = new TmdbApiUrl();
  useEffect(() => {
  }, [list]);

  return (
    <Fade>
      {
        list.length > 0
          ? (
            <div className="imageCollage">
              <Row className="no-gutters">
                <Col className="Col1">
                  <Link to={`/media_details/${type}/${list[0].id}/`}>
                    <Row className="bigThumbnail p-0 m-0">
                      <Zoom>
                        <img className="image" src={`${api.imageURL(2)}${list[0].backdrop_path}`}
                             alt={list[0].name || list[0].title} />
                        <h3 className="px-2  align-self-end text-white thumbnailTextBottom">
                          {list[0].name || list[0].title}</h3>
                      </Zoom>
                    </Row>
                  </Link>
                  <Row className="no-gutters">
                    {list.filter((e, index) => index >= 1 && index <= 2).map(el => (
                      <Link to={`/media_details/${type}/${el.id}/`}>
                        <Col className="smallThumbnail p-0 m-0 ">
                          <Zoom>
                            <img className="image" src={`${api.imageURL(1)}${el.backdrop_path}`}
                                 alt={el.name || el.title} />
                            <h4 className="px-2  align-self-end text-white thumbnailTextBottom">
                              {el.name || el.title}</h4>
                          </Zoom>
                        </Col>
                      </Link>
                    ))}
                  </Row>
                </Col>

                <Col className="Col2">
                  {list.filter((e, index) => index >= 3 && index <= 5).map(el => (
                    <Link to={`/media_details/${type}/${el.id}/`}>
                      <Row className="smallThumbnail p-0 m-0">
                        <Zoom>
                          <img className="image" src={`${api.imageURL(1)}${el.backdrop_path}`}
                               alt={el.name || el.title} />
                          <h4 className="px-2  align-self-end text-white thumbnailTextBottom">
                            {el.name || el.title}</h4>
                        </Zoom>
                      </Row>
                    </Link>
                  ))}
                </Col>

                <Col className="Col3 ">
                  <Row className="no-gutters">
                    {list.filter((e, index) => index >= 6 && index <= 7).map(el => (
                      <Link to={`/media_details/${type}/${el.id}/`}>
                        <Col className="smallThumbnail p-0 m-0">
                          <Zoom>
                            <img className="image" src={`${api.imageURL(1)}${el.backdrop_path}`}
                                 alt={el.name || el.title} />
                            <h4 className="px-2  align-self-end text-white thumbnailTextBottom">
                              {el.name || el.title}</h4>
                          </Zoom>
                        </Col>
                      </Link>
                    ))}
                  </Row>
                  <Link to={`/media_details/${type}/${list[8].id}/`}>
                    <Row className="bigThumbnail p-0 m-0">
                      <Zoom>
                        <img className="image" src={`${api.imageURL(2)}${list[8].backdrop_path}`}
                             alt={list[8].name || list[8].title} />
                        <h3 className="px-2  align-self-end text-white thumbnailTextTop">
                          {list[8].name || list[8].title}</h3>
                      </Zoom>
                    </Row>
                  </Link>
                </Col>
              </Row>
            </div>)
          : <div />
      }
    </Fade>
  );
};

export default ImageCollage;