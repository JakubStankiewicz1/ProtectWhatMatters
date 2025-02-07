import React from 'react';
import assets from '../../assets/assets';
import "./heroContact.css";

const HeroContact = () => {
  return (
    <div className="hero">

        <img src={assets.contact} alt="" />
        
                {/* Hero Main Contact */}
                <div className="heroContainer">
        
                {/* Top Section */}
                <div className="heroContainerTopSection">
                    <div className="heroContainerTopSectionTextContainer">
        
                        {/* First Text Heading */}
                        <div className="heroContainerTopSectionTextContainerFirst">
                            <p className="heroContainerTopSectionTextContainerFirstText">CONTACT</p>
                        </div>
        
                        {/* Third Text Heading */}
                        <div className="heroContainerTopSectionTextContainerThird">
                            <p className="heroContainerTopSectionTextContainerThirdText">US</p>
                        </div>
        
                    </div>
                </div>
        
                {/* Middle Section */}
                <div className="heroContainerMiddleSection">
                    <div className="heroContainerMiddleSectionTextContainer">
                        <p className="heroContainerMiddleSectionTextContainerText">
                        Reach out. We’re here to help! We typically respond within 24-48 hours. For urgent inquiries, please contact us by phone.
                        </p>
                    </div>
                </div>
        
                {/* Bottom Section */}
                {/* <div className="heroContainerBottomSection">
                    <div className="heroContainerBottomSectionBtn">
                        <button className="heroContainerBottomSectionBtnEle">SHOP NOW</button>
                    </div>
                </div> */}
        
                </div>
        
    </div>
  )
}

export default HeroContact