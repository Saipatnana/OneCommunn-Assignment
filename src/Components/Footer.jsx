import React from "react";
import logo from "../assets/logo.png";
import InstagramIcon from "../assets/InstagramIcon.png";
import LinkedinIcon from "../assets/LinkedInIcon.png";
import FooterImage from '../assets/footer_image01.png'

const footerItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Living" },
  { id: 3, title: "Storage" },
  { id: 4, title: "Dining" },
  { id: 5, title: "Bedroom" },
  { id: 6, title: "Mattress" },
  { id: 7, title: "Study" },
  { id: 8, title: "Office" },
  { id: 9, title: "Outdoor" },
  { id: 10, title: "Residential" },
  { id: 11, title: "Institutional" },
  { id: 12, title: "Commercial" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-80 mt-10">
        {/* Left Section */}
        <div>
          <img src={logo} alt="Company Logo" width={90} height={90} />
          <p className="text-sm mt-4">
           Vibrer, a premium brand from SREGA Electronics & Furniture LLP, is your one-stop solution for all kinds of furniture needs. Whether you're looking for stylish home furnishings, ergonomic office furniture, or customized solutions for commercial spaces, Vibrer offers a perfect blend of functionality, durability, and modern design. With a commitment to quality craftsmanship and innovative designs, Vibrer ensures that every piece enhances your space while providing maximum comfort and efficiency. From contemporary sofas to smart storage solutions, Vibrer caters to diverse needs, making it the go-to choice for those seeking premium furniture under one trusted brand.
          </p>
          <div className="flex items-center my-4 gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col h-80 flex-wrap mt-10 md:mt-0">
          {footerItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.title.toLowerCase()}`}
              className="py-2 text-sm hover:text-gray-400 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex items-center flex-col">
        <p className="text-xs py-3">2024 © All rights reserved - Vibrer</p>
        <img src={FooterImage}/>
      </div>
    </footer>
  );
};

export default Footer;
