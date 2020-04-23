import React, {useEffect, useState} from 'react';
import "../../assets/imageCollage.sass"
import {Col, Row} from "react-bootstrap";
import LoadingSpinner from "./loadingSpinner";
import TmdbApiUrl from "../apiUrl";

const ImageCollage = (props) => {
  const api=new TmdbApiUrl();
  const stateObjectList = () => {
    const objectArray = [];
    props.list.slice(0,9).map((el, index) => {
      objectArray.push({
        title: (props.list[index].name || props.list[index].title),
        id: props.list[index].id,
        backDrop: props.list[index].backdrop_path
      })
    });
    return objectArray
  };

  const [data, setData] = useState({});
  useEffect(() => {
    if (props.list.length>0) {
      console.log(`props.list==>${props.list}`);
      setData(stateObjectList())
    }
  }, [props.list]);


if (data.length>0){
  const num = [3, 4, 5];
  return (
    <div className="imageCollage">
      <Row className="no-gutters">

        <Col className="Col1">
          <Row className="bigThumbnail">
            <img className="image" src={`${api.imageURL(0)}${data[0].backDrop}`} alt={data[0].title}/>
            <h3
              className="px-2  align-self-end text-white thumbnailTextBottom">{data[0].title}</h3>
          </Row>
          <Row className="no-gutters">
            {num.filter(e=>e<5).map(el=>(
              <Col className="smallThumbnail ">
                <img className="image" src={`${api.imageURL(1)}${data[el-2].backDrop}`} alt={data[el-2].title} />
                <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el-2].title}</h4></Col>
            ))}
          </Row>
        </Col>

        <Col className="Col2">
          {num.map(el=>(
            <Row className="smallThumbnail ">
              <img className="image" src={`${api.imageURL(1)}${data[el].backDrop}`} alt={data[el].title} />
              <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el].title}</h4></Row>
          ))}
        </Col>

        <Col className="Col3 ">
          <Row className="no-gutters">
            {num.filter(e=>e>3).map(el=>(
            <Col className="smallThumbnail ">
              <img className="image" src={`${api.imageURL(1)}${data[el+2].backDrop}`} alt={data[el+2].title} />
              <h4 className="px-2  align-self-end text-white thumbnailTextBottom">{data[el+2].title}</h4></Col>
          ))}
          </Row>
          <Row className="bigThumbnail ">
            <img className="image" src={`${api.imageURL(0)}${data[8].backDrop}`} alt={data[8].title} />
            <h3 className="px-2  align-self-end text-white thumbnailTextTop">{data[8].title}</h3></Row>
        </Col>
      </Row>
    </div>
  );}
else{
  return (
    <div className="container text-center py-5">
      <LoadingSpinner />
    </div>
  )
}
};

export default ImageCollage;