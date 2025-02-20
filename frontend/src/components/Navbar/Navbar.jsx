import React from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../../assets/assets";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isShopOrAccountPage =
    location.pathname === "/shop" ||
    location.pathname === "/account" ||
    location.pathname === "/about-us/quality-innovation" ||
    location.pathname === "/product-category/ballistic-helmets/" ||
    location.pathname === "/product-category/helmet-accessories/" ||
    location.pathname === "/product-category/bulletproof-vest/" ||
    location.pathname === "/product-category/hard-armor/" ||
    location.pathname === "/product-category/plate-carrier/" ||
    location.pathname === "/product-category/stab-proof-vest/ " ||
    location.pathname === "/product-category/cut-resistant-gloves/" ||
    location.pathname === "/product-category/frag-tactical-vest-accessories/" ||
    location.pathname === "/product-category/templars-gear/" ||
    location.pathname.includes("/product") ||
    location.pathname === "/about-us/isoCertification" ||
    location.pathname === "/about-us/soft-body-armor" ||
    location.pathname === "/about-us/hard-body-armor" ||
    location.pathname === "/about-us/ballistic-helmets/";

  return (
    <div
      className={`navbar ${
        isShopOrAccountPage ? "navbar-shop" : "navbar-default"
      }`}
    >
      <div className="navbarComponent">
        {/* Navbar Left Part */}
        <div className="navbarComponentLeftPart">
          <div className="navbarComponentLeftPartLogo">
            <Link to="/">
              {isShopOrAccountPage ? (
                <img src={assets.blackLogo} alt="" />
              ) : (
                <img src={assets.whiteLogo} alt="" />
              )}
              {/* <img src={assets.logoImage} alt="" /> */}
            </Link>
          </div>
        </div>

        {/* Navbar Center Part */}
        <div className="navbarComponentCenterPart">
          {/* Home Element */}
          <div className="navbarComponentCenterPartHome">
            <NavLink
              to="/"
              className="navbarComponentCenterPartHomeText navbarComponentTextEle"
            >
              HOME
            </NavLink>
          </div>

          {/* Shop Element */}
          <div className="navbarComponentCenterPartShop">
            <div className="navbarComponentCenterPartShopEleContainer">
              <NavLink
                to="/shop"
                className="navbarComponentCenterPartShopText navbarComponentTextEle"
              >
                SHOP
              </NavLink>
              {isShopOrAccountPage ? (
                <img
                  src={assets.arrowBottomBlack}
                  alt=""
                  className="navbarComponentCenterPartShopEleContainerIcon"
                />
              ) : (
                <img
                  src={assets.arrowBottom}
                  alt=""
                  className="navbarComponentCenterPartShopEleContainerIcon"
                />
              )}
              {/* <img
                src={assets.arrowBottom}
                alt=""
                className="navbarComponentCenterPartShopEleContainerIcon"
              /> */}
            </div>
            {/* arrowBottomBlack */}
            <div className="navbarComponentCenterPartShopBottomDisplay">
              <div className="navbarComponentCenterPartShopBottomDisplayInside">
                <NavLink
                  to="/product-category/ballistic-helmets/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  BALLISTIC HELMETS
                </NavLink>
                <NavLink
                  to="/product-category/helmet-accessories/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  HELMET ACCESSORIES
                </NavLink>
                <NavLink
                  to="/product-category/bulletproof-vest/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  BULLETPROOF VEST
                </NavLink>
                <NavLink
                  to="/product-category/hard-armor/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  HARD ARMOR
                </NavLink>
                <NavLink
                  to="/product-category/plate-carrier/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  PLATE CARRIER
                </NavLink>
                <NavLink
                  to="/product-category/stab-proof-vest/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  STAB-PROOF VEST
                </NavLink>
                <NavLink
                  to="/product-category/cut-resistant-gloves/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  CUT-RESISTANT GLOVES
                </NavLink>
                <NavLink
                  to="/product-category/frag-tactical-vest-accessories/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  FRAG TACTICAL VEST ACCESSORIES
                </NavLink>
                <NavLink
                  to="/product-category/templars-gear/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  TEMPLARS GEAR
                </NavLink>
              </div>
            </div>
          </div>

          {/* About Us Element */}
          <div className="navbarComponentCenterPartAboutUs">
            <div className="navbarComponentCenterPartShopEleContainer">
              <NavLink
                to="/about-us"
                className="navbarComponentCenterPartAboutUsText navbarComponentTextEle"
              >
                ABOUT US
              </NavLink>
              {isShopOrAccountPage ? (
                <img
                  src={assets.arrowBottomBlack}
                  alt=""
                  className="navbarComponentCenterPartShopEleContainerIcon"
                />
              ) : (
                <img
                  src={assets.arrowBottom}
                  alt=""
                  className="navbarComponentCenterPartShopEleContainerIcon"
                />
              )}
            </div>

            <div className="navbarComponentCenterPartShopBottomDisplaySecond">
              <div className="navbarComponentCenterPartShopBottomDisplayInside">
                <NavLink
                  to="/about-us/quality-innovation"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  QUALITY & INNOVATION
                </NavLink>
                <NavLink
                  to="/about-us/isoCertification"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  ISO CERTIFICATION
                </NavLink>
                <NavLink
                  to="/about-us/soft-body-armor"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  SOFT BODY ARMOR
                </NavLink>
                <NavLink
                  to="/about-us/hard-body-armor"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  HARD BODY ARMOR
                </NavLink>
                <NavLink
                  to="/about-us/ballistic-helmets/"
                  className="navbarComponentCenterPartShopBottomDisplayText"
                >
                  BALLISTIC HELMETS
                </NavLink>
              </div>
            </div>
          </div>

          {/* Contact Us Element */}
          <div className="navbarComponentCenterPartContactUs">
            <NavLink
              to="/contact-us"
              className="navbarComponentCenterPartContactUsText navbarComponentTextEle"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>

        {/* Navbar Right Part */}
        <div className="navbarComponentRightPart">
          {/* Search Element */}
          <div className="navbarComponentRightPartSearch">
            {/* <img src="" alt="" className="navbarComponentRightPartSearchText" /> */}
          </div>

          {/* Account Element */}
          <div className="navbarComponentRightPartAccout">
            <NavLink
              to="/account"
              className="navbarComponentRightPartAccoutText navbarComponentTextEle"
            >
              ACCOUNT
            </NavLink>
          </div>

          {/* Currency Element */}
          <div className="navbarComponentRightPartCurrency">
            <p className="navbarComponentRightPartCurrencyText navbarComponentTextEle">
              EUR
            </p>
          </div>

          {/* Language Element */}
          <div className="navbarComponentRightPartLanguage">
            <p className="navbarComponentRightPartLanguageText navbarComponentTextEle">
              EN
            </p>
          </div>

          {/* Bag Element */}
          <div className="navbarComponentRightPartBag">
            <p className="navbarComponentRightPartBagText navbarComponentTextEle">
              BAG (0)
            </p>
          </div>
        </div>
      </div>

      {/* Navbar Bottom Border Element */}
      <div className="navbarBottomLineElement" />
    </div>
  );
};

export default Navbar;
