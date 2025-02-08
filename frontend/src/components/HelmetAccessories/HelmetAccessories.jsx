import React, { useEffect, useState } from "react";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";
import Fotter from "../Fotter/Fotter";
import "./helmetAccessories.css";

const HelmetAccessories = () => {
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
    <div className="helmetAccessories">
      <div className="helmetAccessoriesContainer">
        {/* First Part */}
        <div className="helmetAccessoriesContainerFirstPart">
          <div className="helmetAccessoriesContainerFirstPartHeading">
            <p className="helmetAccessoriesContainerFirstPartHeadingText">HELMET ACCESSORIES</p>
          </div>

          <p className="helmetAccessoriesContainerFirstPartText">
            Our ballistic helmet accessories are crafted to enhance the functionality, protection, and versatility of tactical helmets for military
            and law enforcement. Key accessories include visors for additional face protection and helmet covers to provide camouflage and safeguard
            the helmet’s surface. Rail systems allow for easy mounting of essential gear such as lights, cameras, and communication devices, improving
            mission effectiveness. Night vision mounts enable seamless integration of advanced vision systems, ensuring enhanced situational
            awareness. Additionally, our helmet liner and retention systems deliver superior comfort and stability during demanding operations. Each
            accessory is designed for durability and reliability, allowing users to customize their helmets to meet specific operational requirements
            with confidence.
          </p>
        </div>

        {/* Second Part */}
        <div className="helmetAccessoriesContainerSecondPart">
          <div className="helmetAccessoriesContainerMiddlePart">
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

        {/* Third Part */}
        <div className="helmetAccessoriesContainerThirdPart">
          {/* First Container */}
          <div className="helmetAccessoriesContainerThirdPartFirst">
            <p className="helmetAccessoriesContainerThirdPartFirstHeader">
              ARE YOU LOOKING FOR WAYS TO UPGRADE YOUR BALLISTIC HELMET FOR OPTIMAL PERFORMANCE AND PROTECTION?
            </p>
            <p className="helmetAccessoriesContainerThirdPartFirstText">
              Helmet accessories are essential for military personnel, law enforcement officers, and tactical operators seeking to enhance the
              functionality, comfort, and adaptability of their gear. From visors and helmet covers to night vision mounts and communication systems,
              the right accessories can significantly improve operational efficiency and safety.
            </p>
          </div>

          {/* Second Container */}
          <div className="helmetAccessoriesContainerThirdPartSecond">
            <p className="helmetAccessoriesContainerThirdPartSecondHeader">WHY CHOOSE HELMET ACCESSORIES FOR YOUR BALLISTIC HELMET?</p>
            <p className="helmetAccessoriesContainerThirdPartSecondTextOne">
              Helmet accessories aren’t just about adding extra features; they’re about tailoring your equipment to meet specific mission
              requirements.
            </p>
            <p className="helmetAccessoriesContainerThirdPartSecondTextTwo">Consider these key benefits:</p>
            <ul className="helmetAccessoriesContainerThirdPartSecondUl">
              <li className="helmetAccessoriesContainerThirdPartSecondUlLi">
                Enhanced protection: Visors provide extended face protection against shrapnel and debris – critical in high-risk environments.
              </li>
              <li className="helmetAccessoriesContainerThirdPartSecondUlLi">
                Camouflage and durability: Helmet covers offer essential camouflage while protecting the helmet from environmental wear and tear.
              </li>
            </ul>
          </div>

          {/* Third Container */}
          <div className="helmetAccessoriesContainerThirdPartThird">
            <p className="helmetAccessoriesContainerThirdPartThirdHeading">WHAT CAN RAIL SYSTEMS DO FOR YOU?</p>
            <p className="helmetAccessoriesContainerThirdPartThirdText">
              Rail systems are a game-changer for mounting tactical gear. Whether it’s attaching lights, cameras, or communication devices, rails
              offer flexibility to adapt your helmet to different mission scenarios. This allows for hands-free communication or enhanced night
              vision, improving situational awareness in critical moments.
            </p>
          </div>

          {/* Fourth Continaer */}
          <div className="helmetAccessoriesContainerThirdPartFourth">
            <p className="helmetAccessoriesContainerThirdPartFourthHeader">IS COMFORM A PRIORITY? YES ALWAYS!</p>
            <p className="helmetAccessoriesContainerThirdPartFourthTextOne">
              Wearing a helmet for extended periods can be demanding. That’s why investing in our quality PGD 10-pad liners and BOA fit dial retention
              systems is crucial:
            </p>
            <div className="helmetAccessoriesContainerThirdPartFourthUl">
              <li className="helmetAccessoriesContainerThirdPartFourthUlLi">
                Improved comfort: A well-designed liner offers enhanced impact protection and reduces fatigue during long operations.
              </li>
              <li className="helmetAccessoriesContainerThirdPartFourthUlLi">
                Increased stability: A secure retention system keeps the helmet firmly in place, even in intense situations.
              </li>
            </div>
          </div>

          {/* Fifth Continaer */}
          <div className="helmetAccessoriesContainerThirdPartFifth">
            <p className="helmetAccessoriesContainerThirdPartFifthHeader">WHAT MAKES OUR HELMET ACCESSORIES STAND OUT?</p>
            <p className="helmetAccessoriesContainerThirdPartFifthTextOne">
              We offer a comprehensive range of accessories meticulously engineered to withstand the toughest environments. Each product is crafted
              with precision to ensure durability, reliability, and ease of use. Whether you’re upgrading existing gear or customizing a new setup,
              our accessories allow you to create a helmet that fits your specific needs.
            </p>
            <p className="helmetAccessoriesContainerThirdPartFifthTextTwo">
              Choosing the right helmet accessories can make all the difference in the field. From increased protection with visors to enhanced
              functionality with rail systems and night vision mounts, our accessories provide comprehensive solutions for tactical and operational
              excellence. Explore our range and discover how you can elevate your ballistic helmet’s performance today!
            </p>
          </div>
        </div>

        {/* <Fotter /> */}
      </div>
      <Fotter />
    </div>
  );
};

export default HelmetAccessories;
