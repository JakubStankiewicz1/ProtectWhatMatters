import React from 'react';
import assets from '../../assets/assets';
import HeroContact from '../../components/HeroContact/HeroContact';
import Fotter from '../../components/Fotter/Fotter';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <HeroContact />


        <div className="contactMiddleContainer">


            <div className="contactMiddleContainerFirst">
                <p className="contactMiddleContainerFirstLeft">ADDRESS</p>
                <div className="contactMiddleContainerFirstRight">
                    <p className="contactMiddleContainerFirstRightOne">PROTECTION GROUP DENMARK SHOLESALE APS</p>
                    <p className="contactMiddleContainerFirstRightTwo">Messingvej 13<br />DK-8940 Randers SV<br />Danmark</p>
                    <p className="contactMiddleContainerFirstRightThree">Telephone: +45 61274857</p>
                    <p className="contactMiddleContainerFirstRightFour">VAT number: 39606321</p>
                    <p className="contactMiddleContainerFirstRightFive">Please note that our headoffice is located in Denmark in the timezone UTC+1. We strive to reply within 24 hours from Monday-Friday.</p>
                </div>
            </div>


            <div className="contactMiddleContainerDiv" />


            <div className="contactMiddleContainerSecond">
                <p className="contactMiddleContainerFirstLeft">B2B / DIRECT INQUIRIES</p>
                <p className="contactMiddleContainerSecondText">For direct inquiries or B2B orders please contact jonas@protectiongroup.dk</p>
            </div>



            <div className="contactMiddleContainerDiv"></div>


            <div className="contactMiddleContainerThird">
                <p className="contactMiddleContainerFirstLeft">WEBSHOP</p>
                <p className="contactMiddleContainerThirdText">For any questions regarding the webshop or your order please contact michael@protectiongroup.dk</p>
            </div>



            <div className="contactMiddleContainerDiv"></div>


            <div className="contactMiddleContainerFourth">
                <div className="contactMiddleContainerFourthLeftPart">
                    <p className="contactMiddleContainerFourthLeftPartHeading">OTHER INQUIRIES</p>
                </div>

                <div className="contactMiddleContainerFourthRightPart">
                    <div className="contactMiddleContainerFourthRightPartContainer">

                        <div className="contactMiddleContainerFourthRightPartContainerName">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">YOUR NAME</p>
                            <input type="text" placeholder="Your name*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerNameCompany">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">COMPANY NAME</p>
                            <input type="text" placeholder="Company name*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerCountry">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">COUNTRY</p>
                            <input type="text" placeholder="Country*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContaineremail">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">EMAIL</p>
                            <input type="text" placeholder="Email address*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerPhone">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">PHONE</p>
                            <input type="text" placeholder="Your phone number*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerSubject">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">SUBJECT</p>
                            <input type="text" placeholder="Subject*" />
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerMessage">
                            <p className="contactMiddleContainerFourthRightPartContainerNameText">MESSAGE</p>
                            <textarea name="" id="" placeholder="Your message*" ></textarea>
                        </div>

                        <div className="contactMiddleContainerFourthRightPartContainerButton">
                            <button>SUBMIT</button>
                        </div>

                    </div>
                </div>

            </div>



        </div>


        <Fotter />
    </div>
  )
}

export default Contact