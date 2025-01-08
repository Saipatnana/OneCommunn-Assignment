import React from "react";
import InteriorDesigningImage from "../assets/InteriorDesigning.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


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
    className="absolute top-1/2  right-[-20px] md:right-[-45px] transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-400 transition"
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
      <h1 className="text-2xl font-bold mb-4">Interior Designing</h1>
      <p className="text-gray-700  mb-5">
        Kitchen Interior - Let us help you design your kitchen. Leave the worry
        of mixing and matching furniture behind. Set up your space confidently
        by purchasing the complete look for a seamless experience.
      </p>
      <button className="bg-[#1B1B1B] text-white text-sm md:text-base px-6 py-2 rounded-lg my-5">
        Know More
      </button>

      {/* Slider */}
      <div className="relative w-full">
        <Slider {...settings}>
          {InteriorDesigningList.map((design, index) => (
            <div key={index} className="p-2">
              <img
                src={design.imageurl}
                alt={`Interior Design ${index + 1}`}
                className="rounded-md shadow-md w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InteriorDesigning;
