import {movieType} from "../../actions/media/movieAction";
import {tvType} from "../../actions/media/tvAction";
import {personPopular} from "../../actions/media/personAction";

const MatchParamsWithUrlType=(generalType,media,pageId=1)=> {
  switch (true) {
    case generalType==="movie" && media==="popular":
      return movieType(1,pageId);
    case generalType==="movie" && media==="top_rated":
      return movieType(2,pageId);
    case generalType==="movie" && media==="now_playing":
      return movieType(3,pageId);
    case generalType==="movie" && media==="upcoming":
      return movieType(4,pageId);
    case generalType==="tv" && media==="popular":
      return tvType(1,pageId);
    case generalType==="tv" && media==="top_rated":
      return tvType(2,pageId);
    case generalType==="tv" && media==="on_the_air":
      return tvType(3,pageId);
    case generalType==="tv" && media==="airing_today":
      return tvType(4,pageId);
    case generalType==="person" && media==="popular":
      return personPopular(pageId);
    default:
      break
  }
};

export default MatchParamsWithUrlType;