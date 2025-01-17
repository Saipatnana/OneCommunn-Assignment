import React from "react";
import InteriorDesigningImage from "../assets/InteriorDesigning.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import Slider from "react-slick";

// Custom Left Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 md:left-[-55px] left-[-30px] transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-400 transition"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <ChevronLeft size={20} />
  </button>
);

// Custom Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-[-20px] md:right-[-45px] transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-400 transition"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <ChevronRight size={20} />
  </button>
);

const InteriorDesigningList = [
  {
    id: 1,
    imageurl: InteriorDesigningImage,
  },
  { id: 2, imageurl: InteriorDesigningImage },
  { id: 3, imageurl: InteriorDesigningImage },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const InteriorDesigning = () => {
  return (
    <section className="bg-[#D3D3D3] flex flex-col items-center text-center px-5 md:px-40 lg:px-40 py-10">
      {/* Header */}
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Interior Designing
      </motion.h1>
      <motion.p
        className="text-gray-700 mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kitchen Interior - Let us help you design your kitchen. Leave the worry
        of mixing and matching furniture behind. Set up your space confidently
        by purchasing the complete look for a seamless experience.
      </motion.p>
      <motion.button
        className="bg-[#1B1B1B] text-white text-sm md:text-base px-6 py-2 rounded-lg my-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Know More
      </motion.button>

      {/* Slider */}
      <div className="relative w-full">
        <Slider {...settings}>
          {InteriorDesigningList.map((design, index) => (
            <motion.div
              key={index}
              className="p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={design.imageurl}
                alt={`Interior Design ${index + 1}`}
                className="rounded-md shadow-md w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InteriorDesigning;
