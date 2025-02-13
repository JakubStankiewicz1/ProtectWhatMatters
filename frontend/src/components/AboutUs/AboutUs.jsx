import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        {/* Top Part */}
        <div className="aboutUsContainerTopPart">
          <div className="aboutUsContainerTopPartDotElement" />
          <p className="aboutUsContainerTopPartText">ABOUT US</p>
        </div>

        {/* Bottom Part */}
        <div className="aboutUsContainerBottomPart">
          <p className="aboutUsContainerBottomPartText">
            OUR VISION IS TO PROTECT PEOPLE IN THE BEST POSSIBLE WAY AT A PRICE
            WHERE EVERYONE CAN PARTICIPATE
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
