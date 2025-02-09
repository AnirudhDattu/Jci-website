import React from "react";
import bgimg from "../assets/homebgimg.png";

// import centerImg from "../assets/img2.png";
import centerImg from "../assets/testimgbg.png";

const Main1 = () => {
  return (
    <div className="relative bg-[#F8F5F0]">
      <div
        className="flex h-screen w-full items-start pb-20"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-full w-full items-center justify-center pt-16 ">
          <div className="flex lg:w-full h-full items-center justify-center p-4  pt-10">
            <img
              src={centerImg}
              alt="Centered Image"
              className="h-[75%] w-[75%] lg:object-contain object-cover "
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
