import React from 'react';
import "./shopElement.css";

const ShopElement = ({ image, text }) => {
  return (
    <div className="shopElement">

        <div className="shopElementContainer">
            {/* Image Elemenet */}
            <div className="shopElementContainerImage">
                <img src={image} alt="" />
            </div>

            {/* Text Element */}
            <div className="shopElementContainerText">
                <p className="shopElementContainerTextEle">{text}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ShopElement