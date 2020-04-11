import React,{useEffect,useState,useRef} from 'react';
import Navigation from "./partials/nav";
import "../assets/actorDetails.sass"
import {Link} from "react-router-dom";

const Actor_Details = () => {
  const [height, setHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setScreenHeight(window.innerHeight)
  },[height]);
  const backgroundStyle={backgroundColor:"#02131b"};
  const heightStyle={minHeight:`${(height<=screenHeight?screenHeight:height)+70}px`};
  return (
    <div style={backgroundStyle}>
      <Navigation />
      <div className="mainActorsDiv" style={heightStyle}>
        <div id="actorDetails" className="actorDetail ml-2" ref={ref}>
          <div className="container row">
            <div className="poster col col-3">
              <img className="pt-3 poster " src="http://image.tmdb.org/t/p/w500/nTABNG8Sw4EVN3xodn2JBdEmBqv.jpg" alt=""/>
            </div>
            <div className="details m-2 pl-3 col-md-8">
              <div className="pt-1 px-2 text-capitalize font-weight-light mt-1">
                <h1>Brie Larson</h1>
              </div>
              <div class="ml-4 pt-2">
                <h4 class="text-info">Acting</h4>
                <h5 class="mt-4">Place of birth: Sacramento, California, USA</h5>
                <h5>Birthday: 1989 / 10 / 01 </h5>
                <h5>Death day: ---</h5>
                <h5 class="mt-4">Popularity: 10.008</h5>
                <h5>Also known as:</h5>
                <p>Brianne Sidonie Desaulniers , بري لارسون , 브리 라슨 , ブリー・ラーソン ,
                   Бри Ларсон , บรี ลาร์สัน , 布丽·拉尔森 , Брі Ларсон , ब्री लार्सन , Μπρι Λάρσον</p>
              </div>
              <div className="text-bolder ml-4 pt-3">
                <h4>Biography</h4>
              </div>
              <div className="p-1 ml-4 biography font-weight-light">
                <p>
                  An American actress, director, and singer. Larson was home-schooled before she studied acting at the
                  American Conservatory Theater. She began her acting career in television, appearing as a regular on the 2001
                  sitcom Raising Dad, for which she was nominated for a Young Artist Award. As a teenager, Larson had brief
                  roles in the 2004 films 13 Going on 30 and Sleepover. Her performance in the comedy film Hoot (2006) was
                  praised, and she subsequently played supporting roles in the films Greenberg (2010), Scott Pilgrim vs. the
                  World (2010), 21 Jump Street (2012), and Don Jon (2013). From 2009 to 2011, Larson featured as a rebellious
                  teenager in the television series United States of Tara. Larson's breakthrough role came with the
                  independent drama Short Term 12 (2013), for which she received critical acclaim. Further success came in
                  2015 when she starred in Room, an acclaimed drama based on Emma Donoghue's novel of the same name. She won
                  several awards for her portrayal of a troubled mother kidnap victim in the film, including the Academy
                  Award, BAFTA Award, Critic's Choice Award, Golden Globe Award, Screen Actors Guild Award and Canadian Screen
                  Award for Best Actress. In 2017, she starred as a war photographer in the adventure film Kong: Skull Island,
                  her highest-grossing
                </p>
              </div>
              <Link className="ml-5" to="https://www.imdb.com/name/nm0488953/?ref_=nv_sr_srsg_0">
                <button type="button" className="btn btn-warning"><strong>IMDB</strong></button>
              </Link>
            </div>
          </div>
        </div>        <div className="blueBox"/>

      </div>
    </div>
  );
};

export default Actor_Details;