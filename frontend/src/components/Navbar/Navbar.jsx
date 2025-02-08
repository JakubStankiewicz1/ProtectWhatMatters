import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from "../../assets/assets";
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isShopOrAccountPage = location.pathname === '/shop' || location.pathname === '/account' || location.pathname === '/about-us/quality-innovation' || location.pathname === '/product-category/ballistic-helmets/' || location.pathname === '/product-category/helmet-accessories/' || location.pathname === '/product-category/bulletproof-vest/' || location.pathname === '/product-category/hard-armor/' || location.pathname === '/product-category/plate-carrier/';

  return (
    <div className={`navbar ${isShopOrAccountPage ? 'navbar-shop' : 'navbar-default'}`}>
      <div className="navbarComponent">
        {/* Navbar Left Part */}
        <div className="navbarComponentLeftPart">
          <div className="navbarComponentLeftPartLogo">
            <Link to="/">
              <img src={assets.logoImage} alt="" />
            </Link>
          </div>
        </div>

        {/* Navbar Center Part */}
        <div className="navbarComponentCenterPart">
          {/* Home Element */}
          <div className="navbarComponentCenterPartHome">
            <NavLink to="/" className="navbarComponentCenterPartHomeText navbarComponentTextEle">HOME</NavLink>
          </div>

          {/* Shop Element */}
          <div className="navbarComponentCenterPartShop">
            <div className="navbarComponentCenterPartShopEleContainer">
                <NavLink to="/shop" className="navbarComponentCenterPartShopText navbarComponentTextEle">SHOP</NavLink>
                <img src={assets.arrowBottom} alt="" className="navbarComponentCenterPartShopEleContainerIcon" />
            </div>

            <div className="navbarComponentCenterPartShopBottomDisplay">
                <div className="navbarComponentCenterPartShopBottomDisplayInside">
                    <NavLink to="/product-category/ballistic-helmets/" className="navbarComponentCenterPartShopBottomDisplayText">BALLISTIC HELMETS</NavLink>
                    <NavLink to="/product-category/helmet-accessories/" className="navbarComponentCenterPartShopBottomDisplayText">HELMET ACCESSORIES</NavLink>
                    <NavLink to="/product-category/bulletproof-vest/" className="navbarComponentCenterPartShopBottomDisplayText">BULLETPROOF VEST</NavLink>
                    <NavLink to="/product-category/hard-armor/" className="navbarComponentCenterPartShopBottomDisplayText">HARD ARMOR</NavLink>
                    <NavLink to="/product-category/plate-carrier/" className="navbarComponentCenterPartShopBottomDisplayText">PLATE CARRIER</NavLink>
                    <NavLink to="/product-category/stab-proof-vest/" className="navbarComponentCenterPartShopBottomDisplayText">STAB-PROOF VEST</NavLink>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">CUT-RESISTANT GLOVES</p>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">FRAG TACTICAL VEST ACCESSORIES</p>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">TEMPLARS GEAR</p>
                </div>
            </div>
          </div>

          {/* About Us Element */}
          <div className="navbarComponentCenterPartAboutUs">
            <div className="navbarComponentCenterPartShopEleContainer">
              <NavLink to="/about-us" className="navbarComponentCenterPartAboutUsText navbarComponentTextEle">ABOUT US</NavLink>
              <img src={assets.arrowBottom} alt="" className="navbarComponentCenterPartShopEleContainerIcon" />
            </div>

            <div className="navbarComponentCenterPartShopBottomDisplaySecond">
                <div className="navbarComponentCenterPartShopBottomDisplayInside">
                    <NavLink to="/about-us/quality-innovation" className="navbarComponentCenterPartShopBottomDisplayText">QUALITY & INNOVATION</NavLink>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">ISO CERTIFICATION</p>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">SOFT BODY ARMOR</p>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">HARD BODY ARMOR</p>
                    <p className="navbarComponentCenterPartShopBottomDisplayText">BALLISTIC HELMETS</p>
                </div>
            </div>
          </div>

          {/* Contact Us Element */}
          <div className="navbarComponentCenterPartContactUs">
            <NavLink to="/contact-us" className="navbarComponentCenterPartContactUsText navbarComponentTextEle">CONTACT US</NavLink>
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
            <NavLink to="/account" className="navbarComponentRightPartAccoutText navbarComponentTextEle">ACCOUNT</NavLink>
          </div>

          {/* Currency Element */}
          <div className="navbarComponentRightPartCurrency">
            <p className="navbarComponentRightPartCurrencyText navbarComponentTextEle">EUR</p>
          </div>

          {/* Language Element */}
          <div className="navbarComponentRightPartLanguage">
            <p className="navbarComponentRightPartLanguageText navbarComponentTextEle">EN</p>
          </div>

          {/* Bag Element */}
          <div className="navbarComponentRightPartBag">
            <p className="navbarComponentRightPartBagText navbarComponentTextEle">BAG (0)</p>
          </div>
        </div>
      </div>

      {/* Navbar Bottom Border Element */}
      <div className="navbarBottomLineElement" />
    </div>
  );
};

export default Navbar;