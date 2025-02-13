import React from "react";
import "./productCategories.css";
import assets from "../../assets/assets";

const ProductCategories = () => {
  return (
    <div className="productCategories">
      <div className="ProductCategoriesContainer">
        {/* Top Part */}
        <div className="ProductCategoriesContainerTopPart">
          <div className="ProductCategoriesContainerTopPartDotElement" />
          <p className="ProductCategoriesContainerTopPartText">
            PRODUCT CATEGORIES
          </p>
        </div>

        {/* Bottom Part */}
        <div className="ProductCategoriesContainerBottomPart">
          <div className="ProductCategoriesContainerTopPartContainer">
            {/* First Element */}
            <div className="ProductCategoriesContainerTopPartContainerFirstEle">
              <p className="ProductCategoriesContainerTopPartContainerText">
                BALLISTIC HELMETS
              </p>
              <p className="ProductCategoriesContainerTopPartContainerFirstEleNumber">
                4
              </p>
              <img
                src={assets.image1}
                alt=""
                className="productCategoriesImageOne"
              />
            </div>

            {/* Second Element */}
            <div className="ProductCategoriesContainerTopPartContainerSecondEle">
              <p className="ProductCategoriesContainerTopPartContainerText">
                BULLETPROOF VEST
              </p>
              <p className="ProductCategoriesContainerTopPartContainerFirstEleNumber">
                13
              </p>
              <img
                src={assets.image2}
                alt=""
                className="productCategoriesImageTwo"
              />
            </div>

            {/* Third Element */}
            <div className="ProductCategoriesContainerTopPartContainerThirdEle">
              <p className="ProductCategoriesContainerTopPartContainerText">
                CUT-RESISTANT GLOVES
              </p>
              <p className="ProductCategoriesContainerTopPartContainerFirstEleNumber">
                2
              </p>
              <img
                src={assets.image3}
                alt=""
                className="productCategoriesImageThree"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
