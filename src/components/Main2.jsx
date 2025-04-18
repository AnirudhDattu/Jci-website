import React from "react";
import { motion } from "framer-motion";

const Main2 = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center bg-[#F8F5F0] px-4 md:px-6 lg:px-4 py-10"
    >
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <motion.h1
          className="text-xl md:text-2xl lg:text-3xl font-bold text-black font-[play] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About JAC (JCI Alumni Club) - An Initiative from JCI India
        </motion.h1>

        {/* Content */}
        <motion.p
          className="text-base md:text-lg text-black text-justify tracking-wide leading-7 font-[coda]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          The JCI Alumni Club (JAC) of JCI India is a vibrant community of
          graduates committed to creating positive change locally and beyond. As
          the supporting organization for JCI, JAC plays a key role in making
          the movement more relevant to today’s youth while connecting esteemed
          Alumni of JCI and nurturing the growth of the JCI community.
          <br />
          <br />
          Joining JAC means engaging in innovative projects, sharing expertise,
          and building connections through fellowship, travel, cultural
          exploration, and business networking. Beyond being an alumni club, JAC
          offers a support system that values your well-being, providing
          guidance in areas like wealth management and personal development.
          <br />
          <br />
          With diverse events and activities, JAC provides opportunities to
          reminisce, forge new connections, and build lasting friendships.
          Become part of a community committed to making a meaningful impact and
          supporting each other’s growth. Join us in making a difference.
        </motion.p>
      </div>
    </div>
  );
};

export default Main2;
