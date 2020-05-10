import React, {useEffect, useState} from 'react';
import "../../assets/imageCollage.sass"
import {Col, Row} from "react-bootstrap";
import TmdbApiUrl from "./apiUrl";
import {Fade, Zoom} from "react-reveal";
import {Link} from "react-router-dom";

const ImageCollage = ({list, type}) => {
  //set api class
  const api = new TmdbApiUrl();

  //set required data objects into an array
  const stateObjectList = () => {
    const objectArray = [];
    list.map((el, index) => {
      return objectArray.push({
        title: (list[index].name || list[index].title),
        id: list[index].id,
        backDrop: list[index].backdrop_path
      })
    });
    return objectArray
  };

  //set data state hook w.r.t stateObjectList output array
  const [data, setData] = useState({});
  useEffect(() => {
    setData(stateObjectList())
  }, []);

//if state-hook data has any array of object
  const num = [3, 4, 5];
  return (
    <Fade>
      {
        data.length > 0
          ? (
            <div className="imageCollage">
              <Row className="no-gutters">
                <Col className="Col1">
                  <Link to={`/media_details/${type}/${data[0].id}/`}>
                    <Row className="bigThumbnail p-0 m-0">
                      <Zoom>
                        <img className="image" src={`${api.imageURL(0)}${data[0].backDrop}`} alt={data[0].title} />
                        <h3 className="px-2  align-self-end text-white thumbnailTextBottom">{data[0].title}</h3>
                      </Zoom>
                    </Row>
                  </Link>
                  <Row className="no-gutters">
                    {num.filter(e => e < 5).map(el => (
                      <Link to={`/media_details/${type}/${data[el - 2].id}/`}>
                        <Col className="smallThumbnail p-0 m-0 ">
                          <Zoom>
                            <img className="image" src={`${api.imageURL(1)}${data[el - 2].backDrop}`}
                                 alt={data[el - 2].title} />
                            <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el - 2].title}</h4>
                          </Zoom>
                        </Col>
                      </Link>
                    ))}
                  </Row>
                </Col>

                <Col className="Col2">
                  {num.map(el => (
                    <Link to={`/media_details/${type}/${data[el].id}/`}>
                      <Row className="smallThumbnail p-0 m-0">
                        <Zoom>
                          <img className="image" src={`${api.imageURL(1)}${data[el].backDrop}`} alt={data[el].title} />
                          <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el].title}</h4>
                        </Zoom>
                      </Row>
                    </Link>
                  ))}
                </Col>

                <Col className="Col3 ">
                  <Row className="no-gutters">
                    {num.filter(e => e > 3).map(el => (
                      <Link to={`/media_details/${type}/${data[el + 2].id}/`}>
                        <Col className="smallThumbnail p-0 m-0">
                          <Zoom>
                            <img className="image" src={`${api.imageURL(1)}${data[el + 2].backDrop}`}
                                 alt={data[el + 2].title} />
                            <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el + 2].title}</h4>
                          </Zoom>
                        </Col>
                      </Link>
                    ))}
                  </Row>
                  <Link to={`/media_details/${type}/${data[8].id}/`}>
                    <Row className="bigThumbnail p-0 m-0">
                      <Zoom>
                        <img className="image" src={`${api.imageURL(0)}${data[8].backDrop}`} alt={data[8].title} />
                        <h3 className="px-2  align-self-end text-white thumbnailTextTop">{data[8].title}</h3>
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