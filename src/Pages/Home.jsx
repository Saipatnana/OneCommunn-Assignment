import React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import ProductCategories from "../Components/ProductCategories/ProductCategories";
import Segments from "../Components/Segments";
import TrendingProducts from "../Components/TrendingProducts";
import InteriorDesigning from "../Components/InteriorDesigning";
import AboutUs from "../Components/AboutUs";
import OurProcess from "../Components/OurProcess";
import StandsOut from "../Components/StandsOut";
import Footer from "../Components/Footer";



const Home = () => {
  return (
    <main>
      <NavBar />
      <HeroSection/>
      <ProductCategories/>
      <Segments/>
      <TrendingProducts/>
      <InteriorDesigning/>
      <AboutUs/>
      <OurProcess/>
      <StandsOut/>
      <Footer/>
    </main>
  );
};

export default Home;
