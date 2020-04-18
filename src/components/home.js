import React,{Component} from 'react';
import "../assets/home.sass"
import {Container,Row} from 'react-bootstrap'
import Navigation from "./partials/nav";
import ImageCollage from "./partials/imageCollage"
import axios from "axios"
import TmdbApiUrl from "./apiUrl";

const api=new TmdbApiUrl();
const movieUrl=`${api.baseURL()}${api.mediaType(0)}/${api.generalFeatures(1)}${api.apiKey()}`;
const tvUrl=`${api.baseURL()}${api.mediaType(1)}/${api.generalFeatures(5)}${api.apiKey()}`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      movie:[],
      tv:[]
    }
  }

  async componentDidMount() {
    const [movieData, tvData] = await Promise.all([movieUrl, tvUrl].map(el => axios.get(el)));
    this.setState({
      movie:movieData.data.results.filter((el, index) => index < 9) ,
      tv: tvData.data.results.filter((el, index) => index < 9)
    });
  }
  render() {
    return (
      <div className="mainHome">
        <Navigation />
        <Container fluid>
          <Row className="pt-2 pb-1 justify-content-center headingText">
            <h4>Movies in Theaters</h4>
          </Row>
          <ImageCollage list={this.state.movie} />
          <Row className="pt-2 pb-1 justify-content-center headingText">
            <h4>Now on Air</h4>
          </Row>
          <ImageCollage list={this.state.tv}/>
        </Container>
      </div>
    );
  }
};
