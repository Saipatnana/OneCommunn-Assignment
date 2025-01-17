import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "../assets/hero_section_banner.png";

const HeroSection = () => {
  return (
    <motion.main
      className="flex justify-center px-5 mt-10"
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide down
      animate={{ opacity: 1, y: 0 }} // Fade in and slide up
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      <motion.img
        src={HeroBanner}
        className="max-w-full"
        initial={{ scale: 0.8, opacity: 0 }} // Start smaller and invisible
        animate={{ scale: 1, opacity: 1 }} // Grow to full size and become visible
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delay for staggered effect
      />
    </motion.main>
  );
};

export default HeroSection;
