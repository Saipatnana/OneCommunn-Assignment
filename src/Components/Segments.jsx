import React from "react";
import SegmentsIcon from "../assets/Segments.png";
import ResidentialImage from "../assets/Residential.png";
import InstitutionalImage from "../assets/Institutional.png";
import CommercialImage from "../assets/Commercial.png";

const Segments = () => {
  const SegmentsList = [
    { id: 1, name: "Residential", imageUrl: ResidentialImage },
    { id: 2, name: "Institutional", imageUrl: InstitutionalImage },
    { id: 3, name: "Commercial", imageUrl: CommercialImage },
  ];

  return (
    <section className="px-5 md:px-20 my-10">
      {/* Header */}
      <div className="bg-[#D3D3D3] p-3 rounded-md flex gap-3 items-center">
        <img src={SegmentsIcon} alt="Segments Icon" className="w-6 h-6" />
        <h2 className="text-lg md:text-xl font-bold">Segments</h2>
      </div>

      {/* Segments List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {SegmentsList.map((segment) => (
          <div
            key={segment.id}
            className="relative flex flex-col items-center justify-center rounded-xl shadow-md overflow-hidden h-[368px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${segment.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.5,
              }}
            ></div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col justify-between h-full py-10 text-center px-4">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                {segment.name}
              </h3>
              <button className="bg-[#1B1B1B] text-white text-sm md:text-base px-14 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Segments;
