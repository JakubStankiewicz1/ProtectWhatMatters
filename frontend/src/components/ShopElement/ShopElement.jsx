import React from "react";
import "./shopElement.css";
import { NavLink } from "react-router-dom";

const ShopElement = ({ image, text, location }) => {
  return (
    <NavLink to={location} className="shopElement">
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
    </NavLink>
  );
};

export default ShopElement;
