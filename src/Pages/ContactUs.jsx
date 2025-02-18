import React from "react";
import { motion } from "framer-motion";
import phoneIcon from "../assets/phone_icon.svg";
import EmailIcon from "../assets/mail_icon.svg";
import LocationIcon from "../assets/location_icon.svg";
import MapImage from "../assets/map_image.png";

const contactData = [
  {
    id: 1,
    title: "Phone",
    icon: phoneIcon,
    discription: "+91 90000 00000",
  },
  {
    id: 2,
    title: "Email",
    icon: EmailIcon,
    discription: "contact@cozycomfort.com",
  },
  {
    id: 3,
    title: "Location",
    icon: LocationIcon,
    discription: "Bangalore 560001",
  },
];

const ContactUs = () => {
  return (
    <main>
      <section className="flex items-center justify-center text-center flex-col gap-2 my-10 px-5 md:px-20">
        <motion.h2
          className="font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="md:w-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We'd love to hear from you! Whether you have questions about our
          luxury furniture pieces or need assistance with customization options,
          our team is here to help.
        </motion.p>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 px-5 md:px-20 mb-10 gap-5 md:gap-0">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h4 className="font-bold text-lg my-4">Get In Touch</h4>
          <div className="flex flex-col items-center md:items-start md:text-left gap-4 md:gap-3 ">
            {contactData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center md:items-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="phone icon" />
                  <h5 className="text-md font-bold">{item.title}</h5>
                </div>
                <p className="text-gray-600 text-sm">{item.discription}</p>
              </motion.div>
            ))}
          </div>
          <div className="my-3 flex justify-center md:justify-start">
            <motion.img
              src={MapImage}
              alt="map image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.form
          className="bg-[#D3D3D3] p-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h4 className="font-bold text-xl">Request a Call Back</h4>
          <motion.input
            placeholder="Name"
            type="text"
            className="p-3 w-full rounded-lg my-2"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.input
            placeholder="Phone Number"
            type="number"
            className="p-3 w-full rounded-lg my-2"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.input
            placeholder="Email"
            type="email"
            className="p-3 w-full rounded-lg my-2"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.textarea
            rows={5}
            className="p-3 w-full rounded-lg my-2"
            placeholder="Message"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.button
            type="submit"
            className="bg-black text-white p-2 rounded-lg w-full mt-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
};

export default ContactUs;
