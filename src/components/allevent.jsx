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
        title: "Speaker meet on AI",
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
        title: "Z ART",
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
    April: [
      {
        title: "2nd ZB meeting",
        date: "2nd April 2025",
        description: "",
        image: "/events/2zb.jpeg",
      },
      {
        title: "NVC Official visit",
        date: "20th April 2025",
        description:
          "NVC OFFICIAL VISIT TO JAC ZONE 12 - JFS PDM N M S JAI KUMAR",
        image: "/events/nvcvisit.jpeg",
      },
      {
        title: "Health Talk",
        date: "20th April 2025",
        description: "",
        image: "/events/health.jpeg",
      },
      {
        title: "Mud Bath - 2",
        date: "20th April 2025",
        description: "",
        image: "/events/mudbath.jpeg",
      },
      {
        title: "Summer Camp",
        date: "20th April 2025",
        description: "",
        image: "/events/summercamp.jpeg",
      },
      {
        title: "Website Launch",
        date: "20th April 2025",
        description: "",
        image: "/events/website.jpeg",
      },
    ],
    May: [
      {
        title: "Morning Walk",
        date: "11th May 2025",
        description: "",
        image: "/events/morningwalk.jpg",
      },
      {
        title: "Health Camp",
        date: "21th May 2025",
        description: "",
        image: "/events/healthcamp.jpg",
      },
      {
        title: "National Board Meeting at COORG",
        date: "2th May 2025",
        description: "",
        image: "/events/nbmeet.jpg",
      },
      {
        title: "JAC Business Conclave",
        date: "30th May 2025",
        description: "",
        image: "/events/businessconclave.jpg",
      },
    ],
    June: [
      {
        title: "3rd ZB meeting",
        date: "18th June 2025",
        description: "",
        image: "/events/3zb.jpg",
      },
      {
        title: "JCI ZONE - 12 MIDCON",
        date: "22th June 2025",
        description: "",
        image: "/events/midcon.jpg",
      },
      {
        title: "Pedal To Progress",
        date: "29th June 2025",
        description: "",
        image: "/events/pedal.jpg",
      },
      {
        title: "PARIVARTHAN NZB",
        date: "30th June 2025",
        description: "",
        image: "/events/parivarthan.jpg",
      },
    ],
    July: [
      {
        title: "South Carnval 2025",
        date: "5 - 6 th July 2025",
        description: "",
        image: "/events/12.jpg",
      },
      {
        title: "NP visit MULTI LO MEET",
        date: "9th July 2025",
        description: "",
        image: "/events/NP multi.jpg",
      },
      {
        title: "NC ARRIVAL on Official Visit",
        date: "25th July 2025",
        description: "",
        image: "/events/NCrec.jpg",
      },
      {
        title: "Devotional Trip to Swarnagiri Temple",
        date: "26th July 2025",
        description: "",
        image: "/events/temple.jpg",
      },
      {
        title: "Amma Nanna Anatha Ashramam - Permenent Project",
        date: "26th July 2025",
        description: "",
        image: "/events/amma.jpg",
      },
      {
        title: "Coffie With NC",
        date: "26th July 2025",
        description: "",
        image: "/events/cof.jpg",
      },
      {
        title: "MIDCON & Graduation",
        date: "26th July 2025",
        description: "",
        image: "/events/midcon2.jpg",
      },
    ],
    August: [
      {
        title: "Independence Day Celebrations",
        date: "15th August 2025",
        description: "",
        image: "/events/indep.JPG",
      },
      {
        title: "North Carnival 2025",
        date: "23th August 2025",
        description: "",
        image: "/events/northcar.jpg",
      },
      {
        title: "4th ZB meeting",
        date: "29th August 2025",
        description: "",
        image: "/events/4ZB.jpg",
      },
    ],
    September: [
      {
        title: "Teacher's Day Celebrations",
        date: "5th September 2025",
        description: "",
        image: "/events/teachersday.JPG",
      },
      {
        title: "School of Politics",
        date: "6 - 8th September 2025",
        description: "",
        image: "/events/politics.jpg",
      },
      {
        title: "M square or M Cube",
        date: "14th September 2025",
        description: "",
        image: "/events/M2.jpg",
      },
    ],
    October: [
      {
        title: "Special triaging in Nizamabad",
        date: "11th October 2025",
        description: "",
        image: "/events/NZB2.jpg",
      },
    ],
    November: [
      {
        title: "JCI ZONECON",
        date: "2st November 2025",
        description: "",
        image: "/events/jciconecon.jpg",
      },
      {
        title: "5th ZB meeting",
        date: "6th November 2025",
        description: "",
        image: "/events/5zb.jpg",
      },
    ],
    December: [
      {
        title: "BOX CRICKET Tournament",
        date: "14th December 2025",
        description: "",
        image: "/events/cricket.jpg",
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
