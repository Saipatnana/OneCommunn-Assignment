import React from "react";
import AboutUsImage1 from "../assets/aboutus_image01.png";
import AboutUsImage2 from "../assets/aboutus_image02.avif";
import AboutUsImage3 from "../assets/aboutus_image03.avif";
import AboutUsImage4 from "../assets/aboutus_image04.avif";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center text-center px-5 md:px-20 py-10">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6">Interior Designing</h1>
      <p className="text-gray-700 mb-8 max-w-4xl">
        Discover the epitome of luxury living with our exclusive furniture
        collection. Each piece is meticulously crafted to bring sophistication
        and elegance to your home.
      </p>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full">
        {/* Left Side: Text Content */}
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Inspired Living",
              description:
                "Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.",
            },
            {
              title: "Exceptional Savings",
              description:
                "By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.",
            },
            {
              title: "Easy Shopping",
              description:
                "From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.",
            },
            {
              title: "Sustainable Options",
              description:
                "Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment.",
            },
          ].map((item, index) => (
            <div key={index} className="md:m-5 m-2 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2 text-left">{item.title}</h2>
              <p className="text-gray-700 text-sm text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Images with Different Sizes */}
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1: Full size */}
          <div>
            <img
              src={AboutUsImage1}
              alt="Modern furniture in a cozy living room"
              className="rounded-2xl shadow-md object-cover h-full w-full"
            />
          </div>

          {/* Image 2: Smaller height, spans one column */}
          <div className="row-span-2">
            <img
              src={AboutUsImage2}
              alt="Elegant interior design with a sofa"
              className="rounded-2xl shadow-md object-cover h-full w-full"
            />
          </div>

          {/* Image 3: Taller height, spans two rows */}
          <div className="row-span-2">
            <img
              src={AboutUsImage3}
              alt="Sustainable furniture setup"
              className="rounded-2xl shadow-md object-cover h-full w-full"
            />
          </div>

          {/* Image 4: Medium height */}
          <div>
            <img
              src={AboutUsImage4}
              alt="Luxury bedroom furniture"
              className="rounded-2xl shadow-md object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
