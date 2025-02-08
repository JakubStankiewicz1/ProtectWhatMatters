import React, { useEffect, useState } from "react";
import "./hardArmor.css";
import Fotter from "../../components/Fotter/Fotter";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";

const HardArmor = () => {
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
    <div className="hardArmor">
      <div className="hardArmorContainer">
        {/* First Part */}
        <div className="hardArmorContainerFirstPart">
          <div className="hardArmorContainerFirstPartHeading">
            <p className="hardArmorContainerFirstPartHeadingText">HARD ARMOR</p>
          </div>

          <p className="hardArmorContainerFirstPartText">
            A hard armor plate gives you extra protection against threats from powerful weapons like a rifle and armor piercing bullets. We offer 4
            different trauma plates to suit different needs: – PGD S-LW-ICW+ is our super lightweight model, which protects at NIJ level 3 ICW NIJ 3a
            soft armor – PGD LW + is our lightweight model, which protects at NIJ level 3. – PGD Berserker is our economical model that protects at
            NIJ level 3 and NIJ level 4. – PGD U-line is our top model, which protects at NIJ level 3++ and NIJ level 4.
          </p>
        </div>

        {/* Second Part */}
        <div className="hardArmorContainerSecondPart">
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

        {/* Third Part */}
        <div className="hardArmorContainerThirdPart">
          <div className="hardArmorContainerThirdPartOne">
            <p className="hardArmorContainerThirdPartOneHeading">SAPI AND ESAPI PLATES IN NIJ LEVEL 3 AND 4</p>
            <div className="hardArmorContainerThirdPartOneText">
              <p className="hardArmorContainerThirdPartOneTextOne">
                SAPI (Small Arms Protective Insert) plates are high-grade ceramic hard armor inserts originally designed for use by the United States
                Armed Forces. They offer effective protection at NIJ Level III, which means they are rated to stop most common handgun rounds and
                provide robust protection in combat scenarios. Since 2005, the U.S. military has largely transitioned to using ESAPI (Enhanced Small
                Arms Protective Insert) plates for even greater protection. ESAPI plates meet the requirements for NIJ Level IV protection, which
                includes resistance to armor-piercing rifle rounds, making them a preferred choice for those who may face higher-caliber threats.
              </p>
              <p className="hardArmorContainerThirdPartOneTextTwo">
                SAPI and ESAPI plates are designed for placement within plate carriers and can be worn on the front, back, and sides of the torso for
                optimal protection coverage. These plates, also referred to as trauma plates, bulletproof plates, or hard armor plates, provide a
                reliable line of protection against more powerful weaponry, including high-velocity rifles and penetrating rounds. Available in both
                NIJ Levels III and IV, they meet critical needs for military personnel, law enforcement, and individuals in high-risk environments.
              </p>
              <p className="hardArmorContainerThirdPartOneTextThree">
                These plates are manufactured from a range of high-performance materials, each selected for specific protective benefits. Common
                materials include ultra-high molecular weight polyethylene (UHMWPE), Dyneema, advanced ceramics, and various types of steel.
              </p>
              <ul className="hardArmorContainerThirdPartOneTextUl">
                <li className="hardArmorContainerThirdPartOneTextUlLi">UHMWPE and Dyneema offer lightweight and durable options</li>
                <li className="hardArmorContainerThirdPartOneTextUlLi">Ceramics and steel provide exceptional impact resistance and durability.</li>
              </ul>
              <p className="hardArmorContainerThirdPartOneTextFour">
                Each material has unique attributes that balance weight, durability, and protective strength, ensuring that all plates meet or exceed
                rigorous performance standards set by NIJ, such as standards 0101.04 and 0101.06, which dictate testing protocols for stopping power
                and resistance under multiple rounds and various projectile types.
              </p>
            </div>
          </div>

          <div className="hardArmorContainerThirdPartTwo">
            <p className="hardArmorContainerThirdPartTwoHeader">
              Our plates are available in two configurations: ICW (In Conjunction With) and SA (Stand-Alone).
            </p>

            <div className="hardArmorContainerThirdPartTwoText">
              <ul className="hardArmorContainerThirdPartTwoTextUl">
                <li className="hardArmorContainerThirdPartTwoTextUlLi">
                  ICW plates are designed to work in combination with soft armor layers, enhancing their protective capability while optimizing for
                  weight and flexibility.
                </li>
                <li className="hardArmorContainerThirdPartTwoTextUlLi">
                  SA plates, however, do not require additional soft armor and provide comprehensive protection on their own, making them a convenient
                  choice for streamlined armor setups.
                </li>
              </ul>
              <p className="hardArmorContainerThirdPartTwoTextOne">
                At PGD, we prioritize your safety by adhering to stringent testing protocols for all of our armor plates. Every SAPI and ESAPI plate
                undergoes rigorous testing to NIJ standard 0101.04 and 0101.06. Our testing is conducted at reputable facilities, including TNO in the
                Netherlands and Element Defense in the United States, ensuring that our products meet the highest levels of ballistic protection and
                performance. With these tests, you can trust that each plate you purchase has been verified for reliability and durability in
                real-world scenarios.
              </p>
            </div>
          </div>

          <div className="hardArmorContainerThirdPartThree">
            <p className="hardArmorContainerThirdPartThreeHeader">Sizes from 8×10 to 11×14 plate carriers</p>
            <div className="hardArmorContainerThirdPartThreeText">
              <p className="hardArmorContainerThirdPartThreeTextOne">
                Our ESAPI plates are available in multiple sizes to accommodate a variety of body types and operational needs. These plates come in
                the industry-standard sizes of 8×10, 10×12, and 11×14 inches, ensuring compatibility with a broad range of plate carriers.
              </p>
              <p className="hardArmorContainerThirdPartThreeTextTwo">
                The most commonly used size is 10×12 inches, providing optimal coverage while balancing weight and mobility. This standard size is
                widely recognized across military, law enforcement, and civilian applications for its effectiveness in both front and back placements.
                For individuals requiring additional coverage, the larger 11×14-inch plates are an excellent choice, offering extended protection for
                high-risk environments. The smaller 8×10-inch plates, on the other hand, provide a lightweight solution suitable for those seeking a
                lower profile or for smaller body frames.
              </p>
            </div>
          </div>

          <div className="hardArmorContainerThirdPartFour">
            <p className="hardArmorContainerThirdPartFourHeader">Protection level 3 and 4</p>

            <div className="hardArmorContainerThirdPartFourText">
              <p className="hardArmorContainerThirdPartFourTextOne">
                NIJ Level III and Level IV plates provide the highest levels of ballistic protection available. The key difference between these
                levels lies in the types of projectiles they are rated to stop.
              </p>

              <ul className="hardArmorContainerThirdPartFourTextUl">
                <li className="hardArmorContainerThirdPartFourTextUlLi">
                  Level III plates are designed to withstand most handgun rounds and are tested to NIJ standard 0101.06, specifically enduring up to
                  six shots from a 7.62×51mm cartridge.
                </li>
                <li className="hardArmorContainerThirdPartFourTextUlLi">
                  Level IV plates, on the other hand, offer enhanced protection against armor-piercing rifle rounds. These stand-alone plates meet NIJ
                  standard 0101.06 for Level IV and are tested to stop a single shot from a 7.62×63mm AP (armor-piercing) cartridge.
                </li>
              </ul>

              <p className="hardArmorContainerThirdPartFourTextTwo">
                It’s important to note that there is no “Level V” plate, despite some misleading claims found on certain websites. NIJ standards
                currently recognize only up to Level IV as the highest level of protection.
              </p>
            </div>
          </div>

          <div className="hardArmorContainerThirdPartFive">
            <p className="hardArmorContainerThirdPartFiveHeader">NIJ level III plates vs NIJ level IV plates</p>

            <div className="hardArmorContainerThirdPartFiveText">
              <p className="hardArmorContainerThirdPartFiveTextOne">
                When considering NIJ Level III and Level IV plates, understanding the specific testing standards is essential to evaluate their
                protective capabilities.
              </p>

              <ul className="hardArmorContainerThirdPartFiveTextUl">
                <li className="hardArmorContainerThirdPartFiveTextUlLi">
                  Level III plates are tested under controlled conditions using a 7.62mm FMJ (full metal jacket), steel-jacketed bullet, specifically
                  the U.S. M80 round. This bullet has a mass of 9.6 grams (147 grains) and travels at a velocity of 847 m/s ± 9.1 m/s (2780 ft/s ± 30
                  ft/s). These parameters ensure that Level III plates provide robust protection against high-velocity rounds typically encountered in
                  combat and high-risk situations.
                </li>
                <li className="hardArmorContainerThirdPartFiveTextUlLi">
                  Level IV plates undergo even more rigorous testing to meet the highest level of ballistic protection standards. They are evaluated
                  under conditioned conditions with a .30 caliber armor-piercing (AP) round, specifically the U.S. M2 AP bullet. This AP bullet has a
                  mass of 10.8 grams (166 grains) and a velocity of 878 m/s ± 9.1 m/s (2880 ft/s ± 30 ft/s). These specifications make Level IV plates
                  capable of stopping powerful armor-piercing rounds, a crucial feature for those facing extreme threats.
                </li>
              </ul>

              <p className="hardArmorContainerThirdPartFiveTextTwo">
                Each plate must clearly indicate whether it is SA (Stand-Alone) or ICW (In Conjunction With), allowing users to understand whether it
                requires additional soft armor for optimal protection. This labeling is mandatory for both NIJ Level III and IV plates to ensure
                transparency and user safety.
              </p>
              <p className="hardArmorContainerThirdPartFiveTextThree">
                Both NIJ Level III and IV plates are designed to meet or exceed NIJ standards, providing assurance that they have been tested for
                reliability under standardized conditions. Whether for military, law enforcement, or security applications, understanding the
                differences in testing and labeling helps users choose the appropriate level of protection to meet their specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default HardArmor;
