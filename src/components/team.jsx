import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, isLead, image }) => (
  <motion.div
    className={`relative group min-w-[150px] sm:min-w-[240px] mx-2 ${
      isLead ? "order-first" : ""
    }`}
    whileHover={{ scale: 1 }}
    transition={{ duration: 2 }}
  >
    <div className="overflow-hidden rounded-lg">
      <img
        src={`/Team/${image}`}
        alt={name}
        className="w-full h-[172px] sm:h-[250px] md:h-[300px] bg-gray-200 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.src = "/team/default-avatar.jpg";
        }}
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
  const sortedMembers = [...members].sort((a, b) => {
    if (a.isLead) return 1;
    if (b.isLead) return 1;
    return 0;
  });

  return (
    <div className="mb-12 mt-8">
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 px-2">
        {teamName}
      </h3>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: isReverse ? [0, -240] : [-240, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          <div className="flex">
            {sortedMembers.map((member, index) => (
              <TeamMember
                key={`${index}-original`}
                name={member.name}
                role={member.role}
                isLead={member.isLead}
                image={member.image}
              />
            ))}
          </div>
          <div className="flex">
            {sortedMembers.map((member, index) => (
              <TeamMember
                key={`${index}-duplicate`}
                name={member.name}
                role={member.role}
                isLead={member.isLead}
                image={member.image}
              />
            ))}
          </div>
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
          image: "005.jpg",
        },
        {
          name: "Jc Naveen kumar  chavalla",
          role: "Zone Vice Chairman - A",
          isLead: false,
          image: "009.jpg",
        },
        {
          name: "JCI SEN PPP Srinivas  Veerabomma",
          role: "Zone Vice Chairman - B",
          isLead: false,
          image: "014.jpg",
        },
        {
          name: "Jc Surender Reddy  Gade",
          role: "Zone Vice Chairman - C",
          isLead: false,
          image: "017.jpg",
        },
        {
          name: "JCI SEN  Vijayanand  Jilkaar",
          role: "Zone Vice Chairman -D",
          isLead: false,
          image: "007.jpg",
        },
        {
          name: "JCI SEN Mahesh  Golechha",
          role: "Zone Vice Chairman - E",
          isLead: false,
          image: "002.jpg",
        },
        {
          name: "Jc Kamalakar  Musthyala",
          role: "Zone Parlamentarian",
          isLead: false,
          image: "008.jpg",
        },
        {
          name: "Jc Kathuri  Srinivas",
          role: "Zone Secreatary",
          isLead: false,
          image: "006.jpg",
        },
        {
          name: "JC PDM Shyam sunder  Madugala",
          role: "Zone Treasurer",
          isLead: false,
          image: "004.jpg",
        },
        {
          name: "Jc Vishakha  Mashankar",
          role: "Zone Foundation Officer",
          isLead: false,
          image: "013.jpg",
        },
      ],
    },
    {
      name: "",
      members: [
        {
          name: "Jc ZAHABIA  KANCHANVALA",
          role: "Zone P R Person & Editor",
          isLead: true,
          image: "",
        },
        {
          name: "Jc Radha Krishna Sathelli ",
          role: "Zone Director",
          isLead: false,
          image: "",
        },
        {
          name: "Jc Kartik  Gumidelli",
          role: "Zone Director",
          isLead: false,
          image: "003.jpg",
        },
        {
          name: "Jc NITI  KADAKIA",
          role: "Zone Director",
          isLead: false,
          image: "018.jpg",
        },
        {
          name: "Jc CHANDRA SEKHAR NALLAMOTHU  ",
          role: "Zone Director",
          isLead: false,
          image: "012.jpg",
        },
        {
          name: "Jc DEEPKANTH SOMA",
          role: "Zone Director",
          isLead: false,
          image: "",
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
          image: "",
        },
        {
          name: "Jc BHASKAR REDDY  VENATI",
          role: "Regional Chairman",
          isLead: false,
          image: "",
        },
        {
          name: "Jc Sandeep  Jain",
          role: "Regional Chairman",
          isLead: false,
          image: "",
        },
        {
          name: "Jc Viikash Jain",
          role: "Regional Chairman",
          isLead: false,
          image: "010.jpg",
        },
        {
          name: "Jc SUNEEL BABU  PENUMAKA  ",
          role: "Regional Chairman",
          isLead: false,
          image: "015.jpg",
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
          image: "",
        },
        {
          name: "Jc SRIKANTH  THELUKUNTA",
          role: "Zone Coordinator",
          isLead: false,
          image: "",
        },
        {
          name: "JC PDM CHAITANYA KUMAR  VANKAYALA",
          role: "Zone Coordinator",
          isLead: false,
          image: "011.jpg",
        },
        {
          name: "Jc Dr Shripuja  SIDDAMSETTY",
          role: "Zone Coordinator",
          isLead: false,
          image: "019.jpg",
        },
        {
          name: "Jc Naveen  Majety",
          role: "Zone Coordinator",
          isLead: false,
          image: "",
        },
        {
          name: "Jc Guggilla  Vinay",
          role: "Zone Coordinator",
          isLead: false,
          image: "016.jpg",
        },
        {
          name: "Jc SOMESH  SOMA",
          role: "Zone Coordinator",
          isLead: false,
          image: "",
        },
        {
          name: "Jc Muchanapalli  Suman kumar",
          role: "Zone Coordinator",
          isLead: false,
          image: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F8F5F0] py-8 md:py-16 px-4 md:px-6 lg:px-8 mt-10">
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
