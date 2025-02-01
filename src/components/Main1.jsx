import React from "react";
import bgimg from "../assets/homebgimg.png";
import centerImg from "../assets/testimgbg.png";

const Main1 = () => {
  return (
    <div className="relative">
      {/* This div will be under the navbar */}
      <div
        className="flex h-screen w-full items-center justify-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Add padding-top to account for navbar height */}
        <div className="flex h-full w-full items-center justify-center pt-16">
          {" "}
          {/* pt-16 = 4rem = 64px */}
          <div className="flex h-full w-full items-center justify-center p-4">
            <img
              src={centerImg}
              alt="Centered Image"
              className="h-[75%] w-[75%] object-contain"
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
