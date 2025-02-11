import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Shop from "./pages/Shop/Shop";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Account";
import AboutUsQualityAndInnovation from "./pages/AboutUsQualityAndInnovation/AboutUsQualityAndInnovation";
import BallisticHelmets from "./pages/BallisticHelmets/BallisticHelmets";
import HelmetAccessories from "./components/HelmetAccessories/HelmetAccessories";
import BulletproofVest from "./pages/BulletproofVest/BulletproofVest";
import HardArmor from "./pages/HardArmor/HardArmor";
import PlateCarrier from "./pages/PlateCarrier/PlateCarrier";
import StabProofVest from "./pages/StabProofVest/StabProofVest";
import CutResistantGloves from "./pages/CutResistantGloves/CutResistantGloves";
import FragTacticalVestAccessories from "./pages/FragTacticalVestAccessories/FragTacticalVestAccessories";
import TemplarsGear from "./pages/TemplarsGear/TemplarsGear";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="about-us/quality-innovation"
          element={<AboutUsQualityAndInnovation />}
        />
        <Route
          path="/product-category/ballistic-helmets/"
          element={<BallisticHelmets />}
        />
        <Route
          path="/product-category/helmet-accessories/"
          element={<HelmetAccessories />}
        />
        <Route
          path="/product-category/bulletproof-vest/"
          element={<BulletproofVest />}
        />
        <Route path="/product-category/hard-armor/" element={<HardArmor />} />
        <Route
          path="/product-category/plate-carrier/"
          element={<PlateCarrier />}
        />
        <Route
          path="/product-category/stab-proof-vest/"
          element={<StabProofVest />}
        />
        <Route
          path="/product-category/cut-resistant-gloves/"
          element={<CutResistantGloves />}
        />
        <Route
          path="/product-category/frag-tactical-vest-accessories/"
          element={<FragTacticalVestAccessories />}
        />
        <Route
          path="/product-category/templars-gear/"
          element={<TemplarsGear />}
        />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
