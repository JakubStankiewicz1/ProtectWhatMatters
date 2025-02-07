import React from "react";
import AboutUsCustomHeader from "../../components/AboutUsCustomHeader/AboutUsCustomHeader";
import assets from "../../assets/assets";
import "./aboutUsQualityAndInnovation.css";

const AboutUsQualityAndInnovation = () => {
  return (
    <div className="aboutUsQualityAndInnovation">
      <AboutUsCustomHeader
        headerTextOne="QUALITY &"
        headerTextTwo="INNOVATION"
        descText="At PGD we specialize in creating advanced protective gear, prioritizing innovation and uncompromising quality. Our team pursues improvements to make sure that every single product meets the highest standards of safety and performance."
        imageOne={assets.aboutShield}
        imageTwo={assets.aboutUs6}
      />

      <div className="aboutUsQualityAndInnovationContainer">
        {/* Part One */}
        <div className="aboutUsQualityAndInnovationContainerPartOne">
          {/* First */}
          <div className="aboutUsQualityAndInnovationContainerPartOneFirst">
            <div className="aboutUsQualityAndInnovationContainerPartOneFirstLeft">
              <h3 className="aboutUsQualityAndInnovationContainerPartOneFirstLeftHead">
                HIGH-QUALITY AND CUTTING-EDGE TECHNOLOGY
              </h3>
              <div className="aboutUsQualityAndInnovationContainerPartOneFirstLeftBottom">
                <div className="aboutUsQualityAndInnovationContainerPartOneFirstLeftBottomDiv" />
                <span className="aboutUsQualityAndInnovationContainerPartOneFirstLeftBottomText">QUALITY</span>
              </div>
            </div>

            <div className="aboutUsQualityAndInnovationContainerPartOneFirstRight">
              <p>We design and produce all of our protective gear within Denmark and across Europe. This localized production ensures that every ballistic product benefits from the high standards of European craftsmanship and stringent quality controls.</p>
              <p>By keeping production close to home, we can handle and closely monitor every single step of the production chain, starting from material selection to the final assembly and finish and deliver and follow-up with customers.</p>
              <p>This commitment to European production not only supports local industries but also guarantees that customers receive products that are both reliable and made with the utmost precision.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsQualityAndInnovation;