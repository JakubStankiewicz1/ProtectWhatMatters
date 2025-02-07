import React from "react";
import "./productElement.css";

const ProductElement = ({ image, name, price }) => {
  return (
    <div className="productElement">
      <img src={image} alt={name} className="productElementImage" />
      <div className="productElementDetails">
        <h3 className="productElementName">{name}</h3>
        <p className="productElementPrice">{price} EUR</p>
      </div>
    </div>
  );
};

export default ProductElement;
