import React from 'react';
import assets from '../../assets/assets';
import Fotter from '../../components/Fotter/Fotter';
import "./account.css";

const Account = () => {
  return (
    <div className="account">

        <div className="accountContainer">

            {/* Top Part */}
            <div className="accountContainerTopPart">
                {/* Left Part */}
                <div className="accountContainerTopPartLeft">
                    <img src={assets.account} alt="" className="accountContainerTopPartLeftImage" />
                </div>

                {/* Right Part */}
                <div className="accountContainerTopPartRight">



                    {/* First Part */}
                    <div className="accountContainerTopPartRightOne">

                        <p className="accountContainerTopPartRightOneTextOne">ACCOUNT</p>
                        <p className="accountContainerTopPartRightOneTextTwo">LOGIN</p>
                        <div className="accountContainerTopPartRightOneInpOne">
                            <p className="accountContainerTopPartRightOneInpOneText">Username or email address *</p>
                            <input type="text" />
                        </div>
                        <div className="accountContainerTopPartRightOneInpTwo">
                            <p className="accountContainerTopPartRightOneInpTwoText">Password *</p>
                            <input type="password" />
                        </div>
                        <div className="accountContainerTopPartRightOneCheckbox">
                            <input type="checkbox" />
                            <p className="accountContainerTopPartRightOneCheckboxText">Remember me</p>
                        </div>
                        <div className="accountContainerTopPartRightOneButton">
                            <button className="accountContainerTopPartRightOneButtonBtn">LOG IN</button>
                        </div>
                        <div className="accountContainerTopPartRightOneLostPass">
                            <p className="accountContainerTopPartRightOneLostPassText"></p>
                        </div>

                    </div>

                    {/* Second Part */}
                    <div className="accountContainerTopPartRightSecond">

                        <div className="accountContainerTopPartRightSecondHeading">
                            <p className="accountContainerTopPartRightSecondHeadingText">REGISTER</p>
                        </div>

                        <div className="accountContainerTopPartRightSecondEmailDiv">
                            <p className="accountContainerTopPartRightSecondEmailDivText">Email address *</p>
                            <input type="email" />
                        </div>

                        <div className="accountContainerTopPartRightSecondTextContainer">
                            <p className="accountContainerTopPartRightSecondTextContainerTextOne">A link to set a new password will be sent to your email address.</p>
                            <p className="accountContainerTopPartRightSecondTextContainerTextTwo">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our Privacy policy.</p>
                        </div>

                        <div className="accountContainerTopPartRightSecondButtonContainer">
                            <button className="accountContainerTopPartRightSecondButtonContainerBtn">REGISTER</button>
                        </div>

                    </div>
                    
                </div>
            </div>

            {/* Bottom Part */}
            <div className="accountContainerBottomPart">
                <Fotter />
            </div>

        </div>
        
    </div>
  )
}

export default Account