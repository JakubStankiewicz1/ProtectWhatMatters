import React from "react";
import "./productElement.css";
import { NavLink } from "react-router-dom";

const ProductElement = ({ id, image, name, price }) => {
  return (
    <NavLink to={`/product/${id}`} className="productElement">
      <img src={image} alt={name} className="productElementImage" />
      <div className="productElementDetails">
        <h3 className="productElementName">{name}</h3>
        <p className="productElementPrice">{price} EUR</p>
      </div>
    </NavLink>
  );
};

export default ProductElement;
