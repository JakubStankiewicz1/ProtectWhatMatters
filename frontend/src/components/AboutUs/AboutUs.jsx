import React from 'react';
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">

        <div className="aboutUsContainer">

            {/* Top Part */}
            <div className="aboutUsContainerTopPart">
                <div className="aboutUsContainerTopPartDotElement" />
                <div className="aboutUsContainerTopPartText">ABOUT US</div>
            </div>

            {/* Bottom Part */}
            <div className="aboutUsContainerBottomPart">
                <div className="aboutUsContainerBottomPartText">
                    OUR VISION IS TO PROTECT PEOPLE IN THE BEST POSSIBLE WAY AT A PRICE WHERE EVERYONE CAN PARTICIPATE
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default AboutUs