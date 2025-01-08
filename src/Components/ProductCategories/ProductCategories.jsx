import React from "react";
import "react-multi-carousel/lib/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./ProductCategories.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//     slidesToSlide: 6,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2,
//     slidesToSlide: 1,
//   },
// };

const categoriesList = [
  { id: 1, name: "Living Room", image_Url: "./src/assets/Living_Room.png" },
  { id: 2, name: "Dining", image_Url: "./src/assets/Dining.png" },
  { id: 3, name: "Bedroom", image_Url: "./src/assets/Bedroom.png" },
  { id: 4, name: "Office", image_Url: "./src/assets/Office.png" },
  { id: 5, name: "Storage", image_Url: "./src/assets/Storage.png" },
  { id: 6, name: "Study Room", image_Url: "./src/assets/Study_Room.png" },
  { id: 7, name: "Study Room", image_Url: "./src/assets/Study_Room.png" },
];

// Custom Left Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <ChevronLeft/>
    </button>
  );
};

// Custom Right Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next-arrow" onClick={onClick}>
     <ChevronRight/>
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
    <section className="flex items-center flex-col px-5 md:px-20 relative my-10">
      <h1 className="text-xl font-bold my-5">Product Categories</h1>
      <div className="relative w-full">
        <Slider {...settings}>
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="bg-[#D3D3D3] rounded-md p-5 flex items-center justify-center flex-col h-52 mx-2 gap-5"
            >
              <p className="text-lg font-bold">{category.name}</p>
              <img
                src={category.image_Url}
                alt={category.name}
                className="h-32 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCategories;
