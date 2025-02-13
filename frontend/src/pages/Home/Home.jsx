import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import AboutUs from "../../components/AboutUs/AboutUs";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import LatestArrivals from "../../components/LatestArrivals/LatestArrivals";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Fotter from "../../components/Fotter/Fotter";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <ProductCategories />
      <LatestArrivals />
      <SocialMedia />
      <Fotter />
    </div>
  );
};

export default Home;
