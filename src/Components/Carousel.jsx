import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Carousel = ({items}) => {
  return (
    <div className="relative w-full p-5">
      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        aria-label="Previous"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        className="custom-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        aria-label="Next"
      >
        &#8594; {/* Right Arrow */}
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2} // Default to 2 slides
        navigation={{
          nextEl: ".custom-next", // Link to custom next button
          prevEl: ".custom-prev", // Link to custom prev button
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on mobile (width < 640px)
          },
          1024: {
            slidesPerView: 2, // Show 2 slides on desktop (width >= 1024px)
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border rounded-lg bg-white shadow">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto rounded"
              />
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
              <p className="text-lg font-bold mt-1">${item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
