import React, { useEffect, useState } from "react";
import "./fragTacticalVestAccessories.css";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";
import Fotter from "../../components/Fotter/Fotter";

const FragTacticalVestAccessories = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    setDisplayProducts(productsData.products.slice(0, 4));
  }, []);

  const sortedProducts = [...displayProducts].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    if (sortType === "date") return new Date(b.date_added) - new Date(a.date_added);
    return a.id - b.id;
  });

  return (
    <div className="fragTacticalVestAccessories">
      <div className="fragTacticalVestAccessoriesContainer">
        {/* First Part */}
        <div className="fragTacticalVestAccessoriesContainerFirst">
          <div className="fragTacticalVestAccessoriesContainerFirstHeader">
            <p className="fragTacticalVestAccessoriesContainerFirstHeaderText">FRAG TACTICAL VEST ACCESSORIES</p>
          </div>

          <p className="fragTacticalVestAccessoriesContainerFirstTextOne">
            Add-ons for our PGD FRAG tactical bulletproof vest are essential upgrades designed to elevate both protection and operational efficiency.
            Built for professionals in law enforcement, military, and private security sectors, these accessories allow users to customize their gear
            for mission-specific requirements. From groin add-ons and shoulder protection to collar and throat add-ons, each add-on offers tailored
            solutions for enhanced safety and readiness. All our add-ons perfectly fitted for our PGD DELTA NIJ IIIA soft armor.
          </p>

          <p className="fragTacticalVestAccessoriesContainerFirstTextTwo">
            Engineered to integrate seamlessly with our PGD FRAG tactical vests, these add-ons increase overall mobility in high-pressure
            environments. Advanced materials and ergonomic designs ensure that users experience minimal strain, even when carrying additional
            equipment. With our FRAG add-ons, you can prepare for dynamic and unpredictable situations, ensuring you have the right gear, right where
            you need it.
          </p>
        </div>

        {/* Middle Part */}
        <div className="fragTacticalVestAccessoriesContainerMiddle">
          <div className="fragTacticalVestAccessoriesContainerMiddlePart">
            <div className="middlePartHeader">
              <h3 className="middlePartHeading">Recommended Products</h3>
              <div className="sortContainer">
                <label className="sortContainerLabel">Sort by: </label>
                <select onChange={(e) => setSortType(e.target.value)}>
                  <option value="default">Default</option>
                  <option value="price">Price</option>
                  <option value="date">Newest</option>
                </select>
                <p className="productCount">Showing {sortedProducts.length} products</p>
              </div>
            </div>
            <div className="productsGrid">
              {sortedProducts.map((product) => (
                <ProductElement key={product.id} image={product.images[0]} name={product.name} price={product.price} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="fragTacticalVestAccessoriesContainerBottomPart">
          {/* First Part */}
          <div className="fragTacticalVestAccessoriesContainerBottomPartFirst">
            <div className="fragTacticalVestAccessoriesContainerBottomPartFirstHeader">
              <p className="fragTacticalVestAccessoriesContainerBottomPartFirstHeaderText">PGD FRAG TACTICAL VEST ACCESSORIES</p>
            </div>

            <div className="fragTacticalVestAccessoriesContainerBottomPartFirstText">
              <p className="fragTacticalVestAccessoriesContainerBottomPartFirstTextOne">
                When operating in high-threat environments, every layer of protection matters. That’s why our PGD FRAG tactical vest add-ons are
                designed to provide comprehensive coverage and enhanced versatility. But what sets these add-ons apart? Let’s dive into the details of
                each add-on and explore how they contribute to superior safety and performance.
              </p>
            </div>
          </div>

          {/* Second Part */}
          <div className="fragTacticalVestAccessoriesContainerBottomPartSecond">
            <div className="fragTacticalVestAccessoriesContainerBottomPartSecondHeader">
              <p className="fragTacticalVestAccessoriesContainerBottomPartSecondHeaderText">WHY SHOULD I CHOOSE PGD FRAG ADD-ONS?</p>
            </div>

            <div className="fragTacticalVestAccessoriesContainerBottomPartSecondText">
              <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextTextTop">
                Our tactical vest add-ons are engineered to offer targeted protection for critical areas. With the flexibility to add or remove
                components as needed, you can customize your PGD FRAG tactical vest to match mission-specific requirements. But what are the key
                add-ons available to our PGD FRAG base tactical bullet proof vest?
              </p>

              <div className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOne">
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneThick">1. Biceps Add-On</p>
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneNormal">
                  This add-on delivers crucial protection for your upper arms, shielding vital arteries and muscle areas. It’s a must-have for
                  professionals exposed to environments where threats are unpredictable and comprehensive coverage is essential.
                </p>
              </div>
              <div className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOne">
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneThick">2. Collar Add-On</p>
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneNormal">
                  Guarding the neck is vital in close-combat or active shooter scenarios. The collar add-on is crafted to provide protection against
                  ballistic and sharp-force threats, ensuring your most vulnerable areas are covered without restricting mobility.
                </p>
              </div>
              <div className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOne">
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneThick">3. Groin Add-On</p>
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneNormal">
                  Protecting the lower body is critical in high-risk situations. The groin add-on is designed to offer an additional layer of
                  ballistic protection where it counts most, giving you the confidence to move swiftly and securely.
                </p>
              </div>
              <div className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOne">
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneThick">4. Throat Add-On</p>
                <p className="fragTacticalVestAccessoriesContainerBottomPartSecondTextOneNormal">
                  The throat add-on is crafted to shield one of the most vulnerable parts of the body. With this feature, you reduce the risk of
                  potentially fatal injuries while maintaining comfort and mobility in demanding situations.
                </p>
              </div>
            </div>
          </div>

          {/* Third Part */}
          <div className="fragTacticalVestAccessoriesContainerBottomPartThird">
            <div className="fragTacticalVestAccessoriesContainerBottomPartThirdHeader">
              <p className="fragTacticalVestAccessoriesContainerBottomPartThirdHeaderText">OUR TOP BENEFITS OF OUR PGD FRAG TACTICAL VEST ADD-ONS:</p>
            </div>

            <div className="fragTacticalVestAccessoriesContainerBottomPartThirdText">
              <ul className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUl">
                <li className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLi">
                  <p className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLiThick">Enhanced protection:</p>
                  Focused defense for critical areas such as the biceps, collar, groin, and throat.
                </li>
                <li className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLi">
                  <p className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLiThick">Modular design:</p> Easy to attach and remove,
                  allowing for quick adjustments based on mission needs.
                </li>
                <li className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLi">
                  <p className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLiThick">Seamless integration:</p> Designed to fit the PGD
                  FRAG tactical vest perfectly, ensuring balanced weight distribution and comfort.
                </li>
                <li className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLi">
                  <p className="fragTacticalVestAccessoriesContainerBottomPartThirdTextUlLiThick">PGD DELTA NIJ IIIA soft armor:</p> High quality soft
                  armor manufactured in Denmark with materials from Honeywell.
                </li>
              </ul>

              <p className="fragTacticalVestAccessoriesContainerBottomPartThirdTextOne">
                When safety is a priority, every detail matters. With our PGD FRAG tactical vest add-ons, you get mission-ready accessories engineered
                to offer enhanced protection, greater flexibility, and reliable performance in the field. Explore the full range of biceps, collar,
                groin, and throat add-ons today and give yourself the complete coverage you need to stay safe and secure in any situation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default FragTacticalVestAccessories;
