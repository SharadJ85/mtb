import React from "react";
import blazingHeart from '../../assets/images/blazing-heart.png'
import TMDB from '../../assets/images/the-movie-DB.svg'
import {Fade} from "react-reveal"


const Footer = () => {
  return (
    <div className="container-fluid h-100 m-0 py-4"
         style={{height: "5rem", width: "100%", backgroundColor: "#0a0a0a"}}>
      <Fade big delay={400} duration={600}>
        <div className=" my-auto text-center ">
          <h5
            className="font-weight-normal"
            style={{
              background: "linear-gradient(to right, #fe8c00, #f83600",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            Created with
            <img src={blazingHeart} alt="blazingHeart" className="pb-1 mb-4" style={{height: "5.5rem"}} />
            by
            <a
              href="https://github.com/SharadJ85"
              className="mx-2 font-weight-bold"
              rel="noopener noreferrer"
              target="_blank"
              style={{fontSize: "larger"}}>
              Sharad Jadhav</a>
          </h5>
        </div>
        <div className=" my-auto text-center">
          <h5
            className="font-weight-bold"
            style={{
              background: "linear-gradient(to right, #5433ff, #20bdff, #a5fecb",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            <a href="https://www.themoviedb.org/" rel="noopener noreferrer" target="_blank">
              <img src={TMDB} alt="blazingHeart" className="mx-2 align-bottom" style={{height: "1.3rem"}} /> </a>
            is the source API for data and images</h5>
        </div>
      </Fade>
    </div>
  )
};

export default Footer;