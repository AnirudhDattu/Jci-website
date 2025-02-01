import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import bannerImg from "../assets/parallex.png"; // Ensure this path is correct

const ParallaxBannerComponent = () => {
  return (
    <ParallaxProvider>
      <div className="relative isolate min-h-screen">
        <ParallaxBanner className="min-h-screen">
          {/* Background Layer */}
          <ParallaxBannerLayer speed={-15} scale={[1, 1.05]}>
            <img
              src={bannerImg}
              alt="Parallax Background"
              className="h-full w-full object-cover"
            />
          </ParallaxBannerLayer>

          {/* Content Layer */}
          <ParallaxBannerLayer speed={5}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl font-extrabold md:text-5xl drop-shadow-xl">
                Become a Member of the Alumni Club!
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                Join a network of professionals and alumni making an impact.
              </p>
              <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 md:px-8 md:py-4 md:text-xl">
                Apply Now
              </button>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxBannerComponent;
