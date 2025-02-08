import React, { useEffect, useState } from "react";
import "./cutResistantGloves.css";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";
import Fotter from "../../components/Fotter/Fotter";

const CutResistantGloves = () => {
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
    <div className="cutResistantGloves">
      <div className="cutResistantGlovesContainer">
        {/* Top Part */}
        <div className="cutResistantGlovesContainerTop">
          <div className="cutResistantGlovesContainerTopHeader">
            <p className="cutResistantGlovesContainerTopHeaderText">CUT-RESISTANT GLOVES</p>
          </div>

          <p className="cutResistantGlovesContainerTopText">
            Our cut-resistant gloves are designed specifically for security, police, and military use, with meticulous attention to detail to ensure
            optimal performance in demanding environments. They offer level 5 cut resistance, providing superior protection against sharp objects. The
            knuckles are reinforced for added protection in high-risk situations. The gloves are made with unique materials on the palm to improve
            grip, ensuring secure handling of objects. Additionally, they are compatible with touch screens, allowing for easy use of devices without
            removing the gloves.
          </p>
        </div>

        {/* Middle Part */}
        <div className="cutResistantGlovesContainerMiddle">
          <div className="cutResistantGlovesContainerMiddlePart">
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
        <div className="cutResistantGlovesContainerBottom">
          <div className="cutResistantGlovesContainerBottomHeader">
            <p className="cutResistantGlovesContainerBottomHeaderText">CUT RESISTANT GLOVES WITH BETTER FEELING</p>
          </div>

          <div className="cutResistantGlovesContainerBottomText">
            <p className="cutResistantGlovesContainerBottomTextOne">
              Cut-resistant gloves come in many different variants, qualities and for different purposes. At Protection Group Denmark we have designed
              our gloves with the aim that the gloves need to provide you with the best possible protection while the cut resistant gloves are very
              ergonomic, and gives you a good feeling. Our gloves can be used by police, security, military, doormen and security guards.
            </p>
            <p className="cutResistantGlovesContainerBottomTextTwo">
              This sensing technology is our unique “Feeling Touch”, which gives you better sensing on the fingers. This means that you can feel the
              things you touch even better than a normal cut-proof glove in the cut resistant level 5.
            </p>
            <p className="cutResistantGlovesContainerBottomTextThree">
              All of our gloves are lined with cut-resistant UHMWPE (Ultra High Molecular Weight Polyethylene) in the cut resistant level 5, after the
              European standard EN388. By using UHMWPE you get a glove that in addition to giving you the best protection against knives and sharp
              objects such as bottles, also gives you a very flexible, thin and breathable cut resistant glove that will avoid sweat and bacteria’s
              when wearing it over long periods.
            </p>
            <p className="cutResistantGlovesContainerBottomTextFour">
              Furthermore, all gloves work on touch-devices and screens, so you do not need to take off your glove when working.
            </p>
            <p className="cutResistantGlovesContainerBottomTextFive">
              Gloves from PGD are all made of durable materials where we have reinforced seams so the gloves keep strong and durable when used. Also,
              we have lavished extra for the small details like the silicone printed grip and special leather pattern in the palm that enhances your
              grip strength significantly. By buying gloves from PGD, you get high-quality for a very low price.
            </p>
            <p className="cutResistantGlovesContainerBottomTextSix">Our 2 different models of cut-resistant gloves:</p>

            <p className="cutResistantGlovesContainerBottomTextSeven">PGD 100 Zulu</p>

            <ul className="cutResistantGlovesContainerBottomTextUlOne">
              <li className="cutResistantGlovesContainerBottomTextUlOneLi">Durable synthetic leather</li>
              <li className="cutResistantGlovesContainerBottomTextUlOneLi">Silicone printed grip on palm for better grip</li>
              <li className="cutResistantGlovesContainerBottomTextUlOneLi">EN388 cut resistant level 5</li>
            </ul>

            <p className="cutResistantGlovesContainerBottomTextEight">PGD 200 Pro</p>

            <ul className="cutResistantGlovesContainerBottomTextUlTwo">
              <li className="cutResistantGlovesContainerBottomTextUlTwoLi">The unique leather pattern on the palm strengthens your grip</li>
              <li className="cutResistantGlovesContainerBottomTextUlTwoLi">EN388 cut resistant level 5</li>
              <li className="cutResistantGlovesContainerBottomTextUlTwoLi">Knuckles are reinforced with moulded polycarbonate</li>
            </ul>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default CutResistantGloves;
