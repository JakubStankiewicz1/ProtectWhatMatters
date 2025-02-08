import React, { useEffect, useState } from "react";
import "./templarsGear.css";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";

const TemplarsGear = () => {
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
    <div className="templarsGear">
      <div className="templarsGearContainer">
        {/* Top Part */}
        <div className="templarsGearContainerTop">
          <div className="templarsGearContainerTopHeader">
            <p className="templarsGearContainerTopHeaderText">TEAMPLARS GEAR</p>
          </div>

          <p className="templarsGearContainerTopText">
            Protection Group Denmark proudly partners with Templars Gear, a well-known name in tactical equipment, to provide high-quality, durable
            soft armor solutions tailored to their exacting standards. This collaboration ultimately benefits end-users by offering a combination of
            Templars Gear’s tactical craftsmanship and PGD’s superior ballistic protection, providing a versatile, effective, and trusted solution in
            high-risk environments. By manufacturing soft armor inserts specifically designed for Templars Gear’s tactical vests and carriers, PGD
            ensures that their armor offers enhanced protection, comfort, and adaptability to meet the demands of modern military, law enforcement,
            and security professionals.
          </p>
        </div>

        {/* Middle Part */}
        <div className="templarsGearContainerMiddle">
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
        <div className="templarsGearContainerBottom">
          {/* First Container */}
          <div className="templarsGearContainerBottomFirst">
            <div className="templarsGearContainerBottomFirstHeader">
              <p className="templarsGearContainerBottomFirstHeaderText">SOFT ARMOR FOR TEMPLARS GEAR</p>
            </div>

            <div className="templarsGearContainerBottomFirstText">
              <p className="templarsGearContainerBottomFirstTextOne">
                At PGD, we are committed to delivering state-of-the-art protective solutions designed to meet the demands of modern tactical
                operations. As a trusted manufacturer, we are proud to produce high-quality soft armor panels for Templars Gear, a renowned brand
                recognized for its innovative tactical equipment.
              </p>
              <p className="templarsGearContainerBottomFirstTextTwo">
                We supply a versatile selection of nine soft armor sets specifically designed to integrate with Templars Gear, providing tailored
                protection options for different operational demands:
              </p>
              <ul className="templarsGearContainerBottomFirstTextUl">
                <li className="templarsGearContainerBottomFirstTextUlLi">KSAV Koursores</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">CIBV Cataphract</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">CIBV Cataphract Duty</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">Biceps Protection</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">Collar and Throat</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">Cummerbund</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">Groin Protection</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">Throat Protection</li>
                <li className="templarsGearContainerBottomFirstTextUlLi">PT1 GEN2 Belt Protection</li>
              </ul>

              <p className="templarsGearContainerBottomFirstTextThree">
                Each option complements Templars Gear, allowing operatives to customize their armor setups for optimal protection in diverse field
                conditions.
              </p>
            </div>
          </div>

          {/* Second Container */}
          <div className="templarsGearContainerBottomSecond">
            <div className="templarsGearContainerBottomSecondHeader">
              <p className="templarsGearContainerBottomSecondHeaderText">PGD DELTA SOFT ARMOR NIJ IIIA</p>
            </div>

            <div className="templarsGearContainerBottomSecondText">
              <p className="templarsGearContainerBottomSecondTextOne">
                We understand that tactical gear needs to be more than just protective; it must also be functional and comfortable for the wearer. Our
                soft armor panels are engineered to integrate seamlessly into Templars Gear’s plate carriers and tactical vests, providing optimal
                coverage without compromising mobility. With a slim and ergonomic profile, the panels allow for a full range of motion, making them
                ideal for operators who require agility and efficiency in high-pressure situations.
              </p>
              <p className="templarsGearContainerBottomSecondTextTwo">
                The DELTA IIIA+55J soft armor is a high-performance protective solution, designed to be only 4.9 mm thick and extremely flexible.
                Manufactured entirely in Denmark at our ISO 9001:2015 certified facility, it is constructed with Honeywell Goldshield, offering
                lightweight yet robust protection. This soft armor meets NIJ Standard 0101.04 IIIA, providing protection against threats such as .44
                Magnum, 9 mm rounds, and fragmentation protection up to 608 m/s in accordance with STANAG 2920. Additionally, it safeguards against
                knife attacks, with resistance up to 55 joules from the S1 blade, as specified by NIJ Standard 0115.00. The armor is encased in a
                waterproof TPU seal, ensuring complete protection from liquids, including water and sweat, to maintain its integrity in all
                conditions.
              </p>
              <p className="templarsGearContainerBottomSecondTextThree">
                The soft armor panels are our very own PGD DELTA soft armor designed and manufactured in Denmark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplarsGear;
