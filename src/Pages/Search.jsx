import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import SearchImage01 from "../assets/search_image01.png";
import SearchImage02 from "../assets/search_image02.png";
import SearchImage03 from "../assets/search_image03.png";
import SearchImage04 from "../assets/search_image04.png";
import SearchImage05 from "../assets/search_image05.png";
import SearchImage06 from "../assets/search_image06.png";
import SearchImage07 from "../assets/search_image07.png";
import SearchImage08 from "../assets/search_image08.png";
import SearchImage09 from "../assets/search_image09.png";
import SearchSection02Image01 from "../assets/search_section02_image01.png";
import SearchSection02Image02 from "../assets/search_section02_image02.png";
import SearchSection02Image03 from "../assets/Luxury_Bed_Set.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const searchdata = [
  {
    id: 1,
    title: "Golden Sofa Set",
    imageUrl: SearchImage01,
  },
  {
    id: 2,
    title: "Swing bed",
    imageUrl: SearchImage02,
  },
  {
    id: 3,
    title: "Dining table",
    imageUrl: SearchImage03,
  },
  {
    id: 4,
    title: "Designer Cabinet",
    imageUrl: SearchImage04,
  },
  {
    id: 5,
    title: "Modern Chair",
    imageUrl: SearchImage05,
  },
  {
    id: 6,
    title: "Elegant Dining",
    imageUrl: SearchImage06,
  },
  {
    id: 7,
    title: "Luxury Bedside",
    imageUrl: SearchImage07,
  },
  {
    id: 8,
    title: "Chair",
    imageUrl: SearchImage08,
  },
  {
    id: 9,
    title: "Chic Sideboard",
    imageUrl: SearchImage09,
  },
];

const menuList = [
  {
    name: "Living",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Storage",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Dining",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Bedroom",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Matress",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Study",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Office",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  {
    name: "Outdoor",
    link: "/",
    menuSubList: [
      { name: "TV Units", link: "/" },
      { name: "Box Shelves", link: "/" },
      { name: "Shoe Rack", link: "/" },
      { name: "Dressing Table", link: "/" },
      { name: "Wardrobes", link: "/" },
    ],
  },
  // Add other menu items here...
];

const Search = () => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const [mobileCategory, setMobileCategory] = useState(null);
  const [openMenu, setOpenMenu] = useState();

  const toggleMenu = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleMobileCategory = (category) => {
    setMobileCategory((prev) => (prev === category ? null : category));
  };

  const BestsellersList = [
    {
      id: 1,
      title: "Golden Vanity Desk",
      subtitle: "Elegant and Functional",
      price: 900,
      imageUrl: SearchSection02Image01,
    },
    {
      id: 1,
      title: "Luxury Dining Chairs",
      subtitle: "Comfortable and Stylish",
      price: 900,
      imageUrl: SearchSection02Image02,
    },
    {
      id: 1,
      title: "Luxury Bed Set",
      subtitle: "Comfortable and Stylish",
      price: 800,
      imageUrl: SearchSection02Image03,
    },
  ];

  return (
    <main className="flex-grow box-border">
      {/* Mobile Dropdown */}
      <div className="md:hidden w-full mt-3 block px-4">
        <div className="bg-white flex flex-col border p-3 px-4 rounded-2xl">
          <div
            className="flex items-center justify-between"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <p>Select Sub category</p>
            {openMenu == true ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>

          {openMenu && (
            <ul className="mt-3">
              {menuList.map((item, index) => (
                <li key={index} className="mb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleMobileCategory(item.name)}
                  >
                    <p>{item.name}</p>
                    {mobileCategory === item.name ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {mobileCategory === item.name && (
                    <ul className="pl-4 mt-2">
                      {item.menuSubList.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 text-sm text-gray-600 hover:text-black"
                        >
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <section className="flex items-start justify-between py-5 w-full md:px-8">
        {/* Desktop Sidebar */}
        <div className="w-2/12 p-4 bg-white flex-0 hidden md:block">
          <h2 className="text-xl font-bold  mb-7">Sub - Categories</h2>
          <ul>
            {menuList.map((item, index) => (
              <li key={index} className="mb-4">
                <div
                  className="flex items-center justify-between py-3 cursor-pointer"
                  onClick={() => toggleMenu(index)}
                >
                  <p>{item.name}</p>
                  {expandedMenus[index] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {expandedMenus[index] && (
                  <ul className="pl-4 mt-2">
                    {item.menuSubList.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-1 text-sm text-gray-600 hover:text-black"
                      >
                        <a href={subItem.link}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-white p-4 grid grid-cols-2 md:grid-cols-4 gap-10 flex-1">
          {searchdata.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <img src={item.imageUrl} alt={item.title} />
              <h5 className="text-lg">{item.title}</h5>
              <button className="bg-black text-white rounded-md p-2 w-fit">
                Enquire
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#D3D3D3] w-full p-14 grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col items-start gap-2">
          <h2 className="md:text-5xl text-4xl">
            Explore our <br />
            Bestsellers
          </h2>
          <p className="text-sm md:text-base">
            Discover the epitome of luxury living with our exclusive furniture
            collection. Each piece is meticulously crafted to bring
            sophistication and elegance to your home. Our furniture is designed
            with premium materials and exquisite details, ensuring a luxurious
            experience for every room. Elevate your living space with Affordable
            Luxury for Every Home.
          </p>
        </div>
        <div className="md:mx-7 w-full">
          <div className="relative w-full p-5">
            {/* Custom Navigation Buttons */}
            <button
              className="custom-prev absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 text-black p-2 rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft size={20}/>
            </button>
            <button
              className="custom-next absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 text-black p-2 rounded-full "
              aria-label="Next"
            >
              <ChevronRight size={20}/> {/* Right Arrow */}
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2} // Default to 2 slides
              navigation={{
                nextEl: ".custom-next", // Link to custom next button
                prevEl: ".custom-prev", // Link to custom prev button
              }}
              
              breakpoints= {{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40
                }
              }}
            >
              {BestsellersList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 border rounded-lg bg-white shadow h-80">
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
        </div>
      </section>
    </main>
  );
};

export default Search;
