import React, { useState } from "react";
import "./featuredProducts.css";
import productsData from "../../products.json";
import ProductElement from "../ProductElement/ProductElement";

const FeaturedProducts = () => {
  const [sortType, setSortType] = useState("default");

  // Sorting logic
  const sortedProducts = [...productsData.products].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    if (sortType === "date") return new Date(b.date_added) - new Date(a.date_added);
    return a.id - b.id; // Default sorting by ID
  }).slice(0, 7); // Limit to 7 products

  return (
    <div className="featuredProducts">
      <div className="featuredProductsContainer">
        {/* Top Section */}
        <div className="featuredProductsHeader">
          <h2 className="featuredProductsHeaderTitle">Featured Products</h2>
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

        {/* Products Grid */}
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

        {/* Bottom Section */}
        <div className="featuredProductsBottom">
          <div className="leftSection">
            <p className="leftSectionTextOne">QUALITY &</p>
            <p className="leftSectionTextTwo">INNOVATION</p>
          </div>
          <div className="rightSection">
            <p className="rightSectionText">
              Protection Group Danmark manufactures and sells high-quality bulletproof and stab-proof vests,
              bulletproof helmets, hard armor plates, and other ballistic equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;