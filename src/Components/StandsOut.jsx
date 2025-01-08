import React from "react";
import StandOurImage1 from "../assets/standout_image01.png";
import StandOurImage2 from "../assets/standout_image02.png";
import StandOurImage3 from "../assets/standout_image03.png";
import StandOurImage4 from "../assets/standout_image04.png";

const standOutList = [
  {
    id: 1,
    title: "500 + Collections",
    info: "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    image: StandOurImage1,
  },
  {
    id: 2,
    title: "300 + Fabrics",
    info: "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    image: StandOurImage2,
  },
  {
    id: 3,
    title: "Top-notch Quality",
    info: "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    image: StandOurImage3,
  },
  {
    id: 4,
    title: "Colour and Length customization",
    info: "Our journey begins with a comprehensive understanding of your unique style and space requirements.",
    image: StandOurImage4,
  },
];
const StandsOut = () => {
  return (
    <section className="flex flex-col items-center text-center px-5 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-6">Why Vibrer Stands Out?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {standOutList.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-5 py-10 justify-between max-w-96 h-72 rounded-md bg-[#D3D3D3]">
            <img src={item.image} alt={item.title} />
            <div className="text-left">
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StandsOut;
