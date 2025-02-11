import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import productsData from "../../products.json";

const Product = ({}) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  const product = productsData.products.find((product) => product.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <div className="productContainer">
        {/* Top Part */}
        <div className="productContainerTop">
          <div className="productContainerTopLeft"></div>
          <div className="productContainerTopRight"></div>
        </div>

        {/* Middle Part */}
        <div className="productContainerMiddle">
          <h1>{product.name}</h1>
        </div>

        {/* Bottom Part */}
        <div className="productContainerBottom"></div>
      </div>
    </div>
  );
};

export default Product;
