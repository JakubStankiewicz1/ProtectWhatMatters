import React, { useState, useEffect } from "react";
import "./ballisticHelmets.css";
import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";
import Fotter from "../../components/Fotter/Fotter";

const BallisticHelmets = () => {
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
    <div className="ballisticHelmets">
      <div className="ballisticHelmetsContainer">
        {/* Top Part */}
        <div className="ballisticHelmetsContainerTopPart">
          <div className="ballisticHelmetsContainerTopPartTop">
            <p className="ballisticHelmetsContainerTopPartTopHeading">BALLISTIC HELMETS</p>
          </div>
          <div className="ballisticHelmetsContainerTopPartBottom">
            <p className="ballisticHelmetsContainerTopPartBottomText">
              PGD ballistic helmets are engineered to meet the highest industry standards. They are designed to withstand some of the most advanced
              handgun threats in the world. Our ballistic helmets use high-performance man-made aramid fiber from Kevlar, which is made by the leading
              European ballistic fiber manufacturer Dupont. We have conducted rigorous testing procedures to ensure that our products provide maximum
              protection for your head.
            </p>
          </div>
        </div>

        {/* Middle Part - Produkty */}
        <div className="ballisticHelmetsContainerMiddlePart">
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

        {/* Bottom Part */}
        <div className="ballisticHelmetsContainerBottomPart">
          {/* First Container */}
          <div className="ballisticHelmetsContainerBottomPartFirst">
            <p className="ballisticHelmetsContainerBottomPartFirstHeader">WHAT IS A TACTIVAL HELMET?</p>
            <p className="ballisticHelmetsContainerBottomPartFirstTextOne">
              A tactical helmet is designed to give protection in combat situations. Originally designed for the military it later found a way into
              law enforcement and similar branches. In the last century, its use has developed from stopping shrapnels to stopping gunfire.
            </p>
            <p className="ballisticHelmetsContainerBottomPartFirstTextTwo">
              In the 1970s Dupont introduced a lightweight fiber material called Kevlar, which is now synonymous with protective armor. Other
              manufacturers like Twaron fiber from Teijin is also popular.
            </p>
            <p className="ballisticHelmetsContainerBottomPartFirstTextThree">
              Modern helmets come with different paddings for comfort and a multitude of options and addons.
            </p>
          </div>

          {/* Second Container */}
          <div className="ballisticHelmetsContainerBottomPartSecondPart">
            <p className="ballisticHelmetsContainerBottomPartSecondPartHeader">TYPES OF TACTICAL HELMETS:</p>
            <ul className="ballisticHelmetsContainerBottomPartSecondPartUl">
              <li className="ballisticHelmetsContainerBottomPartSecondPartLi">
                PASGT (Personnel Armor System for Ground Troops) helmets: Traditional helmets used by military forces, offering basic ballistic
                protection.
              </li>
              <li className="ballisticHelmetsContainerBottomPartSecondPartLi">
                MICH/ARCH (Modular Integrated Communications Helmet / Advanced Combat Helmet): Modernized helmets that are lighter and provide
                improved ballistic protection and compatibility with communication devices.
              </li>
              <li className="ballisticHelmetsContainerBottomPartSecondPartLi">
                High-cut , low-cut and bump helmets: High-cut tactical helmets offer more space around the ears, allowing users to wear communication
                devices and ear protection. Low-cut helmets protect the ears. Bump helmets, on the other hand, are lightweight and designed for
                non-ballistic protection, offering impact resistance during training or low-risk operations.
              </li>
            </ul>
          </div>

          {/* Third Container */}
          <div className="ballisticHelmetsContainerBottomPartThirdPart">
            <p className="ballisticHelmetsContainerBottomPartThirdPartHeader">WHY WOULD YOU WANT A BALLISTIC HELMET?</p>
            <p className="ballisticHelmetsContainerBottomPartThirdPartTextOne">
              The primary users of tactical gear are military contractors who require reliable combat protection and are either responsible for
              supplying their own equipment or seek alternatives to standard-issue gear due to specific operational needs.
            </p>
            <p className="ballisticHelmetsContainerBottomPartThirdPartTextTwo">
              For civilians, tactical gear serves as a precautionary measure in situations such as natural disasters (e.g., tornadoes or hurricanes),
              unforeseen domestic or international conflicts, or any other critical emergencies. While some may view it as preparation for extreme
              scenarios, the underlying goal is to ensure safety and readiness in the face of potential hazards.
            </p>
          </div>

          {/* Fourth Container */}
          <div className="ballisticHelmetsContainerBottomPartFourthPart">
            <p className="ballisticHelmetsContainerBottomPartFourthPartHeader">WHAT IS THE BEST BALLISTIC HELMET</p>
            <p className="ballisticHelmetsContainerBottomPartFourthPartTextOne">
              The best ballistic helmet is the one that save your life and also lets you operate without restrictions. You only really need the
              security of a ballistic helmet once to make the purchase worthwhile. No bulletproof equipment is 100% bulletproof and modern helmets
              give different ranges of protection depending on what NIJ level they are tested at.
            </p>
            <p className="ballisticHelmetsContainerBottomPartFourthPartTextTwo">
              Helmets have a wide range of advantages such as protecting against a falling object, impacts from the edge of a rifle or hammer, freeing
              your hands by installing cameras, light etc. on the helmet, protecting against head accidents such as bumping heads together.
            </p>
            <p className="ballisticHelmetsContainerBottomPartFourthPartTextThree">
              For a long time, the culture in special forces, SWAT teams etc. saw tactical helmets as a weakness. If you needed protection from
              falling debris, then their cover was already blown and the mission failed. In this case, it was more important to get the hell out of
              there than wearing a helmet. They have eventually figured out that by mounting rails on the helmet, it is possible to add all sorts of
              useful stuff on the helmet such as light, cameras, communications etc.
            </p>
            <p className="ballisticHelmetsContainerBottomPartFourthPartTextFour">
              Also, you cannot underestimate the psychological effect of wearing a helmet. The confidence boost of feeling safer and knowing who your
              friends are might add to your performance.
            </p>
          </div>

          {/* Fifth Container */}
          <div className="ballisticHelmetsContainerBottomPartFifthPart">
            <p className="ballisticHelmetsContainerBottomPartFifthPartHeader">CAN MILITARY HELMETS STOP A GRENADE?</p>
            <div className="ballisticHelmetsContainerBottomPartFifthPartTextOne">
              Ballistic helmets are intended to prevent head injuries primarily from falling objects especially debris from explosions – think
              artillery, bombs, rockets, hand-thrown grenades, satchel charges, etc. Modern helmets like this one protect against certain types of
              handguns depending on the NIJ security level. Being hit by other types of blunt objects like the edge of a rifle, or the swing of a
              handheld hammer, or a bayonet would probably leave you with a headache or concussion, but let you survive if you are wearing a tactical
              helmet.
            </div>
          </div>

          {/* Sixth Container */}
          <div className="ballisticHelmetsContainerBottomPartSixthPart">
            <p className="ballisticHelmetsContainerBottomPartHeader">HOW GOOD IS KEVLAR FIBER?</p>
            <p className="ballisticHelmetsContainerBottomPartSixthPartTextOne">
              All our bulletproof helmets are made with aramid from Kevlar, which is a high-performance man-made fiber. The company behind this aramid
              is Dupont, which are a European company and a leading manufacturer of bulletproof aramids. This fiber is also very similar to the
              well-known Twaron aramid from Teijin, and the aramid fibers are very similar.
            </p>
            <p className="ballisticHelmetsContainerBottomPartSixthPartTextTwo">The Twaron fiber has a good resistance against:</p>
            <ul className="ballisticHelmetsContainerBottomPartSixthPartUl">
              <li className="ballisticHelmetsContainerBottomPartSixthPartUlLi">No melting point (meltdown of Kevlar fibers starts at 500° C)</li>
              <li className="ballisticHelmetsContainerBottomPartSixthPartUlLi">Strong against heat, sharp objects and chemical agents.</li>
              <li className="ballisticHelmetsContainerBottomPartSixthPartUlLi">No conductivity.</li>
              <li className="ballisticHelmetsContainerBottomPartSixthPartUlLi">
                It has a very high strength relative to the weight of the material.
              </li>
            </ul>

            <p className="ballisticHelmetsContainerBottomPartSixthPartTextThree">Compare our ballistic helmets.</p>
          </div>
        </div>

        <Fotter />
      </div>
    </div>
  );
};

export default BallisticHelmets;
