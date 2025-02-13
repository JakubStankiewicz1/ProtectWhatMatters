import React, { useState } from "react";
import Fotter from "../../components/Fotter/Fotter";
import ShopElement from "../../components/ShopElement/ShopElement";
import productsData from "../../products.json";
import "./shop.css";
import ProductElement from "../../components/ProductElement/ProductElement";

const Shop = () => {
  const [sortType, setSortType] = useState("default");
  const productCount = productsData.products.length;

  // Sorting logic
  const sortedProducts = [...productsData.products].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    if (sortType === "date")
      return new Date(b.date_added) - new Date(a.date_added);
    return a.id - b.id; // Default sorting by ID
  });

  return (
    <div className="shop">
      {/* First Part */}
      <div className="shopFirstPart">
        <div className="shopFirstPartHeadingText">SHOP</div>
        <div className="shopFirstPartElements">
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/PGD-ARCH-fully-equipped-400x400-px-324x324.jpg"
            text="BALLISTIC HELMETS"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Bulletproof-vest-400x400-px-324x324.jpg"
            text="BULLETPROOF VEST"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Cut-resistant-gloves-400x400px-324x324.jpg"
            text="CUT-RESISTANT GLOVES"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/FRAG-tactical-vest-accessories-400x400px-324x324.jpg"
            text="FRAG TACTICAL VEST ACCESSORIES"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Hard-armor-400x400px-324x324.jpg"
            text="HARD ARMOR"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Helmet-accessories-400x400-px-324x324.jpg"
            text="HELMET ACCESSORIES"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Plate-carrier-400x400-px-324x324.jpg"
            text="PLATE CARRIER"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Stab-proof-vest-400x400px-324x324.jpg"
            text="STAB-PROOF VEST"
          />
          <ShopElement
            image="https://protectiongroupdenmark.com/wp-content/uploads/2025/01/Templars-Gear-400x400px-324x324.jpg"
            text="TEMPLARS GEAR"
          />
        </div>
      </div>

      {/* Second Part */}
      <div className="shopSecondPart">
        <div className="shopSecondPartHeader">
          <h2>All Products</h2>
          <div className="sortContainer">
            <label>Sort by: </label>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="sortContainerSelect"
            >
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="date">Newest</option>
            </select>
            <p className="productCount">Showing all {productCount} results</p>
          </div>
        </div>
        <div className="productsGrid">
          {sortedProducts.map((product) => (
            <ProductElement
              key={product.id}
              image={product.images[0]}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* Third Part */}
      <div className="shopThirdPart">
        <Fotter />
      </div>
    </div>
  );
};

export default Shop;
