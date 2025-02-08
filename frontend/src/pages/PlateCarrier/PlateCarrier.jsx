import React, { useEffect, useState } from "react";
import "./plateCarrier.css";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";
import Fotter from "../../components/Fotter/Fotter";

const PlateCarrier = () => {
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
    <div className="plateCarrier">
      <div className="plateCarrierContainer">
        {/* Top Part */}
        <div className="plateCarrierContainerTopPart">
          <div className="plateCarrierContainerTopPartHeader">
            <p className="plateCarrierContainerTopPartHeaderText">PLATE CARRIER</p>
          </div>

          <p className="plateCarrierContainerTopPartText">
            Plate carriers are a preferred choice among military and law enforcement personnel worldwide due to their ability to hold hard armor
            plates. The plate carriers are designed to allow users to attach additional equipment such as pouches, radios, and medical kits via MOLLE
            webbing. A plate carrier enable customization for specific missions, balancing protection with mobility. It is lightweight yet durable.
            Plate carriers offer crucial protection for vital areas like the chest and back while ensuring that personnel can carry necessary gear for
            tactical operations.
          </p>
        </div>

        {/* Middle Part */}
        <div className="plateCarrierContainerMiddlePart">
          <div className="hardArmorContainerMiddlePart">
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
        <div className="plateCarrierContainerBottomPart">
          {/* First Contianer */}
          <div className="plateCarrierContainerBottomPartFirst">
            <div className="plateCarrierContainerBottomPartFirstHeader">
              <p className="plateCarrierContainerBottomPartFirstHeaderText">WHAT ARE PLATE CARRIERS?</p>
            </div>
            <p className="plateCarrierContainerBottomPartFirstText">
              Plate carriers are tactical vests designed to carry body armor plates, providing protection to the wearer in high-risk environments.
              Commonly used by military personnel, law enforcement, and security forces, plate carriers are a vital piece of equipment for those who
              face the risk of ballistic threats. They are also used in civilian contexts, such as by private security contractors or in certain
              survivalist communities. Unlike traditional body armor, which often incorporates soft armor panels, plate carriers are built to house
              hard ballistic plates, offering protection against rifle rounds and other high-velocity projectiles.
            </p>
          </div>

          {/* Second Container */}
          <div className="plateCarrierContainerBottomPartSecond">
            <div className="plateCarrierContainerBottomPartSecondHeader">
              <p className="plateCarrierContainerBottomPartSecondHeaderText">HOW DO PLATE CARRIERS WORK?</p>
            </div>
            <p className="plateCarrierContainerBottomPartSecondText">
              Plate carriers work by distributing the weight of the armor plates across the torso, ensuring that vital organs such as the heart and
              lungs are protected. The plates themselves are typically made from materials like ceramic, steel, or polyethylene, which are designed to
              absorb the impact of bullets. Modern plate carriers also offer modularity, allowing users to customize them with pouches, holsters, and
              other attachments based on their operational needs. This modularity makes them highly adaptable in various tactical situations, enabling
              users to carry additional gear like ammunition, first aid kits, or communication devices.
            </p>
          </div>

          {/* Third Container */}
          <div className="plateCarrierContainerBottomPartThirdContainer">
            <div className="plateCarrierContainerBottomPartThirdContainerHeader">
              <p className="plateCarrierContainerBottomPartThirdContainerHeaderText">
                WHAT FACTORS SHOULD BE CONSIDERED WHEN CHOOSING A PLATE CARRIER?
              </p>
            </div>

            <div className="plateCarrierContainerBottomPartThirdContainerText">
              <p className="plateCarrierContainerBottomPartThirdContainerTextOne">
                Several factors come into play when choosing a plate carrier, depending on the user’s needs and operational environment:
              </p>

              <ul className="plateCarrierContainerBottomPartThirdContainerTextUl">
                <li className="plateCarrierContainerBottomPartThirdContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Comfort and Fit:</p> Since plate carriers are worn for
                  extended periods, comfort is key. Many carriers are adjustable to ensure a snug fit without restricting movement.
                </li>
                <li className="plateCarrierContainerBottomPartThirdContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Weight Distribution:</p> Proper weight distribution is
                  important for reducing fatigue. High-quality carriers are designed to evenly spread the weight of the plates and gear, making it
                  easier for the wearer to move and react during tactical situations.
                </li>
                <li className="plateCarrierContainerBottomPartThirdContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Protection Level:</p> The level of protection required
                  will depend on the threat level. In some cases, soft armor may be sufficient, while in others, hard plates that meet high ballistic
                  standards, such as NIJ Level III or IV, will be necessary.
                </li>
                <li className="plateCarrierContainerBottomPartThirdContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Modularity:</p> The ability to customize the carrier by
                  adding or removing pouches and accessories is a significant factor. Different missions or operations may require different loadouts,
                  and a modular plate carrier allows users to quickly adjust their setup.
                </li>
              </ul>
            </div>
          </div>

          {/* Fourth Container */}
          <div className="plateCarrierContainerBottomPartFourthContainer">
            <div className="plateCarrierContainerBottomPartFourthContainerHeader">
              <p className="plateCarrierContainerBottomPartFourthContainerHeaderText">WHAT ARE THE KEY FEATURE OF A GOOD PLATE CARRIER?</p>
            </div>

            <div className="plateCarrierContainerBottomPartFourthContainerText">
              <p className="plateCarrierContainerBottomPartFourthContainerTextOne"></p>

              <ul className="plateCarrierContainerBottomPartFourthContainerTextUl">
                <li className="plateCarrierContainerBottomPartFourthContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Durability:</p> Plate carriers need to be made from
                  strong, durable materials like Cordura® nylon, which can withstand wear and tear in harsh environments.
                </li>

                <li className="plateCarrierContainerBottomPartFourthContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">MOLLE Webbing:</p> This is a common feature on tactical
                  gear, allowing users to attach a wide range of accessories and pouches.
                </li>

                <li className="plateCarrierContainerBottomPartFourthContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Breathability:</p> Since plate carriers can get hot,
                  especially when worn for extended periods, ventilation panels and moisture-wicking materials are essential to keeping the wearer
                  cool and comfortable.
                </li>

                <li className="plateCarrierContainerBottomPartFourthContainerTextUlLi">
                  <p className="plateCarrierContainerBottomPartThirdContainerTextUlLiThick">Quick-Release Mechanism:</p> In emergencies, it may be
                  necessary to quickly remove the plate carrier. Some models include quick-release mechanisms that allow for fast removal in critical
                  situations.
                </li>
              </ul>
            </div>
          </div>

          {/* Fifth Container */}
          <div className="plateCarrierContainerBottomPartFifth">
            <div className="plateCarrierContainerBottomPartFifthHeader">
              <p className="plateCarrierContainerBottomPartFifthHeaderText">WHY ARE PLATE CARRIERS IMPORTANT FOR TACTICAL USE?</p>
            </div>

            <p className="plateCarrierContainerBottomPartFifthText">
              Plate carriers provide crucial protection for individuals working in hostile or high-risk environments. Whether it’s a military
              operation, a law enforcement raid, or private security work, the ability to protect vital organs from ballistic threats can mean the
              difference between life and death. Beyond protection, plate carriers offer versatility, allowing individuals to carry essential gear in
              a convenient and accessible manner. Their importance cannot be overstated in any scenario where personal safety is paramount.
            </p>
          </div>
        </div>
      </div>

      <Fotter />
      
    </div>
  );
};

export default PlateCarrier;
