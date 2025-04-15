import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import bannerImg from "../assets/parallex.png"; // Ensure this path is correct
// import SplashCursor from "../../Reactbits/SplashCursor/SplashCursor";
import SplashCursorWrapper from "./SplashCursorWrapper";

const ParallaxBannerComponent = () => {
  return (
    <div className="isolate">
      <ParallaxProvider>
        <div className="relative isolate min-h-screen">
          <ParallaxBanner className="min-h-screen">
            {/* Background Layer */}
            <ParallaxBannerLayer speed={-20} scale={[1, 1.1]}>
              <img
                src={bannerImg}
                alt="Parallax Background"
                className="h-full w-full object-cover"
              />
            </ParallaxBannerLayer>

            {/* Content Layer */}
            <ParallaxBannerLayer speed={10}>
              <SplashCursorWrapper />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-3xl font-extrabold md:text-5xl drop-shadow-xl">
                  Become a Member of the Alumni Club!
                </h1>
                <p className="mt-4 text-lg md:text-xl opacity-90">
                  Join a network of professionals and alumni making an impact.
                </p>
                <a
                  href="https://jac.jciindia.in/join-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 md:px-8 md:py-4 md:text-xl"
                >
                  Join Now
                </a>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxBannerComponent;
