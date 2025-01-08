import React from "react";
import ourProcessImage1 from "../assets/ourprocess_image01.png";
import ourProcessImage2 from "../assets/ourprocess_image02.png";
import ourProcessImage3 from "../assets/ourprocess_image03.png";
import ourProcessImage4 from "../assets/ourprocess_image04.png";
import ourProcessImage5 from "../assets/ourprocess_image05.png";
import ourProcessImage6 from "../assets/ourprocess_image06.png";

const ourprocess = [
  {
    id: 1,
    title: "Step 1: Select your dream model",
    info: "Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.",
    image: ourProcessImage1,
  },
  {
    id: 2,
    title: "Step 2: Customize to your requirement",
    info: "Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.",
    image: ourProcessImage2,
  },
  {
    id: 3,
    title: "Step 3: Order confirmation",
    info: "Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.",
    image: ourProcessImage3,
  },
  {
    id: 4,
    title: "Step 4: Quality check",
    info: "Enjoy seamless delivery and professional installation services with every purchase.",
    image: ourProcessImage4,
  },
  {
    id: 5,
    title: "Step 5: Order processing",
    info: "Your order is carefully reviewed and processed to ensure all details are correct before moving to production.",
    image: ourProcessImage5,
  },
  {
    id: 6,
    title: "Step 6: Delivery",
    info: "Our commitment to quality ensures your satisfaction with every piece you choose.",
    image: ourProcessImage6,
  },
];

const OurProcess = () => {
  return (
    <section className="flex flex-col items-center text-center px-5 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Process</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ourprocess.map((process, index) => (
          <div className="flex items-center gap-3" key={process.id}>
            <img src={process.image} alt={process.title} />
            <div className="text-left">
              <h3 className="font-bold">{process.title}</h3>
              <p>{process.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
