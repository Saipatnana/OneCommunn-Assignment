import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search_icon.svg";
import UserIcon from "../assets/user_icon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdown
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

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

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-black flex items-center h-16 md:h-20 px-5 md:px-20 gap-10 justify-between">
      <div className="flex items-center gap-10">
      <Link to={"/"}>
        <img src={Logo} width={80} height={80} className="mt-2" alt="Logo" />
        </Link>
        {/* Desktop Menu */}
        <ul className="bg-black hidden md:flex gap-10" ref={dropdownRef}>
          {menuList.map((item, index) => (
            <li key={index} className="group relative">
              <button
                className="flex items-center gap-2 text-white text-sm"
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
                {activeDropdown === index ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {/* Dropdown menu */}
              {activeDropdown === index && (
                <div className="absolute left-0 bg-white w-48 mt-2 rounded-md shadow-lg">
                  <ul className="space-y-2 p-2">
                    {item.menuSubList.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-200 rounded-md"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5 md:gap-10">
      <Link to={"/search"} className="flex items-center">
        <button>
            <img src={SearchIcon} width={18} height={18}/>
        </button>
        </Link>
        <button>
          <img src={UserIcon} width={16} height={16} />
        </button>
        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <Menu color="#ffffff" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-16 left-0 right-0 bg-black text-white md:hidden z-10"
          ref={dropdownRef}
        >
          <ul className="space-y-4 p-5">
            {menuList.map((item, index) => (
              <li key={index} className="group relative">
                <button
                  className="flex items-center gap-2 text-white text-sm w-full justify-between"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                  {activeDropdown === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {/* Mobile Dropdown menu */}
                {activeDropdown === index && (
                  <div className="bg-black text-white mt-2 rounded-md shadow-lg">
                    <ul className="space-y-2 p-2">
                      {item.menuSubList.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
