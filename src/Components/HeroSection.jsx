import React from "react";
import HeroBanner from '../assets/hero_section_banner.png'

const HeroSection = () => {
  return (
    <main className="flex justify-center px-5 mt-10">
      <img src={HeroBanner} className="max-w-full"/>
    </main>
  );
};

export default HeroSection;
