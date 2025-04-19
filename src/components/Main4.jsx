import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Import your images
import img1 from "../assets/leader.png";
import img2 from "../assets/networ.jpg";
import img3 from "../assets/Community.jpg";
import img4 from "../assets/skill.jpg";
import img5 from "../assets/Global.jpg";

const Main4 = () => {
  const opportunities = [
    { id: 1, image: img1, title: "Leadership Development" },
    { id: 2, image: img2, title: "Professional Networking" },
    { id: 3, image: img3, title: "Community Projects" },
    { id: 4, image: img4, title: "Skill Workshops" },
    { id: 5, image: img5, title: "Global Partnerships" },
  ];

  return (
    <section id="opportunities" className="relative py-12 bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title for mobile */}
        <h2 className="md:hidden font-play text-3xl font-bold text-gray-900 mb-8 text-center">
          Areas of Opportunity
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 md:items-start">
          {/* Image Grid/Carousel */}
          <div className="md:col-span-2 lg:col-span-3">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {opportunities.map((item) => (
                  <SwiperSlide key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      whileHover={{ scale: 1.03 }}
                      className="relative h-64 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h3 className="text-white font-bold text-lg">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid gap-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {opportunities.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.03 }}
                    className="relative h-64 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Title and Content */}
          <div className="md:col-span-1 flex items-start">
            <div className="max-w-md md:pl-6 lg:pl-8 lg:max-w-md text-center md:text-left">
              <h2 className="hidden md:block font-play text-4xl font-bold text-gray-900 leading-tight mb-6">
                Areas of Opportunity
              </h2>
              <p className="text-lg text-gray-600 text-left">
                Explore diverse pathways for growth and development through our
                comprehensive programs and initiatives designed to empower young
                leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main4;
