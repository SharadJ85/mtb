import React from "react";
import "../../assets/checkAnimationIcon.sass"

const CheckAnimationIcon = ({width}) => {
  return (
    <div className="googleSvgIcon" style={{ minWidth: width}}>
      <svg id="completion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 101">
        <g id="circle">
          <g id="Mask">
            <path id="path-1_1_" className="st1"
                  d="M49 21c22.1 0 40 17.9 40 40s-17.9 40-40 40S9 83.1 9 61s17.9-40 40-40z" />
          </g>
        </g>
        <path id="check" className="st2"
              d="M31.3 64.3c-1.2-1.5-3.4-1.9-4.9-.7-1.5 1.2-1.9 3.4-.7 4.9l7.8 10.4c1.3 1.7 3.8 1.9 5.3.4L71.1 47c1.4-1.4 1.4-3.6 0-5s-3.6-1.4-5 0L36.7 71.5l-5.4-7.2z" />
      </svg>
    </div>
  )
};

export default CheckAnimationIcon;