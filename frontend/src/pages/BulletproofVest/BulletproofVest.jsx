import React, { useEffect, useState } from "react";
import Fotter from "../../components/Fotter/Fotter";

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";

import "./bulletproofVest.css";

const BulletproofVest = () => {
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
    <div className="bulletproofVest">
      <div className="bulletproofVestContainer">
        {/* Top Part */}
        <div className="bulletproofVestContainerTopPart">
          <div className="bulletproofVestContainerTopPartHeader">
            <p className="bulletproofVestContainerTopPartHeaderText">BULLETPROOF VEST</p>
          </div>

          <div className="bulletproofVestContainerTopPartTextCont">
            <p className="bulletproofVestContainerTopPartTextContText">
              A bulletproof vest from Protection Group Denmark is high quality and affordable. Our body armor is manufactured in Denmark and can be
              shipped to most of the world. All bulletproof vests use the best materials from the world’s leading manufacturers such as Dyneema from
              DSM, Kevlar from Dupont, Twaron from Teijin and Spectra Shield & Goldshield from Honeywell. The bulletproof vests follow the
              international standard NIJ (National Institute of Justice) to ensure your protection. They are tested in recognized laboratories as
              Element Defense in the United States and TNO in the Netherlands.
            </p>
          </div>
        </div>

        {/* Middle Part */}
        <div className="bulletproofVestContainerMiddlePart">
          <div className="bulletproofVestContainerMiddlePart">
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
        <div className="bulletproofVestContainerBottomPart">
          {/* First Container */}
          <div className="bulletproofVestContainerBottomPartFirst">
            <p className="bulletproofVestContainerBottomPartFirstHeader">WHAT IS A BULLETPROOF VEST?</p>

            <div className="bulletproofVestContainerBottomPartFirstText">
              <p className="bulletproofVestContainerBottomPartFirstTextOne bulletproofVestInsidePart">
                A bulletproof vest is also often known as body armor or a Kevlar vest. The vest protects the upper body from gunshots and other
                ballistic projectiles. Our bulletproof vests are made in Denmark and Europe and can legally be purchased from anywhere in Europe and
                the United States (except Connecticut, due to state laws). They are made to stop the latest and most advanced ballistic threats.
              </p>
            </div>
          </div>

          {/* Second Container */}
          <div className="bulletproofVestContainerBottomPartSecond">
            <p className="bulletproofVestContainerBottomPartSecondHeader">WHAT ARE BULLETPROOF VEST LEVELS?</p>

            <div className="bulletproofVestContainerBottomPartSecondText">
              <p className="bulletproofVestContainerBottomPartSecondTextOne">
                All our bulletproof solutions are as a minimum tested according to the international standard NIJ (National Institute of Justice) on
                recognized laboratories as AITEX in Spain and Element Defense in the United States.
              </p>
              <p className="bulletproofVestContainerBottomPartSecondTextOne">
                NIJ standard 0101.06 is the standard for a bulletproof vest, which means that the vest has been tested through strict testing methods
                in a professional laboratory. This ensures that our vests can stop the threats imposed by the NIJ.
              </p>
              <p className="bulletproofVestContainerBottomPartSecondTextOne">
                NIJ standard 0101.06 comes in 3 different threat levels, where all our bulletproof vests mainly are level 3a. This means that our body
                armor will stop all the threats below:
              </p>
            </div>

            <div className="bulletproofVestContainerBottomPartSecondTable">
              <div className="bulletproofVestContainerBottomPartSecondTableRowOne">
                <p className="bulletproofVestContainerBottomPartSecondTableRowOne1">NIJ standard 0101.06</p>
                <p className="bulletproofVestContainerBottomPartSecondTableRowOne2">Projectile</p>
                <p className="bulletproofVestContainerBottomPartSecondTableRowOne3">Velocity</p>
              </div>
              <div className="bulletproofVestContainerBottomPartSecondTableRowTwo">
                <p className="bulletproofVestContainerBottomPartSecondTableRowTwo1">Level IIA</p>
                <div className="bulletproofVestContainerBottomPartSecondTableRowTwo2">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowTwo2One">9mm FMJ RN, 8.0 g (124 gr)</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowTwo2Two">.40 S&W FMJ, 11.8 g (180 gr)</p>
                </div>
                <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowTwo3One">373 m/s ± 9.1 m/s</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowTwo3Two">352 m/s ± 9.1 m/s</p>
                </div>
              </div>

              <div className="bulletproofVestContainerBottomPartSecondTableRowThree">
                <p className="bulletproofVestContainerBottomPartSecondTableRowThree1">Level II</p>
                <div className="bulletproofVestContainerBottomPartSecondTableRowThree2">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowThree2One">9mm FMJ RN, 8.0 g (124 gr)</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowThree2Two">.357 Magnum JSP, 10.2 g (158 gr)</p>
                </div>
                <div className="bulletproofVestContainerBottomPartSecondTableRowThree3">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowThree3One">398 m/s ± 9.1 m/s</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowThree3Two">436 m/s ± 9.1 m/s</p>
                </div>
              </div>

              <div className="bulletproofVestContainerBottomPartSecondTableRowFour">
                <p className="bulletproofVestContainerBottomPartSecondTableRowFour1">Level IIIA</p>
                <div className="bulletproofVestContainerBottomPartSecondTableRowFour2">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowFour2One">.357 SIG FMJ FN, 8.1 g (125 gr)</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowFour2Two">.44 Magnum SJHP, 15.6 g (240 gr)</p>
                </div>
                <div className="bulletproofVestContainerBottomPartSecondTableRowFour3">
                  <p className="bulletproofVestContainerBottomPartSecondTableRowFour3One">448 m/s ± 9.1 m/s</p>
                  <div className="bulletproofVestContainerBottomPartSecondTableRowTwo3Div" />
                  <p className="bulletproofVestContainerBottomPartSecondTableRowFour3Two">436 m/s ± 9.1 m/s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Container */}
          <div className="bulletproofVestContainerBottomPartThird">
            <p className="bulletproofVestContainerBottomPartThirdHeader">CAN I GET A BULLETPROOF VEST LEVEL 5?</p>

            <div className="bulletproofVestContainerBottomPartThirdText">
              <p className="bulletproofVestContainerBottomPartThirdTextOne">
                No, it does not exist. Anyone claiming otherwise is not being truthful. NIJ Level 3A is the highest threat level available for
                bulletproof vests.
              </p>
            </div>
          </div>

          {/* Fourth Container */}
          <div className="bulletproofVestContainerBottomPartFourth">
            <p className="bulletproofVestContainerBottomPartFourthHeader">DO YOU HAVE BULLETPROOF VESTS WITH PLATES?</p>

            <div className="bulletproofVestContainerBottomPartFourthText">
              <p className="bulletproofVestContainerBottomPartFourthTextOne">
                Yes, we offer a range of various plates designed for use In Conjunction With (ICW) bulletproof vests. These plates provide added
                protection, including against rifle shots.
              </p>
            </div>
          </div>

          {/* Fifth Container */}
          <div className="bulletproofVestContainerBottomPartFifth">
            <p className="bulletproofVestContainerBottomPartFifthHeader">WHAT IS A BULLETPROOF VEST NOT A STAB-PROOF VEST?</p>

            <div className="bulletproofVestContainerBottomPartFifthText">
              <p className="bulletproofVestContainerBottomPartFifthTextOne">
                This is a common mistake. It is very important when buying a bulletproof vest that you decide whether it only should be bulletproof or
                bullet- and stab proof. Bulletproof vests are often more soft and flexible than bullet and stab proof vests. If the vest is stab proof
                it has to be tested against this threat, where these are the most commonly used standards for testing stab proof vests. The HOSDB and
                NIJ standard is very similar:
              </p>

              <ul className="bulletproofVestContainerBottomPartFifthTextUl">
                <li className="bulletproofVestContainerBottomPartFifthTextUl">
                  The British HODSB CAST standard; The knife threat is named KR (against knives) and the spike threat is named SP (against style).
                  KR1, 2 and 3 & SP1, 2 and 3 where level 3 is the highest.
                </li>
                <li className="bulletproofVestContainerBottomPartFifthTextUl">
                  The US NIJ 0115.00 standard; NIJ Level 1, 2 and 3 against edged blades (knives) and spikes.
                </li>
              </ul>

              <p className="bulletproofVestContainerBottomPartFifthTextTwo">
                Our bulletproof vests are tested per NIJ 115.00, and each product will state how many joules from a knife it can stop.
              </p>
              <p className="bulletproofVestContainerBottomPartFifthTextThree">See our stab-proof vests.</p>
            </div>
          </div>

          {/* Sixth Container */}
          <div className="bulletproofVestContainerBottomPartSixth">
            <p className="bulletproofVestContainerBottomPartSixthHeader">WHAT IS A KEVLAR VEST?</p>

            <div className="bulletproofVestContainerBottomPartSixthText">
              <p className="bulletproofVestContainerBottomPartSixthTextOne">
                Kevlar is a widely recognized material in body armor, known for its ability to reduce the impact of bullets. It is commonly used in
                bulletproof vests, ballistic helmets, stab-proof vests, and plate carriers. The U.S. military incorporates Kevlar in their PASGT
                helmets, while civilian uses include high heat-resistant uniforms for firefighters and body armor for police officers, security
                personnel, and tactical units like SWAT.
              </p>
              <p className="bulletproofVestContainerBottomPartSixthTextTwo">
                Kevlar was developed in the 1960s when DuPont sought a lightweight, stronger fiber for tires in anticipation of a gasoline shortage.
                During this research, Polish-American chemist Stephanie Kwolek discovered a polymer that formed a byproduct typically discarded.
                However, Kwolek persuaded technician Charles Smullen to test the material, and they were surprised to find that the fiber was far
                stronger than nylon. After several years of refinement, Kevlar was introduced in 1971. Today, it is used in a wide range of
                applications, from bicycle tires and marching drumsticks to bulletproof vests. A similar fiber, Twaron, is manufactured by Teijin.
              </p>
            </div>
          </div>

          {/* Seventh Container */}
          <div className="bulletproofVestContainerBottomPartSeventh">
            <p className="bulletproofVestContainerBottomPartSeventhHeader">IS IT ILLEGAR TO WEAR BODY ARMOR IN PUBLIC?</p>

            <div className="bulletproofVestContainerBottomPartSeventhText">
              <p className="bulletproofVestContainerBottomPartSeventhTextOne">
                In most cases, wearing body armor in public is legal, as individuals have the right to protect themselves and their families. Adults
                in both Europe and the United States are generally permitted to purchase bulletproof vests and other types of body armor. These items
                can be bought online in Europe and in most U.S. states, with the exception of Connecticut. However, it is illegal to wear body armor
                while carrying a dangerous weapon. Additionally, many states prohibit individuals with felony convictions from wearing body armor.
              </p>
              <p className="bulletproofVestContainerBottomPartSeventhTextTwo">
                It is the buyer’s responsibility to verify their legal eligibility to purchase and use body armor; this obligation does not rest with
                the retailer. This information is accurate to the best of our knowledge but is not, nor should it be considered, legal advice. For
                legal guidance, consult a licensed attorney in your state. Additionally, check with local government authorities or law enforcement
                for the most up-to-date regulations in your area.
              </p>
            </div>
          </div>

          {/* Eighth Container */}
          <div className="bulletproofVestContainerBottomPartEight">
            <p className="bulletproofVestContainerBottomPartEightHeader">CAN CIVILIANS BUY BULLETPFOOF VESTS?</p>

            <div className="bulletproofVestContainerBottomPartEight">
              <p className="bulletproofVestContainerBottomPartEightOne">
                In the United States, individuals have the right to protect themselves and their families, allowing them to purchase bulletproof vests
                without a background check or ID. Bulletproof vests can be bought in stores, at gun shows, through websites, over the phone, or via
                catalogs. The exception is Connecticut, where purchases must be made in person.
              </p>
              <p className="bulletproofVestContainerBottomPartEightTwo">
                It is the responsibility of the buyer to ascertain whether he is legally able to purchase and use body armor. This responsibility does
                not fall on the retailer. THIS DOES NOT CONSTITUTE NOR SHALL BE INTERPRETED AS LEGAL ADVICE. For legal advice contact a licensed
                attorney in your state. Contact your local government and/or law enforcement for the most current regulations in your area.
              </p>
            </div>
          </div>

          {/* Ninth Container */}
          <div className="bulletproofVestContainerBottomPartNinth">
            <p className="bulletproofVestContainerBottomPartNinthHeader">YOUR BULLETPROOF VEST MUST FIT PERFECTLY ON YOU</p>
            <div className="bulletproofVestContainerBottomPartNinthText">
              <p className="bulletproofVestContainerBottomPartNinthTextOne">
                To find the right size of our bulletproof vests, we recommend that you read our sizing guide for our bullet- and stab-proof vests. The
                guide is very simple, and if you have any questions, do not hesitate to contact us at +45 61274857 or michael@protectiongroup.dk.
              </p>
              <p className="bulletproofVestContainerBottomPartNinthTextTwo">
                All vests are manufactured under ISO 9001:2015 standards and tested according to various NIJ protection levels, as required for
                bulletproof and stab-proof products. Regular quality controls are conducted, including thorough testing of randomly selected vests
                from production to ensure consistent quality.
              </p>
              <p className="bulletproofVestContainerBottomPartNinthTextThree">
                NIJ standard 0101.04 is the standard for bulletproof vests, which means that the vest has been tested through strict testing methods
                in a professional laboratory. This ensures that our vests can stop the threats imposed by the NIJ.
              </p>
              <p className="bulletproofVestContainerBottomPartNinthTextFour">
                ISO 9001:2015 ensures that the bulletproof vests you buy from Protection Group Denmark are manufactured following strict quality
                standards. This ensures that the products will be uniform, and you get the best possible quality! Read more about ISO 9001:2015.
              </p>
              <p className="bulletproofVestContainerBottomPartNinthTextFive">
                DuPont™ and Kevlar® are trademarks or registered trademarks of E.I. du Pont de Nemours and Company.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default BulletproofVest;
