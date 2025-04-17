import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Images = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
};

export default Images;
