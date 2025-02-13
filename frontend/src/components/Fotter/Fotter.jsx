import React from "react";
import "./fotter.css";
import assets from "../../assets/assets";

const Fotter = () => {
  return (
    <div className="fotter">
      {/* Top Part */}
      <div className="fotterTopPart">
        <div className="fotterTopPartTopContainer">
          <div className="fotterTopPartTopContainerFirst">
            <img
              src={assets.iconCertificate}
              alt=""
              className="fotterTopPartTopContainerFirstImage"
            />
            <p className="fotterTopPartTopContainerFirstTextHeader">
              TESTED & CERTIFIED
            </p>
            <p className="fotterTopPartTopContainerFirstText">
              Our solutions have been tested in internationally recognized,
              gold-standard laboratories such as Element Defense in the USA and
              Aitex in Spain.
            </p>
          </div>

          <div className="fotterTopPartTopContainerHrDiv" />

          <div className="fotterTopPartTopContainerSecond">
            <img
              src={assets.iconBest}
              alt=""
              className="fotterTopPartTopContainerSecondImage"
            />
            <p className="fotterTopPartTopContainerSecondTextHeader">
              BEST MATERIALS
            </p>
            <ul className="fotterTopPartTopContainerSecondTextCont">
              <li>Kevlar from Dupont</li>
              <li>Dyneema from Avient</li>
              <li>Spectra & Goldshield from Honeywell</li>
            </ul>
          </div>

          <div className="fotterTopPartTopContainerHrDiv" />

          <div className="fotterTopPartTopContainerThird">
            <img
              src={assets.iconEu}
              alt=""
              className="fotterTopPartTopContainerThirdImage"
            />
            <p className="fotterTopPartTopContainerThirdTextHeader">
              MADE IN EUROPE
            </p>
            <p className="fotterTopPartTopContainerThirdText">
              Protection Group Denmark is a Danish owned company founded in
              2013, with its Headquarters in Randers, Denmark. We sell our
              products in over 30 countries to various civilian, military, law
              enforcement and rescue customers.
            </p>
          </div>
        </div>

        <div className="fotterTopPartDivHrFirst" />

        <div className="fotterTopPartBottomElement">
          <p className="fotterTopPartBottomElementText">
            See our 108 reviews on
          </p>

          <div className="fotterTopPartBottomElementDivTrustpilot">
            <img
              src={assets.trustpilotIcon}
              alt=""
              className="fotterTopPartBottomElementIcon"
            />
            <p className="fotterTopPartBottomElementDivTrustpilotText">
              Trustpilot
            </p>
          </div>
        </div>

        <div className="fotterTopPartHrElement" />
      </div>

      {/* Middle Part */}
      <div className="fotterMiddlePart">
        {/* Top Part */}
        <div className="fotterMiddlePartTopPart">
          {/* Left Part */}
          <div className="fotterMiddlePartTopPartLeftPart">
            <p className="fotterMiddlePartTopPartLeftPartText">
              JOIN OUR NEWSLETTER
            </p>
          </div>

          {/* Right Part */}
          <div className="fotterMiddlePartTopPartRightPart">
            <input
              type="text"
              placeholder="Your e-mail address"
              className="fotterMiddlePartTopPartRightPartInput"
            />
            <button className="fotterMiddlePartTopPartRightPartButton">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="fotterMiddlePartBottomPart">
          {/* First Part */}
          <div className="fotterMiddlePartBottomPartFirstPart">
            <p className="fotterMiddlePartBottomPartFirstPartHeader">
              Categories
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Ballistic helmet
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Helmet accessories
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Bulletproof vest
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Hard armor
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Plate carrier
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Stab proof vest
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Cut-resistant gloves
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              FRAG tactival vest accessories
            </p>
            <p className="fotterMiddlePartBottomPartFirstPartText">
              Templars Gear
            </p>
          </div>

          {/* Second Part */}
          <div className="fotterMiddlePartBottomPartSecondPart">
            <p className="fotterMiddlePartBottomPartSecondPartHeader">Guides</p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Sizeguide helmets
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Size guide for hard armor plates
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Sizeguide bulletproof & stabproof vests
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Sizeguide cut-resistant gloves
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Compare halmets
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Compare plates
            </p>
            <p className="fotterMiddlePartBottomPartSecondPartText">
              Instructional video
            </p>
          </div>

          {/* Third Part */}
          <div className="fotterMiddlePartBottomPartThirdPart">
            <p className="fotterMiddlePartBottomPartThirdPartHeader">Support</p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              Export permit
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              Contact us
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">Blog</p>
            <p className="fotterMiddlePartBottomPartThirdPartText">FAQ</p>
            <p className="fotterMiddlePartBottomPartThirdPartText">About us</p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              Shipping & Delivery
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              B2B / B2G purchase
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              NSN numbers for Protection Group Denmark
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              Distributors
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">
              Product data sheets
            </p>
            <p className="fotterMiddlePartBottomPartThirdPartText">Warranty</p>
            <p className="fotterMiddlePartBottomPartThirdPartText">Account</p>
          </div>

          {/* Fourth Part */}
          <div className="fotterMiddlePartBottomPartFourthPart">
            <p className="fotterMiddlePartBottomPartFourthPartHeader">
              Contact
            </p>
            <p className="fotterMiddlePartBottomPartFourthPartText">
              Protection Group Denmark Wholesale ApS
            </p>
            <p className="fotterMiddlePartBottomPartFourthPartText">
              Messingvej 13, DK-8940 Randers SV
            </p>
            <p className="fotterMiddlePartBottomPartFourthPartText">
              michael@protectiongroup.dk
            </p>
          </div>

          {/* Fifth Part */}
          <div className="fotterMiddlePartBottomPartFifthPart">
            <p className="fotterMiddlePartBottomPartFifthPartHeader">
              Follow Us
            </p>
          </div>
        </div>
      </div>

      <div className="fotterHrLastPart" />

      {/* Bottom Part */}
      <div className="fotterBottomPart">
        {/* Top Part */}
        <div className="fotterBottomPartTopPart"></div>

        {/* Middle Part */}
        <div className="fotterBottomPartMiddlePart">
          <img src={assets.fotterLogo} alt="" />
        </div>

        {/* Bottom Part */}
        <div className="fotterBottomPartBottomPart">
          <div className="fotterBottomPartBottomPartLeft">
            <p className="fotterBottomPartBottomPartLeftText">
              © PGD - Protect What Matters Worldwide 2025
            </p>
          </div>
          <div className="fotterBottomPartBottomPartRight">
            <p className="fotterBottomPartBottomPartRightTextOne">
              Cookie and privacy policy
            </p>
            <p className="fotterBottomPartBottomPartRightTextTwo">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
