import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import img from "../assets/img2.png";

const Main3 = () => {
  return (
    <div className="flex justify-center items-center p-4 md:p-8 bg-[#F8F5F0]">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Image - Top on mobile */}
          <div className="h-[400px] md:h-[500px] bg-gray-200 overflow-hidden order-1 lg:order-2">
            <img
              src={img}
              alt="Content Image"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Grid - Bottom on mobile */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Vision Card */}
            <div
              className="p-6 text-white"
              style={{ backgroundColor: "#02052A" }}
            >
              <div className="my-3">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  OUR VISION
                </h2>
                <p className="text-base md:text-lg">
                  "To be the foremost global network of young leaders."
                </p>
              </div>
            </div>

            {/* Mission Card with spacing */}
            <div className="p-6 border-2 border-black mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  OUR MISSION
                </h2>
                <p className="text-base md:text-lg text-black">
                  "To provide leadership development opportunities that empower
                  young people to create positive change."
                </p>
              </div>
            </div>

            {/* Centered Know More Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            >
              <a
                href="https://jac.jciindia.in/jci-alumini-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between px-8 py-3 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300">
                  <span className="font-bold text-sm md:text-base">
                    Know More
                  </span>
                  <div className="flex items-center ml-4">
                    <div className="w-8 md:w-12 h-0.5 bg-black mx-2 transition-all duration-300 group-hover:w-16"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
