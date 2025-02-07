import React from 'react';
import './aboutUsCustomHeader.css';

const AboutUsCustomHeader = ({ headerTextOne, headerTextTwo, descText, imageOne, imageTwo }) => {
  return (
    <div className="aboutUsCustomHeader">
      <div className="headerContent">
        <div className="headerText">
          <h1 className="headerTextHeaderOne">{headerTextOne}</h1>
          <h2 className="headerTextHeaderTwo">{headerTextTwo}</h2>
          <p className="headerTextDescText">{descText}</p>
        </div>

        <div className="headerImageOneContainer">
          <img className="headerImageOne" src={imageOne} alt="Image One" />
        </div>
      </div>
      <div className="headerImageTwoContainer">
        <img className="headerImageTwo" src={imageTwo} alt="Image Two" />
      </div>
    </div>
  );
}

export default AboutUsCustomHeader;