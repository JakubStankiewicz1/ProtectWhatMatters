import React from 'react';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import "./app.css";
import Shop from './pages/Shop/Shop';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Account from './pages/Account/Account';
import AboutUsQualityAndInnovation from './pages/AboutUsQualityAndInnovation/AboutUsQualityAndInnovation';

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
        <Route path="about-us/quality-innovation" element={<AboutUsQualityAndInnovation />} />
      </Routes>

    </div>
  )
}

export default App