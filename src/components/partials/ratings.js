import React from 'react';

const Ratings=(props)=> {
  const ratingValue=props.value?props.value:null;
  const ratingStrokeMath=(Math.round(ratingValue * 10) * 2.512);
  const strokeDasharrayProperty=`${ratingStrokeMath},${Math.round(251.2-ratingStrokeMath)}`;
  const ratingsColorSwitcher = (rating) => {
    const list=[7.5,6,4,0];
    const color=["#64dd17","#ffd600","#ff3d00","#d50000"];
    return color[list.findIndex(value=>value<=rating)]
  };
  return (
      <div className="fluid">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#0c0c0c"/>
          <path fill="none" strokeLinecap="round" strokeWidth="8"
                stroke={ratingsColorSwitcher(ratingValue)}
                strokeDasharray={strokeDasharrayProperty}
                d="M50 10
         a 40 40 0 0 1 0 80
         a 40 40 0 0 1 0 -80"/>
          <text x="50" y="55" textAnchor="middle" dy="7" fontSize="2.2rem"
                className="font-weight-bold " fill="#c2c2c2">{ratingValue}</text>
        </svg>
      </div>
  );
};

export default Ratings;