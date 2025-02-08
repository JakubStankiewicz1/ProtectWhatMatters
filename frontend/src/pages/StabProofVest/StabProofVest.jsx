import React from 'react';
import "./stabProofVest.css";
import Fotter from '../../components/Fotter/Fotter';

import productsData from "../../products.json";
import ProductElement from "../../components/ProductElement/ProductElement";

const StabProofVest = () => {

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
    <div className="stabProofVest">

        <div className="stabProofVestContainer">
            {/* First Part */}
            <div className="stabProofVestContainerFirst">
                <div className="stabProofVestContainerFirstHeader">
                    <p className="stabProofVestContainerFirstHeaderText">
                        STAB-PROOF VEST
                    </p>
                </div>

                <p className="stabProofVestContainerFirstTextOne">

                Our stab-proof vests are lightweight, highly protective and easy to conceal for maximum comfort and protection. We have taken every detail into account in producing these designs, so you will have unlimited mobility, total discretion and protection from stabbing and spikes up to NIJ level 3.
<br />
They are commonly worn by a wide range of professions like police officers, paramedics, door supervisors/bouncers and security staff.
<br />

Stab vests are made to protect against threats from screwdrivers, needles, knives, ice picks etc. Our stab proof vests are blunt trauma resistant to hits, batons and other blunt objects. This is unique for a stab-proof vest.


                </p>
            </div>

            {/* Second Part */}
            <div className="stabProofVestContainerSecond">

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
            <div className="stabProofVestContainerThird">


                {/* First Container */}
                <div className="stabProofVestContainerThirdFirst">
                    <div className="stabProofVestContainerThirdFirstHeader">
                        <p className="stabProofVestContainerThirdFirstHeaderText">
                            WHAT IS A STAB-PROOF VEST?
                        </p>
                    </div>

                    <p className="stabProofVestContainerThirdFirstText">
                    A stab-proof vest, often referred to simply as a “stab vest,” is a specially reinforced piece of body armor designed to protect against knife attacks. Unlike traditional ballistic vests, stab-proof vests are engineered to resist penetration from sharp-edged weapons, providing critical protection for vulnerable areas such as the chest, back, and sides.


                    </p>
                </div>

                {/* Second Container */}
                <div className="stabProofVestContainerThirdSecond">
                    <div className="stabProofVestContainerThirdSecondHeader">
                        <p className="stabProofVestContainerThirdSecondHeaderText">
                            DO STAB-PROOF VEST WORK?
                        </p>
                    </div>

                    <div className="stabProofVestContainerThirdSecondText">
                        <p className="stabProofVestContainerThirdSecondTextOne">Stab-proof vests are made to offer protection against stabbing with sharp-tipped objects such as needles, knives and slashes. They are designed to prevent serious injury by prohibiting knife penetration beyond a few millimetres.

</p>
                        <p className="stabProofVestContainerThirdSecondTextTwo">Furthermore, it will also protect against punches and batons.

</p>
                    </div>
                </div>

                {/* Third Container */}
                <div className="stabProofVestContainerThirdThird">
                    <div className="stabProofVestContainerThirdThirdHeader">
                        <p className="stabProofVestContainerThirdThirdHeaderText">
                            CAN A STAB-PROOF VEST STOP A BULLET?
                        </p>
                    </div>

                    <div className="stabProofVestContainerThirdThirdText">
                        <p className="stabProofVestContainerThirdThirdTextOne">Stab-proof vests are specifically engineered to protect against knife attacks and other puncture threats. However, they offer minimal to no protection against firearms, particularly when it comes to high-caliber rounds.

</p>
                        <p className="stabProofVestContainerThirdThirdTextTwo">Conversely, most bulletproof vests are optimized to stop projectiles from firearms and may not effectively resist penetration from sharp or pointed weapons, such as knives or spikes. The materials and construction used in bulletproof vests focus on halting the velocity and force of bullets but may lack the necessary reinforcements to prevent penetration from piercing weapons.

</p>
                        <p className="stabProofVestContainerThirdThirdTextThree">For individuals seeking comprehensive protection from both firearm and stabbing threats, we recommend the PGD ULTRA. This vest combines stab-resistant and bulletproof materials, offering dual protection in a single, versatile piece of body armor. The PGD ULTRA is ideal for those in high-risk professions where both ballistic and stab threats are present, delivering peace of mind through advanced, multi-threat protection.

</p>
                    </div>
                </div>




                {/* Fourth Container */}
                <div className="stabProofVestContainerThirdFourth">
                    <div className="stabProofVestContainerThirdFourthHeader">
                        <div className="stabProofVestContainerThirdFourthHeaderText">
                            DO POLICE WEAR STAB-PROOF VESTS?
                        </div>
                    </div>

                    <p className="stabProofVestContainerThirdFourthText">
                    Many professions wear stab vests. Police officers are one of them, but it is also very common for paramedics, security staff, traffic wardens, environmental wardens, customs officers, immigration officers, bailiffs, cash in transit officers, door supervisors/bouncers, or anyone who may be under threat, to wear a stab vest.


                    </p>
                </div>





                {/* Fifth Container */}
                <div className="stabProofVestContainerThirdFifth">
                    <div className="stabProofVestContainerThirdFifthHeader">
                        <p className="stabProofVestContainerThirdFifthHeaderText">
                            DO STAB-PROOF VESTS EXPIRE?
                        </p>
                    </div>

                    <p className="stabProofVestContainerThirdFifthText">
                    You should always look the vest carefully over for signs of damage – tears, smells, burns and creases – before you use it. Our PGD Exoskeleton stab vest uses aluminium instead of aramid fibre, so the material doesn’t expire. Properly taken care of, the vest should last five years.


                    </p>
                </div>







                {/* Sixth Container */}
                <div className="stabProofVestContainerThirdSixth">
                    <div className="stabProofVestContainerThirdSixthHeader">
                        <p className="stabProofVestContainerThirdSixthHeaderText">
                            DO STAB-PROOF VESTS EXPIRE?
                        </p>
                    </div>

                    <div className="stabProofVestContainerThirdSixthText">
                        <p className="stabProofVestContainerThirdSixthTextOne">Please educate yourself about the legality and restrictions on buying, owning and wearing body armor in your area, state or country. It is your responsibility to uphold the law. Here are a few examples from around the world:

</p>
                        <p className="stabProofVestContainerThirdSixthTextTwo">In Australia, it is illegal to possess body armor without authorisation in South Australia, Victoria, Northern Territory, ACT, Queensland and New South Wales.

</p>
                        <p className="stabProofVestContainerThirdSixthTextThree">In the Canadian provinces of Alberta, British Columbia, Manitoba and Nova Scotia a licence is required to possess body armor, though there are no such restrictions in the rest of the country.

</p>
                        <p className="stabProofVestContainerThirdSixthTextFour">In the European Union, ballistic protection that is considered ‘for main military usage’ is restricted to civilians.

</p>
                        <p className="stabProofVestContainerThirdSixthTextFive">In the United Kingdom, there are – pre Brexit – currently no legal restrictions on the purchase and ownership of body armor.

</p>
                        <p className="stabProofVestContainerThirdSixthTextSix">In the United States, it is legal to purchase and possess body armor, except for New York, Kentucky and Louisiana.

</p>
                        <p className="stabProofVestContainerThirdSixthTextSeven">We don’t ship body armor to Connecticut because we are an online shop and body armor cannot be purchased online, by mail or over the phone.

</p>
                        <p className="stabProofVestContainerThirdSixthTextEight">When you carry body armor you are likely to attract attention from civilians and law enforcement because they might think you will cause danger to yourself or others. Always abide by the rules, regulations and law enforcement.

</p>
                        <p className="stabProofVestContainerThirdSixthTextNine">Keep in mind that this is not to be considered legal advice nor is it an exhaustive list of all body armour regulations and laws in existence.

</p>
                    </div>
                </div>











                {/* Seventh Container */}
                <div className="stabProofVestContainerThirdSeventh">

                    <div className="stabProofVestContainerThirdSeventhHeader">
                        <p className="stabProofVestContainerThirdSeventhHeaderText">
                            WHAT DOES IT MEAN, THAT THE STAB-PROOF VEST IS CERTIFIED?
                        </p>
                    </div>

                    <div className="stabProofVestContainerThirdSeventhText">
                        <p className="stabProofVestContainerThirdSeventhTextOne">Our stab-proof vests undergo extensive testing in professional laboratories to ensure reliable, high-level protection against stabbing threats. This testing involves specialized equipment that drops a knife blade onto the vest with controlled, precise force. The testing simulates realistic attack conditions, with impact energy measured in joules – a standard unit for evaluating stab resistance.

</p>
                        <p className="stabProofVestContainerThirdSeventhTextOne">The initial test applies a pressure of 24 joules, followed by a more rigorous test at 36 joules, and each pressure level is applied multiple times to verify the vest’s durability. To offer a clear perspective, 24 joules equates to the force of dropping a 1.9 kg weight from a height of 1.93 meters. This force is precisely what the vest must withstand without allowing significant penetration, ensuring it meets stringent safety standards.

</p>
                        <p className="stabProofVestContainerThirdSeventhTextOne">At 24 joules, the knife should not penetrate the vest by more than 7 mm. At 36 joules, the penetration depth should not exceed 20 mm. This controlled depth ensures maximum safety, protecting the wearer from serious injury. In addition to knives, our stab-proof vests are also tested to resist other sharp objects such as screwdrivers, needles, and ice picks.

</p>
                        <p className="stabProofVestContainerThirdSeventhTextOne">To ensure the highest quality, our products are tested both internally and by external laboratories. This dual approach guarantees that each vest meets our rigorous safety standards, providing reliable, tested protection you can trust.

</p>
                    </div>
                </div>
            </div>











        </div>

        
        <Fotter />
        
    </div>
  )
}

export default StabProofVest