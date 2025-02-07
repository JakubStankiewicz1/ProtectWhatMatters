import React from 'react';
import "./hero.css";
import assets from "../../assets/assets";

const Hero = () => {
  return (
    <div className="hero">

        <video src={assets.homepageBackground} autoPlay loop muted />

        {/* Hero Main Contact */}
        <div className="heroContainer">

        {/* Top Section */}
        <div className="heroContainerTopSection">
            <div className="heroContainerTopSectionTextContainer">

                {/* First Text Heading */}
                <div className="heroContainerTopSectionTextContainerFirst">
                    <p className="heroContainerTopSectionTextContainerFirstText">PROTECT</p>
                </div>

                {/* Second Text Heading */}
                <div className="heroContainerTopSectionTextContainerSecond">
                    <p className="heroContainerTopSectionTextContainerSecondText">WHAT</p>
                </div>

                {/* Third Text Heading */}
                <div className="heroContainerTopSectionTextContainerThird">
                    <p className="heroContainerTopSectionTextContainerThirdText">MATTERS</p>
                </div>

            </div>
        </div>

        {/* Middle Section */}
        <div className="heroContainerMiddleSection">
            <div className="heroContainerMiddleSectionTextContainer">
                <p className="heroContainerMiddleSectionTextContainerText">
                    Since 2025 we have been supplying frontline professionals with high quality body armor and ballistic helments to protect those who protect us.
                </p>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="heroContainerBottomSection">
            <div className="heroContainerBottomSectionBtn">
                <button className="heroContainerBottomSectionBtnEle">SHOP NOW</button>
            </div>
        </div>

        </div>
                
    </div>
  )
}

export default Hero