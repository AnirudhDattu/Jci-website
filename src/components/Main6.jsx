import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Replace with your images
import event1 from "../assets/img2.png";
import event2 from "../assets/img2.png";
import event3 from "../assets/img2.png";

const Main6 = () => {
  const events = [
    {
      image: event1,
      month: "SEP",
      date: "15",
      title: "Leadership Summit",
      location: "Convention Center",
      time: "9:00 AM",
      status: "Upcoming",
    },
    {
      image: event2,
      month: "OCT",
      date: "22",
      title: "Networking Night",
      location: "City Hall",
      time: "6:30 PM",
      status: "Completed",
    },
    {
      image: event3,
      month: "NOV",
      date: "05",
      title: "Workshop Series",
      location: "Innovation Hub",
      time: "2:00 PM",
      status: "Upcoming",
    },
  ];

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-16 bg-[#F8F5F0]">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg">
            {/* Image Container */}
            <div className="relative h-64">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-white px-4 py-1 text-sm font-semibold text-gray-900 shadow-md">
                {event.status}
              </div>

              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-[#77A6F3] py-3 px-5 text-center">
                <div className="text-sm font-semibold text-white">
                  {event.month}
                </div>
                <div className="text-2xl font-bold text-white">
                  {event.date}
                </div>
              </div>

              {/* Fading Effect */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02052A] to-transparent"></div>
            </div>

            {/* Event Details */}
            <div className="bg-[#02052A] p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <div className="space-y-1 text-gray-300">
                <p>{event.location}</p>
                <p>{event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-md">
                    {event.status}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-[#77A6F3] p-3 text-center">
                    <div className="text-sm font-semibold text-black">
                      {event.month}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {event.date}
                    </div>
                  </div>

                  {/* Fading Effect */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02052A] to-transparent"></div>
                </div>

                {/* Event Details */}
                <div className="bg-[#02052A] p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-1 text-gray-300">
                    <p>{event.location}</p>
                    <p>{event.time}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Main6;
