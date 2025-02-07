import React from 'react';
import Fotter from '../../components/Fotter/Fotter';
import ShopElement from '../../components/ShopElement/ShopElement';
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">

        {/* First Part */}
        <div className="shopFirstPart">
            {/* Heading Text */}
            <div className="shopFirstPartHeadingText">SHOP</div>

            {/* Select Elements */}
            <div className="shopFirstPartElements">
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/PGD-ARCH-fully-equipped-400x400-px-324x324.jpg" text="BALLISTIC HELMETS" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Bulletproof-vest-400x400-px-324x324.jpg" text="BULLETPROOF VEST" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Cut-resistant-gloves-400x400px-324x324.jpg" text="CUT-RESISTANT GLOVES" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/FRAG-tactical-vest-accessories-400x400px-324x324.jpg" text="FRAG TACTICAL VEST ACCESSORIES" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Hard-armor-400x400px-324x324.jpg" text="HARD ARMOR" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Helmet-accessories-400x400-px-324x324.jpg" text="HELMET ACCESSORIES" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Plate-carrier-400x400-px-324x324.jpg" text="PLATE CARRIER" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Stab-proof-vest-400x400px-324x324.jpg" text="STAB-PROOF VEST" />
                <ShopElement image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Templars-Gear-400x400px-324x324.jpg" text="TEMPLARS GEAR" />
            </div>
        </div>

        {/* Second Part */}
        <div className="shopSecondPart"></div>

        {/* Third Part */}
        <div className="shopThirdPart">
            {/* <Fotter /> */}
        </div>
        
    </div>
  )
}

export default Shop