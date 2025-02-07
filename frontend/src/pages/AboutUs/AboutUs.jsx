import React, { useState } from "react";
import "./AboutUs.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import assets from "../../assets/assets";
import productsData from "../../products.json";
// import ProductElement from "../ProductElement/ProductElement";
import Fotter from "../../components/Fotter/Fotter";

import ProductElement from "../../components/ProductElement/ProductElement";

const AboutUs = () => {
  const [sortType, setSortType] = useState("default");

  // Sorting logic
  const sortedProducts = [...productsData.products]
    .sort((a, b) => {
      if (sortType === "price") return a.price - b.price;
      if (sortType === "date") return new Date(b.date_added) - new Date(a.date_added);
      return a.id - b.id; // Default sorting by ID
    })
    .slice(0, 7); // Limit to 7 products

  return (
    <div className="aboutUsContainer">
      <HeroAbout />

      {/* Part One */}
      <div className="aboutUsContainerPartOne">
        {/* Top Part*/}
        <div className="aboutUsContainerPartOneTopPart">
          <p className="aboutUsContainerPartOneTopPartHeading">BEST POSSIBLE QUALITY AT A PRICE WHERE EVERYONE CAN PARTICIPATE</p>
        </div>

        {/* Bottom Part */}
        <div className="aboutUsContainerPartOneBottomPart">
          <div className="aboutUsContainerPartOneBottomPartDiv" />

          <div className="aboutUsContainerPartOneBottomPartDivContainer">
            <div className="aboutUsContainerPartOneBottomPartDivContainerHeading">
              <p className="aboutUsContainerPartOneBottomPartDivContainerHeadingText">QUALITY & INNOVATION</p>
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerImage">
              <img src={assets.aboutShield} alt="" />
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerButton">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="aboutUsContainerPartOneBottomPartDiv" />

          <div className="aboutUsContainerPartOneBottomPartDivContainer">
            <div className="aboutUsContainerPartOneBottomPartDivContainerHeading">
              <p className="aboutUsContainerPartOneBottomPartDivContainerHeadingText">ISO CERTIFICATION</p>
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerImage">
              <img src={assets.aboutIso} alt="" />
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerButton">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="aboutUsContainerPartOneBottomPartDiv" />

          <div className="aboutUsContainerPartOneBottomPartDivContainer">
            <div className="aboutUsContainerPartOneBottomPartDivContainerHeading">
              <p className="aboutUsContainerPartOneBottomPartDivContainerHeadingText">BALLISTIC HELMETS</p>
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerImage">
              <img src={assets.aboutHelmet} alt="" />
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerButton">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="aboutUsContainerPartOneBottomPartDiv" />

          <div className="aboutUsContainerPartOneBottomPartDivContainer">
            <div className="aboutUsContainerPartOneBottomPartDivContainerHeading">
              <p className="aboutUsContainerPartOneBottomPartDivContainerHeadingText">SOFT ARMOR</p>
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerImage">
              <img src={assets.aboutSoftArmor} alt="" />
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerButton">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="aboutUsContainerPartOneBottomPartDiv" />

          <div className="aboutUsContainerPartOneBottomPartDivContainer">
            <div className="aboutUsContainerPartOneBottomPartDivContainerHeading">
              <p className="aboutUsContainerPartOneBottomPartDivContainerHeadingText">HARD ARMOR</p>
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerImage">
              <img src={assets.aboutHardArmor} alt="" />
            </div>

            <div className="aboutUsContainerPartOneBottomPartDivContainerButton">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="aboutUsContainerPartOneBottomPartDiv" />
        </div>

        {/* Third Part */}
        <div className="aboutUsContainerPartOneThird">
          {/* Left Part */}
          <div className="aboutUsContainerPartOneThirdLeftPart">
            <div className="aboutUsContainerPartOneThirdLeftPartHeading">
              <div className="aboutUsContainerPartOneThirdLeftPartHeadingTextOne">QUALITY &</div>
              <div className="aboutUsContainerPartOneThirdLeftPartHeadingTextTwo">INNOVATION</div>
            </div>

            {/* <p className="aboutUsContainerPartOneThirdLeftPartNormalText"></p> */}
            <div className="aboutUsContainerPartOneThirdLeftPartNormalContainer">
              <div className="aboutUsContainerPartOneThirdLeftPartNormalContainerDiv" />
              <div className="aboutUsContainerPartOneThirdLeftPartNormalContainerText">OUR VISION</div>
            </div>
          </div>

          {/* Right Part */}
          <div className="aboutUsContainerPartOneThirdRightPart">
            {/* First Part */}
            <div className="aboutUsContainerPartOneThirdRightPartFirst">
              <p className="aboutUsContainerPartOneThirdRightPartFirstText">
                We prioritize quality and innovation by utilizing cutting-edge materials and rigorous testing to ensure our products meet the highest
                safety standards.
              </p>
            </div>

            {/* Second Part */}
            <div className="aboutUsContainerPartOneThirdRightPartSecondPart">
              <p className="aboutUsContainerPartOneThirdRightPartSecondPartText">
                Our ballistic and stab-resistant gear is crafted with advanced technology, including lightweight yet durable materials like UHMWPE and
                Aramid fibers, providing superior protection without compromising comfort.
              </p>
            </div>

            {/* Third Part */}
            <div className="aboutUsContainerPartOneThirdRightPartThirdPart">
              <p className="aboutUsContainerPartOneThirdRightPartThirdPartText">
                We continuously innovate by integrating customer feedback and the latest industry advancements into our designs, resulting in
                protective equipment that is reliable, effective, and tailored to the needs of modern users.
              </p>
            </div>

            {/* Fourth Part */}
            <div className="aboutUsContainerPartOneThirdRightPartFourthPart">
              <button className="aboutUsContainerPartOneThirdRightPartFourthPartBtn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Part Two */}
      <div className="aboutUsContainerPartTwo">
        <img src={assets.aboutUs2} alt="" className="aboutUsContainerPartTwoImg" />
      </div>

      {/* Part Three */}
      <div className="aboutUsContainerPartThree">
        {/* Top Part */}
        <div className="aboutUsContainerPartThreeTopPart">
          {/* Left Side */}
          <div className="aboutUsContainerPartThreeTopPartLeft">
            <div className="aboutUsContainerPartThreeTopPartLeftHeading">
              <p className="aboutUsContainerPartThreeTopPartLeftHeadingTextOne">DANISH QUALITY</p>
              <p className="aboutUsContainerPartThreeTopPartLeftHeadingTextTwo">SINCE 2013</p>
            </div>

            <div className="aboutUsContainerPartThreeTopPartLeftTextCont">
              <div className="aboutUsContainerPartThreeTopPartLeftTextContDiv" />
              <p className="aboutUsContainerPartThreeTopPartLeftTextContText">PRODUCT QUALITY</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="aboutUsContainerPartThreeTopPartRight">
            <p className="aboutUsContainerPartThreeTopPartRightTextOne">
              Danish quality is synonymous with precision, reliability, and attention to detail, and here at Protection Group Denmark we embody these
              values in every product we create. We focus on using premium materials and cutting-edge technology which results in products that exceed
              international safety standards. This dedication to excellence reflects Denmark’s tradition of producing high-quality, durable, and
              innovative solutions in various industries.
            </p>
            <p className="aboutUsContainerPartThreeTopPartRightTextTwo">
              Protection Group Denmark is a Danish owned company founded in 2013, with its Headquarters in Randers, Denmark. We sell our products in
              over 30 countries to various civilian, military, law enforcement and rescue customers.
            </p>
          </div>
        </div>

        {/* Middle Part */}
        <div className="aboutUsContainerPartThreeMiddlePart">
          <div className="aboutUsContainerPartThreeMiddlePartCont">
            <img src={assets.aboutUs3} alt="" className="aboutUsContainerPartThreeMiddlePartContImgOne" />
            <img src={assets.aboutUs4} alt="" className="aboutUsContainerPartThreeMiddlePartContImgTwo" />
          </div>
        </div>

        {/* Bottom Part */}
        <div className="aboutUsContainerPartThreeBottomPart">
          <div className="aboutUsContainerPartThreeBottomPartTextContainer">
            <p className="aboutUsContainerPartThreeBottomPartTextContainerHeading">
              PGD'S HEADQUARTER IS BASED IN DENMARK. IT IS THE HEART OF OUR OPERATIONS,{" "}
              <p className="aboutUsContainerPartThreeBottomPartTextContainerHeadingColor">COMBINING RESEARCH, DEVELOPMENT, AND MANUFACTURING</p>. OUR
              DEDICATED TEAM WORKS TO ENSURE THAT SAFETY, PRECISION, AND COMMITMENT TO QUALITY COME TOGETHER SEAMLESSLY.
            </p>
          </div>

          <div className="aboutUsContainerPartThreeBottomPartInf">
            <div className="aboutUsContainerPartThreeBottomPartInfDiv" />
            <p className="aboutUsContainerPartThreeBottomPartInfText">BASED IN DENMARK</p>
          </div>
        </div>
      </div>

      {/* Part Four */}
      <div className="aboutUsContainerPartFour">
        <div className="aboutUsProductsContainer">
          {/* Top Section */}
          <div className="aboutUsProductsContainerHeader">
            <h2 className="aboutUsProductsContainerHeaderTitle">Featured Products</h2>
            <p className="aboutUsProductsContainerHeaderSortProductCount">Showing {sortedProducts.length} products</p>
            {/* <div className="aboutUsProductsContainerHeaderSort">
              <label className="aboutUsProductsContainerHeaderSortLabel">Sort by: </label>
              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="date">Newest</option>
              </select>
              
            </div> */}
          </div>

          {/* Products Grid */}
          <div className="aboutUsProductsContainerProductsGrid">
            {sortedProducts.map((product) => (
              <ProductElement key={product.id} image={product.images[0]} name={product.name} price={product.price} />
            ))}
          </div>
        </div>
      </div>

      {/* Part Five */}
      <div className="aboutUsContainerPartFive">
        <div className="aboutUsContainerPartFiveContainer">

          <img src={assets.aboutUs5} alt="" />

          <div className="aboutUsContainerPartFiveContainerTextContainer">
            <div className="aboutUsContainerPartFiveContainerTextContainerHeading">
              <p className="aboutUsContainerPartFiveContainerTextContainerHeadingOne">READ ABOUT</p>
              <p className="aboutUsContainerPartFiveContainerTextContainerHeadingOne">ALL OF OUR</p>
              <p className="aboutUsContainerPartFiveContainerTextContainerHeadingOne">PRODUCTS</p>
            </div>

            <div className="aboutUsContainerPartFiveContainerTextContainerTextMore">
              <p className="aboutUsContainerPartFiveContainerTextContainerTextMoreText">
                Do you want to read about the details, product features, descriptions, graphics and much more?
              </p>
            </div>

            <div className="aboutUsContainerPartFiveContainerTextContainerButton">
              <button className="aboutUsContainerPartFiveContainerTextContainerButtonBtn">SHOP NOW</button>
            </div>
          </div>

        </div>
      </div>


      <div className="aboutUsContainerDivElementBottomFot" />

      <Fotter />
    </div>
  );
};

export default AboutUs;
