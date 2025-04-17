import React from "react";
import bgimg from "../assets/homebgimg.png";
import centerImg from "../assets/testimgbg.png";

const Main1 = () => {
  return (
    <div className="relative bg-[#F8F5F0]">
      <div
        className="flex h-screen w-full items-start pb-20"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-full w-full items-center justify-center pt-16">
          <div className="flex lg:w-full h-full items-center justify-center p-4 pt-10">
            {/* Added rounded classes and overflow-hidden container */}
            <div className="rounded-[4rem]  overflow-hidden h-[75%] w-[95%] lg:h-[90%] lg:w-[90%]">
              <img
                src={centerImg}
                alt="Centered Image"
                className="h-full w-full lg:object-contain object-cover"
                style={{
                  maxWidth: "100%",
                  maxHeight: "95%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
