import React, { useState } from "react";
import { motion } from "framer-motion";

const EventTimeline = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const events = {
    January: [
      {
        title: "Installation",
        date: "",
        description: "",
        image: "/events/inst.jpg",
      },
      {
        title: "Anti Drug Awarness program in NIzamad",
        date: "",
        description: "",
        image: "/events/antidrug.jpg",
      },
      {
        title: "1st ZGB meeting",
        date: "",
        description: "",
        image: "/events/meet.jpg",
      },
      {
        title: "Attended JACAS in Mumbai",
        date: "",
        description: "",
        image: "/events/jacas.jpg",
      },
      {
        title: "Republic Day celebrations",
        date: "",
        description: "",
        image: "/events/republicday.jpg",
      },
      {
        title: "Subcommitte - Installation",
        date: "",
        description: "",
        image: "/events/subcom.jpg",
      },
    ],
    February: [
      {
        title: "Dance Festival Nizamabad",
        date: "",
        description: "",
        image: "/events/dance.jpg",
      },
      {
        title: "Valentines Bash - DIL SE",
        date: "",
        description: "",
        image: "/events/valentine.jpg",
      },
      {
        title: "International Mother Tongue Day celebrations in Nizamabad",
        date: "",
        description: "",
        image: "/events/mother.jpg",
      },
      {
        title: "Speaker meet on A I",
        date: "",
        description: "",
        image: "/events/AI.jpg",
      },
    ],
    March: [
      {
        title: "International women's day celebrations  in Nizamabad",
        date: "",
        description: "",
        image: "/events/women.jpg",
      },
      {
        title: "Holi celebrations",
        date: "",
        description: "",
        image: "/events/holi.jpg",
      },
      {
        title: "Z Art",
        date: "",
        description: "",
        image: "/events/zart.jpg",
      },
      {
        title: "Mud bath - Niamabad",
        date: "",
        description: "",
        image: "/events/mud.jpg",
      },
      {
        title: "Robotics session - Nizambad",
        date: "",
        description: "",
        image: "/events/robo.jpg",
      },
      {
        title: "CARE CONNECT",
        date: "",
        description: "",
        image: "/events/careconnect.jpg",
      },
      {
        title: "UGADI PURASKARALU",
        date: "",
        description: "",
        image: "/events/ugadi.jpg",
      },
    ],
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-[#F8F5F0] py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Event Timeline
        </h2>

        {/* Month Selector */}
        <div className="flex overflow-x-auto pb-4 mb-8">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-6 py-2 mx-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedMonth === month
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-12">
          {events[selectedMonth]?.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-center gap-8 even:lg:flex-row-reverse"
            >
              {/* Event Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Event Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm">{event.date}</p>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {!events[selectedMonth]?.length && (
          <div className="text-center py-12 text-gray-500">
            We Have amazing events sheduled soon in {selectedMonth}. Will add
            them soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTimeline;
