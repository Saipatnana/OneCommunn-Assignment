import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "react-multi-carousel/lib/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./ProductCategories.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LivingRoom from "../../assets/Living_Room.png";
import Bedroom from "../../assets/Bedroom.png";
import Dinning from "../../assets/Dining.png";
import Office from "../../assets/Office.png";
import Storage from "../../assets/Storage.png";
import StudyRoom from "../../assets/Study_Room.png";

const categoriesList = [
  { id: 1, name: "Living Room", image_Url: LivingRoom },
  { id: 2, name: "Dining", image_Url: Dinning },
  { id: 3, name: "Bedroom", image_Url: Bedroom },
  { id: 4, name: "Office", image_Url: Office },
  { id: 5, name: "Storage", image_Url: Storage },
  { id: 6, name: "Study Room", image_Url: StudyRoom },
  { id: 7, name: "Study Room", image_Url: StudyRoom },
];

// Custom Left Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <ChevronLeft />
    </button>
  );
};

// Custom Right Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next-arrow" onClick={onClick}>
      <ChevronRight />
    </button>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024, // Tablet and smaller
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile landscape and smaller
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Mobile portrait and smaller
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductCategories = () => {
  return (
    <motion.section
      className="flex items-center flex-col px-5 md:px-20 relative my-10"
      initial={{ opacity: 0, y: 50 }} // Section starts hidden and slides up
      animate={{ opacity: 1, y: 0 }} // Fades in and slides into position
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="text-xl font-bold my-5">Product Categories</h1>
      <div className="relative w-full">
        <Slider {...settings}>
          {categoriesList.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#D3D3D3] rounded-md p-5 flex items-center justify-center flex-col h-52 mx-2 gap-5"
              initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
              whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
              viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <p className="text-lg font-bold">{category.name}</p>
              <motion.img
                src={category.image_Url}
                alt={category.name}
                className="h-32 w-auto object-contain"
                whileHover={{ scale: 1.1 }} // Slight zoom on hover
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default ProductCategories;
