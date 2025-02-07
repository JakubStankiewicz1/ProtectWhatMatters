import React from 'react';
import "./socialMedia.css";
import assets from '../../assets/assets';

const SocialMedia = () => {
  return (
    <div className="socialMedia">

        <div className="socialMediaContainer">
            {/* Top Part */}
            <div className="socialMediaContainerTopPart">
                <img src={assets.socialMediaImg1} alt="" className="socialMediaContainerTopPartImage" />
                <img src={assets.socialMediaImg2} alt="" className="socialMediaContainerTopPartImage" />
                <img src={assets.socialMediaImg3} alt="" className="socialMediaContainerTopPartImage" />
                <img src={assets.socialMediaImg4} alt="" className="socialMediaContainerTopPartImage" />
            </div>

            {/* Bottom Part */}
            <div className="socialMediaContainerBottomPart">
                {/* Left Part */}
                <div className="socialMediaContainerBottomPartLeftPart">
                    <img src={assets.instagramIcon} alt="" className="socialMediaContainerBottomPartLeftPartImage" />
                    <p className="socialMediaContainerBottomPartLeftPartText">PROTECTIONGROUPDENMARK</p>
                </div>

                {/* Right Part (Btn) */}
                <div className="socialMediaContainerBottomPartRightPart">
                    <div className="socialMediaContainerBottomPartRightPartBtn">
                        <button className="socialMediaContainerBottomPartRightPartBtnEle">FOLLOW US</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SocialMedia