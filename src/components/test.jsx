import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TeamMember = ({ name, role, isLead, image }) => (
  <motion.div
    className={`relative group min-w-[150px] sm:min-w-[240px] mx-2 ${
      isLead ? "order-first" : ""
    }`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="overflow-hidden rounded-lg">
      <img
        src={`/Team/${image}`}
        alt={name}
        className="w-full h-[172px] sm:h-[250px] md:h-[300px] bg-gray-200 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-3 sm:p-4 ps-0">
        <h3 className="text-black font-bold text-lg sm:text-lg md:text-xl">
          {name}
        </h3>
        <p
          className={`uppercase text-sm sm:text-sm md:text-base tracking-wider ${
            isLead ? "text-[#02052A]" : "text-gray-600"
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  </motion.div>
);

const TeamRow = ({ teamName, members, isReverse }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const itemWidth = 240;
  const gap = 16;
  const speed = 1.5;

  const sortedMembers = [...members].sort((a, b) =>
    a.isLead === b.isLead ? 0 : a.isLead ? -1 : 1
  );

  // Create enough clones for seamless looping
  const clonedMembers =
    sortedMembers.length < 5
      ? [...sortedMembers, ...sortedMembers, ...sortedMembers]
      : [...sortedMembers, ...sortedMembers];

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      positionRef.current = 0;
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const animate = () => {
      if (!isHovered && sortedMembers.length > 0) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = sortedMembers.length * (itemWidth + gap);

        positionRef.current += isReverse ? -speed : speed;

        // Reset position when exceeding content width
        if (Math.abs(positionRef.current) >= contentWidth) {
          positionRef.current = 0;
        }

        controls.set({ x: positionRef.current });
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isMounted, isHovered, isReverse, sortedMembers.length, controls]);

  const handleManualScroll = (direction) => {
    const scrollAmount = (itemWidth + gap) * (direction === "left" ? -1 : 1);
    controls.start({
      x: positionRef.current + scrollAmount,
      transition: { duration: 0.5 },
    });
  };

  if (!isMounted) return null;

  return (
    <div
      className="mb-12 mt-8 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {teamName && (
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 px-2">
          {teamName}
        </h3>
      )}

      <div className="relative overflow-hidden" ref={containerRef}>
        <div className="hidden md:block">
          <button
            onClick={() => handleManualScroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => handleManualScroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <motion.div className="flex" animate={controls}>
          {clonedMembers.map((member, index) => (
            <TeamMember
              key={`${index}-${member.name}`}
              name={member.name}
              role={member.role}
              isLead={member.isLead}
              image={member.image}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Team = () => {
  const teams = [
    {
      name: "Core",
      members: [
        {
          name: "JCI SEN PDM D V S P  GUPTA",
          role: "Zone Chairman",
          isLead: true,
          image: "001.jpg",
        },
        {
          name: "JCI SEN PDM GVN RAJU ",
          role: "I P Z C",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Naveen kumar  chavalla",
          role: "Zone Vice Chairman - A",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "JCI SEN PPP Srinivas  Veerabomma",
          role: "Zone Vice Chairman - B",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Surender Reddy  Gade",
          role: "Zone Vice Chairman - C",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "JCI SEN  Vijayanand  Jilkaar",
          role: "Zone Vice Chairman -D",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "JCI SEN Mahesh  Golechha",
          role: "Zone Vice Chairman - E",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Kamalakar  Musthyala",
          role: "Zone Parlamentarian",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Kathuri  Srinivas",
          role: "Zone Secreatary",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "JC PDM Shyam sunder  Madugala",
          role: "Zone Treasurer",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Vishakha  Mashankar",
          role: "Zone Foundation Officer",
          isLead: false,
          image: "001.jpg",
        },
      ],
    },
    {
      name: "Marketing",
      members: [
        {
          name: "Jc ZAHABIA  KANCHANVALA",
          role: "Zone P R Person & Editor",
          isLead: true,
          image: "001.jpg",
        },
        {
          name: "Jc Radha Krishna Sathelli ",
          role: "Zone Director",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Kartik  Gumidelli",
          role: "Zone Director",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc NITI  KADAKIA",
          role: "Zone Director",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc CHANDRA SEKHAR NALLAMOTHU  ",
          role: "Zone Director",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc DEEPKANTH SOMA",
          role: "Zone Director",
          isLead: false,
          image: "001.jpg",
        },
      ],
    },
    {
      name: "",
      members: [
        {
          name: "Jc VIDHI GUPTA  ",
          role: "Regional Chairman",
          isLead: true,
          image: "001.jpg",
        },
        {
          name: "Jc BHASKAR REDDY  VENATI",
          role: "Regional Chairman",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Sandeep  Jain",
          role: "Regional Chairman",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Viikash Jain",
          role: "Regional Chairman",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc SUNEEL BABU  PENUMAKA  ",
          role: "Regional Chairman",
          isLead: false,
          image: "001.jpg",
        },
      ],
    },
    {
      name: "",
      members: [
        {
          name: "Jc Chandra Sekhar",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc SRIKANTH  THELUKUNTA",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "JC PDM CHAITANYA KUMAR  VANKAYALA",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Dr Shripuja  SIDDAMSETTY",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Naveen  Majety",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Guggilla  Vinay",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc SOMESH  SOMA",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
        {
          name: "Jc Muchanapalli  Suman kumar",
          role: "Zone Coordinator",
          isLead: false,
          image: "001.jpg",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F8F5F0] py-8 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          MEET THE <span className="text-[#02052A]">TEAM</span>
        </h2>
        <div className="space-y-12">
          {teams.map((team, index) => (
            <TeamRow
              key={index}
              teamName={team.name}
              members={team.members}
              isReverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
