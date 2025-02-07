import React from "react";
import assets from "../../assets/assets";
import "./heroAbout.css";

const HeroAbout = () => {
  return (
    <div className="heroAbout">
      <img src={assets.aboutUs1} alt="" />

      <div className="heroAboutContainer">
        {/* Top Part */}
        <div className="heroAboutTopPart">
          <div className="heroAboutTopPartContainer">
            <p className="heroAboutTopPartContainerTextOne">TRIED,</p>
            <p className="heroAboutTopPartContainerTextTwo">
              TESTED <p className="heroAboutTopPartContainerTextTwoColor">&</p>
            </p>
            <p className="heroAboutTopPartContainerTextThree">TRUSTED</p>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="heroAboutBottomPart">
          <div className="heroAboutBottomPartContainer">
            <p className="heroAboutBottomPartContainerText">
              Since 2013 we have been committed to manufacturing reliable protection solutions. Driven by expertise and integrity, our mission is to
              safeguard lives and inspire trust worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
