import React from "react";
import "./aboutUsBallisticHelmets.css";

import aboutUsBallisticHelmetsTwo from "../../assets/aboutUsBallisticHelmetsTwo.svg";
import aboutUsBallisticHelmetsOne from "../../assets/aboutUsBallisticHelmetsOne.jpg";

const AboutUsBallisticHelmets = () => {
  return (
    <div className="aboutUsBallisticHelmets">
      <div className="aboutUsBallisticHelmetsContainer">
        {/* First Part */}
        <div className="aboutUsBallisticHelmetsContainerFirst">
          <div className="aboutUsBallisticHelmetsContainerFirstContainer">
            <div className="aboutUsBallisticHelmetsContainerFirstContainerLeft">
              <div className="aboutUsBallisticHelmetsContainerFirstContainerLeftHeader">
                <p className="aboutUsBallisticHelmetsContainerFirstContainerLeftHeaderText">
                  ballistic helmets
                </p>
              </div>

              <p className="aboutUsBallisticHelmetsContainerFirstContainerLeftText">
                At PGD we design and manufacture high quality ballistic helmets,
                using Kevlar® aramid. Our helmets meet exceed standards,
                ensuring reliability and safety in the most demanding
                conditions.
              </p>
            </div>

            <div className="aboutUsBallisticHelmetsContainerFirstContainerHrDiv" />

            <div className="aboutUsBallisticHelmetsContainerFirstContainerRight">
              <img
                src={aboutUsBallisticHelmetsTwo}
                alt=""
                className="aboutUsBallisticHelmetsContainerFirstContainerRightImg"
              />
            </div>
          </div>
        </div>

        {/* Second Part */}
        <div className="aboutUsBallisticHelmetsContainerSecond">
          <div className="aboutUsBallisticHelmetsContainerSecondContainer">
            <img src={aboutUsBallisticHelmetsOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBallisticHelmets;
